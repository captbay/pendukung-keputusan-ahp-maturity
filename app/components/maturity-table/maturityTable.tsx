"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Button, Spacer } from "@nextui-org/react";
import { Toaster, toast } from 'sonner';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { app } from '@/firebase';
import ConfirmationModal from '@/app/ui/confirmation-modal/confirmationModal';
import ProgressBar from '@/app/ui/progress-bar/progressBar';
import LoadingScreen from '../loading-screen/loadingScreen';
import { QuestionPerSection, StateMaturity, submitMaturity } from '@/lib/actions';
import { useRouter } from 'next/navigation';

interface MaturityTableProps {
  maturityQuestion: QuestionPerSection[];
  session: any;
  isAdmin?: boolean;
}

const MaturityTable: React.FC<MaturityTableProps> = ({ maturityQuestion, session, isAdmin }) => {
  const storage = getStorage(app);
  const [currentCheckpoint, setCurrentCheckpoint] = useState(0);
  const [totalCheckpoint, setTotalCheckpoint] = useState(maturityQuestion.length - 1);
  const eachLevelQuestion = maturityQuestion[currentCheckpoint];
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [formData, setFormData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const formDataMaturity = new FormData();
  const [textProgress, setTextProgress] = useState("Mengunggah evidence...");
  const [progressValue, setProgressValue] = useState(0);
  let questionCounter = 1;
  const prefixKode = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // initialize form data with default values
    const initialData = maturityQuestion.flatMap(questionSet =>
      questionSet.detail.flatMap(detail =>
        detail.question?.map(question => ({
          id_user: session?.user.id,
          id_question: question.id,
          id_category: questionSet.category_id,
          ya: question.ya,
          tidak: question.tidak,
          evidence: question.evidence,
          file: null,
          is_acc: question.is_acc
        }))
      )
    );
    setFormData(initialData);
  }, [maturityQuestion]);

  const validateAnswer = () => {
    const currentQuestions = eachLevelQuestion.detail.flatMap(detail => detail.question);
    return currentQuestions.every(question => {
      const answer = formData.find(item => item.id_question === question?.id);
      return answer && (answer.ya || answer.tidak);
    });
  };

  const handleCheckpointClick = (index: number) => {
    if(!isAdmin){
      if (index > currentCheckpoint) return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    questionCounter = 1;
    setCurrentCheckpoint(index);
  };

  const handleNextButton = () => {
    console.log('Form Data: ', formData);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    questionCounter = 1;
    if(isAdmin){
      setCurrentCheckpoint(currentCheckpoint + 1);
      modalContentRef!.current?.scrollIntoView({ block:'nearest' });
    } else {
      if(validateAnswer()){
        setCurrentCheckpoint(currentCheckpoint + 1);
      }
    }
  };

  const handlePreviousButton = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    questionCounter = 1;
    setCurrentCheckpoint(currentCheckpoint - 1);
  };

  const handleFileButtonClick = (index: string) => {
    const fileInput = document.getElementById(`evidence-${index}`) as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleRadioChange = (questionId: string, answer: boolean) => {
    setFormData(prev => prev.map(item =>
      item.id_question === questionId 
        ? { ...item, ya: answer, tidak: !answer, evidence: answer ? item.evidence : '', file: answer ? item.file : null } 
        : item
    ));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, questionId: string) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => prev.map(item =>
        item.id_question === questionId ? { ...item, evidence: file.name, file } : item
      ));
    }
  };

  const handleSubmit = async () => {
    console.log('Form Data: ', formData);
    setIsLoading(true);
    try {
      const uploadPromises = formData.map(async data => {
        if (data.file) {
          const storageRef = ref(storage, `evidences/${data.file.name}`);
          await uploadBytes(storageRef, data.file);
          const downloadURL = await getDownloadURL(storageRef);
          return { 
            id_question: data.id_question,
            answer: data.ya,
            evidence: downloadURL,
          };
        }

        // reconstruct the data
        return {
          id_question: data.id_question,
          answer: data.ya,
          evidence: data.evidence,
        };
      });

      const updatedData = await Promise.all(uploadPromises);
      console.log('Final Data:', updatedData);
      setProgressValue(50);
      setTextProgress("Mengirim data ke server...");

      formDataMaturity.append('result_answer_maturity', JSON.stringify(updatedData));
      // hit the func DB

      const state = {} as StateMaturity;

      const result = await submitMaturity(
        session.user.id,
        state,
        formDataMaturity
      );

      if (result!.success) {
        setProgressValue(100);
        toast.success("Form submitted successfully!");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        toast.error("Failed to submit form. Please try again later.");
      }

      // setTimeout(() => {
      //   if (result!.success) {
      //     setProgressValue(100);
      //     toast.success("Form submitted successfully!");
      //     setTimeout(() => {
      //       window.location.reload();
      //     }, 1000);
      //   } else {
      //     toast.error("Failed to submit form. Please try again later.");
      //   }
  
      //   setIsLoading(false);
      // }, 5000);
    } catch (error) {
      console.error('Error uploading files:', error);
      toast.error('Gagal untuk mengunggah evidence. Silakan coba lagi.');
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
      {eachLevelQuestion.detail.map((questionSet, index) => (
        <div className='w-full' key={index}>
          <table className="border-collapse border border-gray-400 w-full sm:min-w-full mb-6">
            <thead className="bg-primary top-0 z-10">
              <tr>
                <th colSpan={6} className="border border-amber-700 px-4 py-2 text-secondary">Level {questionSet.level}</th>
              </tr>
              <tr>
                <th className="border border-amber-700 px-4 py-2 text-secondary w-[5%]">Kode</th>
                <th className="border border-amber-700 px-4 py-2 text-secondary w-[45%]">Pertanyaan</th>
                <th className="border border-amber-700 px-4 py-2 text-secondary w-[5%]">Ya</th>
                <th className="border border-amber-700 px-4 py-2 text-secondary w-[5%]">Tidak</th>
                <th className="border border-amber-700 px-4 py-2 text-secondary w-[20%]">Evidence</th>
                <th className="border border-amber-700 px-4 py-2 text-secondary w-[20%]">Rekomendasi</th>
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
                    <input
                      type="radio"
                      aria-label='Ya'
                      name={`row-${data.id}-ya`}
                      checked={formData.find(item => item.id_question === data.id)?.ya || false}
                      onChange={() => handleRadioChange(data.id, true)}
                      disabled={isAdmin ? true : formData.find(item => item.id_question === data.id)?.is_acc}
                    />
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    <input
                      type="radio"
                      aria-label='Tidak'
                      name={`row-${data.id}-tidak`}
                      checked={formData.find(item => item.id_question === data.id)?.tidak || false}
                      onChange={() => handleRadioChange(data.id, false)}
                      disabled={isAdmin ? true : formData.find(item => item.id_question === data.id)?.is_acc}
                    />
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                  {formData.find((item) => item.id_question === data.id)?.ya ? (
                    formData.find((item) => item.id_question === data.id)?.evidence?.startsWith("https://") 
                      ? (
                        <a
                          href={formData.find((item) => item.id_question === data.id)?.evidence || ""}
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary"
                        >
                          Lihat Evidence
                        </a>
                      ) : (
                        <Button
                          className='bg-secondary text-primary border-primary border-2'
                          onClick={() => handleFileButtonClick(data.id)}
                        >
                          {formData.find(item => item.id_question === data.id)?.evidence 
                            ? formData.find(item => item.id_question === data.id).evidence.length > 20 
                              ? formData.find(item => item.id_question === data.id).evidence.substring(0, 9) + "...  " + formData.find(item => item.id_question === data.id).evidence.substring(formData.find(item => item.id_question === data.id).evidence.length - 4) 
                              : formData.find(item => item.id_question === data.id).evidence 
                            : "Upload Evidence"}
                        </Button>
                      )
                  ) : (
                    "-"
                  )}
                    <input
                      id={`evidence-${data.id}`}
                      type="file"
                      aria-label='Evidence'
                      name={`row-${data.id}-evidence`}
                      accept=".pdf,.jpeg,.jpg,.png,.doc,.docx"
                      onChange={(e) => {
                        handleFileChange(e, data.id);
                        console.log('attached evidence --- ', e.target.files?.[0])
                      }}
                      style={{ display: "none" }}
                    />
                  </td>
                  {qIndex === 0 && (
                    <td className="border border-gray-400 px-4 py-2" rowSpan={questionSet.question?.length}>
                      {questionSet.recommend}
                    </td>
                  )}
                </tr>
              )})}
            </tbody>
          </table>
        </div>
      ))}
      <div className='flex justify-end gap-2'>
        <Button
          disabled={currentCheckpoint === 0}
          className={`text-secondary w-24 text-center ${currentCheckpoint === 0 ? 'disabled' : 'hover:bg-red-700 hover:text-white bg-primary'}`}
          onClick={handlePreviousButton}
        >
          Previous
        </Button>
        <Button
          isDisabled={isAdmin && currentCheckpoint === totalCheckpoint}
          className={`text-secondary w-24 text-center ${currentCheckpoint === totalCheckpoint ? 'hover:bg-red-700 hover:text-white bg-primary' : 'hover:bg-red-700 hover:text-white bg-primary'}`}
          onClick={() => {
            if (currentCheckpoint === totalCheckpoint) {
              if(isAdmin){
                handleNextButton();
              } else {
                if(validateAnswer()){
                  setIsConfirmationModalOpen(true);
                } else{
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  toast.error('Silakan pilih jawaban untuk semua pertanyaan sebelum melanjutkan');
                }
              }
            } else {
              if(isAdmin){
                handleNextButton();
              } else {
                if(!validateAnswer()){
                  toast.error('Silakan pilih jawaban untuk semua pertanyaan sebelum melanjutkan');
                } else {
                  handleNextButton();
                }
              }
            }
          }}
        >
          <h2 className={`text-secondary ${currentCheckpoint === totalCheckpoint ? 'font-bold' : ''}`}>
            {
              isAdmin ? 
                'Next'
              : currentCheckpoint === totalCheckpoint ? 'Submit' : 'Next'
            }
          </h2>
        </Button>
      </div>
      <ConfirmationModal
        title="Submit Maturity Form"
        message="Are you sure you want to submit your Maturity Form?"
        onConfirm={() => {
          handleSubmit();
          setIsConfirmationModalOpen(false);
        }}
        onClose={() => setIsConfirmationModalOpen(false)}
        isOpen={isConfirmationModalOpen}
      />
      <Toaster 
        expand={true} 
        richColors 
        position="top-center"
      />
      <LoadingScreen isLoading={isLoading} isProgress={true} progressValue={progressValue} text={textProgress} />
    </div>
  );
};

export default MaturityTable;