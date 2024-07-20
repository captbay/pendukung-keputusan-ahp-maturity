"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Toaster, toast } from 'sonner';
import ProgressBar from '@/app/ui/progress-bar/progressBar';
import LoadingScreen from '../loading-screen/loadingScreen';
import { Question, QuestionPerSection, StateMaturity, postQuestionMaturityAdmin, submitMaturity } from '@/lib/actions';
import { EditIcon } from '@/app/icon/EditIcon';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Spacer, Tooltip, Button, useDisclosure, Checkbox, Input, Link, Textarea } from "@nextui-org/react";
import ConfirmationModal from '@/app/ui/confirmation-modal/confirmationModal';
import { on } from 'events';
import { TrashIcon } from '@/app/icon/TrashIcon';
import { PlusIcon } from '@/app/icon/PlusIcon';
import { useRouter } from 'next/navigation';

interface MaturityTableProps {
  maturityQuestion: QuestionPerSection[];
}

const MaturityQuestionEditTable: React.FC<MaturityTableProps> = ({ maturityQuestion }) => {
  const [currentCheckpoint, setCurrentCheckpoint] = useState(0);
  const [totalCheckpoint, setTotalCheckpoint] = useState(maturityQuestion.length - 1);
  const [questions, setQuestions] = useState(maturityQuestion);
  const eachLevelQuestion = questions[currentCheckpoint];
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen: isEditModalOpen, onOpen: onEditModalOpen, onOpenChange: onEditModalOpenChange } = useDisclosure();
  const { isOpen: isAddModalOpen, onOpen: onAddModalOpen, onOpenChange: onAddModalOpenChange } = useDisclosure();
  const { isOpen: isConfirmationModalOpen, onOpen: onConfirmationModalOpen, onOpenChange: onConfirmationModalOpenChange } = useDisclosure();
  const { isOpen: isConfirmationAddModalOpen, onOpen: onConfirmationAddModalOpen, onOpenChange: onConfirmationAddModalOpenChange } = useDisclosure();
  const [newQuestion, setNewQuestion] = useState('');
  const clickedData = useRef<{ id: string, kode: string, question: string } | null>(null);
  const clickedCategory = useRef<string>("");
  const clickedLevel = useRef<number>(0);
  let questionCounter = 1;
  const prefixKode = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const router = useRouter();

  const handleCheckpointClick = (index: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    questionCounter = 1;
    setCurrentCheckpoint(index);
  };

  const handleNextButton = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    questionCounter = 1;
    setCurrentCheckpoint(currentCheckpoint + 1);
  };

  const handlePreviousButton = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    questionCounter = 1;
    setCurrentCheckpoint(currentCheckpoint - 1);
  };

  const handleAddQuestion = async() => {
    setIsLoading(true);
    const newKode = `${prefixKode[currentCheckpoint]}${questionCounter.toString().padStart(2, '0')}`;
    const newQuestionData = { code: "Dummy aja", question: newQuestion, category_id: clickedCategory.current, level: clickedLevel.current, id: "Dummy juga nih bos" };
    console.log('this is new question data to be added --- ', newQuestionData);
    const formData = new FormData();
    formData.append("question", JSON.stringify([newQuestionData]));
    setNewQuestion('');
    try{
      const response = await postQuestionMaturityAdmin(formData);

      if(response?.success){
        toast.success("Question added successfully");
        window.location.reload();
      } else{
        toast.error("Failed to add question");
      }
      setIsLoading(false);
    } catch(error){
      toast.error("Failed to add question");
      setIsLoading(false);
    }
  };

  const handleEditQuestion = async () => {
    if (!clickedData.current) return;
    const updatedData = { ...clickedData.current, question: newQuestion };
    const formData = new FormData();
    formData.append('question', JSON.stringify([updatedData]));

    setIsLoading(true);

    try {
      const result = await postQuestionMaturityAdmin(formData);
      if(result!.success) {
        toast.success('Question updated successfully');
        // take the updated question and update the state
        const updatedQuestions = maturityQuestion.map((questionSet) => {
          const updatedDetail = questionSet.detail.map((detail) => {
            const updatedQuestion = detail.question?.map((question) => {
              if (question.id === updatedData.id) {
                return updatedData;
              }
              return question;
            });
            return { ...detail, question: updatedQuestion };
          });
          return { ...questionSet, detail: updatedDetail };
        });
        console.log('updatedQuestions ---- ', updatedQuestions);
        setQuestions(updatedQuestions);
      } else {
        toast.error("Failed to update question");
      }
      setIsLoading(false);
      onConfirmationModalOpenChange();
      onEditModalOpenChange();
    } catch (error) {
      toast.error('Failed to update question: ', error as any);
      setIsLoading(false);
    }
  };

  return (
    <div className="justify-center items-center max-lg:overflow-x-auto w-full">
      <div className='max-lg:px-4'>
        <ProgressBar
          progress={(currentCheckpoint) / (totalCheckpoint) * 100}
          totalCheckpoint={totalCheckpoint + 1}
          currentCheckpoint={currentCheckpoint + 1}
          icons={Array.from({ length: totalCheckpoint + 1 }, (_, i) => String(i + 1))}
          onClickCheckpoint={handleCheckpointClick}
        />
      </div>
      <Spacer y={8} />
      <p className='font-bold text-xl text-tertiary mb-2'>{eachLevelQuestion.title}</p>
      {eachLevelQuestion.detail.map((questionSet, index) => {
        return (
        <div className='w-full' key={index}>
          <table className="border-collapse border border-gray-400 w-full sm:min-w-full mb-6">
            <thead className="bg-primary top-0 z-10">
              <tr>
                <th colSpan={2} className="border border-amber-700 px-4 py-2 text-secondary">Level {questionSet.level}</th>
                <th className="border border-amber-700 px-4 py-2 text-secondary">
                  <Button
                    onPress={() => {
                      console.log('lalala clicked add question')
                      onAddModalOpen();
                      clickedCategory.current = eachLevelQuestion.category_id;
                      clickedLevel.current = questionSet.level;
                    }}
                    className='bg-primary hover:bg-red-700 hover:text-white text-secondary'
                    prefix='plus'
                  >
                    <PlusIcon />
                    Add Question
                  </Button>
                </th>
              </tr>
              <tr>
                <th className="border border-amber-700 px-4 py-2 text-secondary w-[5%]">Kode</th>
                <th className="border border-amber-700 px-4 py-2 text-secondary w-[45%]">Pertanyaan</th>
                <th className="border border-amber-700 px-4 py-2 text-secondary w-[5%]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {questionSet.question?.map((data, qIndex) => {
                const newKode = `${prefixKode[currentCheckpoint]}${questionCounter.toString().padStart(2, '0')}`;
                questionCounter += 1;
                return (
                <tr key={qIndex}>
                  <td className="border border-gray-400 px-4 py-2">{newKode}</td>
                  <td className="border border-gray-400 px-4 py-2">{data.question}</td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    <Tooltip placement='top' content='Edit'>
                      <Button
                        className='bg-secondary'
                        onClick={() => {
                          clickedData.current = data;
                          setNewQuestion(data.question);
                          onEditModalOpen();
                        }}
                      >
                        <EditIcon />
                      </Button>
                    </Tooltip>
                  </td>
                </tr>
              )})}
            </tbody>
          </table>
        </div>
      )})}
      <div className='flex justify-end gap-2'>
        <Button
          disabled={currentCheckpoint === 0}
          className={`text-secondary w-24 text-center ${currentCheckpoint === 0 ? 'disabled' : 'hover:bg-red-700 hover:text-white bg-primary'}`}
          onClick={handlePreviousButton}
        >
          Previous
        </Button>
        <Button
          className={`text-secondary w-24 text-center ${currentCheckpoint === totalCheckpoint ? 'disabled' : 'hover:bg-red-700 hover:text-white bg-primary'}`}
          onClick={handleNextButton}
        >
          <h2 className={`text-secondary`}>
            Next
          </h2>
        </Button>
      </div>
      <Modal
        isOpen={isEditModalOpen}
        onOpenChange={onEditModalOpenChange}
        placement="bottom-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Edit question</ModalHeader>
              <ModalBody>
                <Textarea
                  autoFocus
                  label="New question"
                  placeholder="Enter the new question here"
                  variant="bordered"
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={() => {
                  onClose();
                  setNewQuestion('');
                }}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={onConfirmationModalOpen}
                  isDisabled={newQuestion.length == 0}
                >
                  Edit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Modal
        isOpen={isAddModalOpen}
        onOpenChange={onAddModalOpenChange}
        placement="bottom-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Add question</ModalHeader>
              <ModalBody>
                <Textarea
                  autoFocus
                  label="New question"
                  placeholder="Enter the new question here"
                  variant="bordered"
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={() => {
                  onClose();
                  setNewQuestion('');
                }}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={onConfirmationAddModalOpen}
                  isDisabled={newQuestion.length == 0}
                >
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Modal
        size={'lg'}
        isOpen={isConfirmationAddModalOpen}
        onOpenChange={onConfirmationAddModalOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Confirmation Add Question</ModalHeader>
              <ModalBody>
                <p>
                  Apakah Anda yakin ingin menambah pertanyaan ini?
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Tidak
                </Button>
                <Button
                  color="primary"
                  onPress={async () => {
                    onConfirmationAddModalOpenChange();
                    onAddModalOpenChange();
                    await handleAddQuestion();
                  }}
                >
                  Ya
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Modal
        size={'lg'}
        isOpen={isConfirmationModalOpen}
        onOpenChange={onConfirmationModalOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Confirmation Edit Question</ModalHeader>
              <ModalBody>
                <p>
                  Apakah Anda yakin ingin mengubah pertanyaan ini?
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Tidak
                </Button>
                <Button
                  color="primary"
                  onPress={async () => {
                    onConfirmationModalOpenChange();
                    onEditModalOpenChange();
                    await handleEditQuestion();
                  }}
                >
                  Ya
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Toaster
        expand={true}
        richColors
        position="top-center"
      />
      <LoadingScreen isLoading={isLoading} text={"Mengubah pertanyaan..."} />
    </div>
  );
};

export default MaturityQuestionEditTable;