"use client"
import React, { useState } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Spacer } from "@nextui-org/react";
import { Toaster, toast } from 'sonner';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { app } from '@/firebase';
import ConfirmationModal from '@/app/ui/confirmation-modal/confirmationModal';
import ProgressBar from '@/app/ui/progress-bar/progressBar';

interface Question {
  id: number;
  kode: string;
  question: string;
  ya: boolean;
  tidak: boolean;
  evidence: string | null;
}

interface Detail {
  level: number;
  rekomendasi: string;
  questions: Question[];
}

interface QuestionSet {
  title: string;
  detail: Detail[];
}

interface MaturityTableProps {
  maturityQuestion: QuestionSet[];
}

const MaturityTable: React.FC<MaturityTableProps> = ({ maturityQuestion }) => {
  const storage = getStorage(app);
  const [currentCheckpoint, setCurrentCheckpoint] = useState(0);
  const [totalCheckpoint, setTotalCheckpoint] = useState(maturityQuestion.length - 1);
  const eachLevelQuestion = maturityQuestion[currentCheckpoint];
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const validateAnswer = () => {
    return true;
  };

  const handleCheckpointClick = (index: number) => {
    if (index > currentCheckpoint) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentCheckpoint(index);
  };

  const handleNextButton = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if(validateAnswer()){
      setCurrentCheckpoint(currentCheckpoint + 1);
    }
  };

  const handlePreviousButton = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentCheckpoint(currentCheckpoint - 1);
  };

  // const handleSelection = (index: number, type: 'ya' | 'tidak') => {
  //   const newData = [...dataTemp];
  //   newData[index][type] = !newData[index][type]; // Toggle the selected state
  //   if (type === 'ya' && newData[index][type]) {
  //     newData[index].tidak = false; // Ensure only one can be selected
  //   } else if (type === 'tidak' && newData[index][type]) {
  //     newData[index].ya = false; // Ensure only one can be selected
  //   }
  //   setDataTemp(newData);
  // };

  // const handleFileButtonClick = (index: number) => {
  //   const fileInput = document.getElementById(`evidence-${index}`) as HTMLInputElement;
  //   if (fileInput) {
  //     fileInput.click();
  //   }
  // };

  // const handleFileChange = async(e: React.ChangeEvent<HTMLInputElement>, index: number) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     const storageRef = ref(storage, `evidences/${file.name}`);
  //     const allowedExtensions = ['pdf, jpeg, jpg, png'];
  //     const fileExtension = file.name.split('.').pop()?.toLowerCase();

  //     if (fileExtension && allowedExtensions.includes(fileExtension)) {
  //       try {
  //         const snapshot = await uploadBytes(storageRef, file)
  //         const tempUrl = await getDownloadURL(snapshot.ref)
  //         console.log('File uploaded successfully: ', tempUrl)
          
  //         const newData = [...dataTemp];
  //         newData[index].evidence = file.name;
  //         setDataTemp(newData);
  //       } catch (error) {
  //         console.error('Error uploading file:', error);
  //       }
  //     } else {
  //       toast.error('Only PDF, JPEG, JPG, and PNG file are allowed!');
  //       e.target.value = '';
  //     }
  //   }
  // };

  return (
    <div className="justify-center items-center max-lg:overflow-x-auto w-full">
      <ProgressBar
        progress={(currentCheckpoint) / (totalCheckpoint) * 100}
        totalCheckpoint={totalCheckpoint + 1}
        currentCheckpoint={currentCheckpoint + 1}
        icons={Array.from({ length: totalCheckpoint + 1 }, (_, i) => String(i + 1))}
        onClickCheckpoint={handleCheckpointClick}
      />
      <Spacer y={8} />
      <p className='font-bold text-xl text-tertiary mb-2'>{eachLevelQuestion.title}</p>
      {eachLevelQuestion.detail.map((questionSet, index) => (
        <div className='w-full'>
          <table className="border-collapse border border-gray-400 w-full sm:min-w-full mb-6">
            <thead className="bg-primary top-0 z-10">
              <tr>
                <th colSpan={5} className="border border-amber-700 px-4 py-2 text-secondary">Level {questionSet.level}</th>
              </tr>
              <tr>
                <th className="border border-amber-700 px-4 py-2 text-secondary w-[5%]">Kode</th>
                <th className="border border-amber-700 px-4 py-2 text-secondary w-[45%]">Pertanyaan</th>
                <th className="border border-amber-700 px-4 py-2 text-secondary w-[5%]">Ya</th>
                <th className="border border-amber-700 px-4 py-2 text-secondary w-[5%]">Tidak</th>
                <th className="border border-amber-700 px-4 py-2 text-secondary w-[20%]">Evidence</th>
              </tr>
            </thead>
            <tbody>
              {questionSet.questions.map((data, index) => (
                <tr key={index}>
                  <td className="border border-gray-400 px-4 py-2">{data.kode}</td>
                  <td className="border border-gray-400 px-4 py-2">{data.question}</td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    <input
                      type="radio"
                      name={`row-${index}-ya`}
                      checked={data.ya}
                      // onChange={() => handleSelection(index, 'ya')}
                    />
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    <input
                      type="radio"
                      name={`row-${index}-tidak`}
                      checked={data.tidak}
                      // onChange={() => handleSelection(index, 'tidak')}
                    />
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    <Button
                      className='bg-secondary text-primary border-primary border-2'
                      // onClick={() => handleFileButtonClick(index)}
                    >
                      {/* make the data.evidence if the length is more than 20 word then substring it but still show the jpg */}
                      {data.evidence ? 
                        data.evidence.length > 20 ? 
                          data.evidence.substring(0, 9) + "...  " + data.evidence.substring(data.evidence.length - 4) 
                        : data.evidence
                      : "Upload Evidence"}
                    </Button>
                    <input
                      id={`evidence-${index}`}
                      type="file"
                      name={`row-${index}-evidence`}
                      accept=".pdf,.jpeg,.jpg,.png,.doc,.docx"
                      // onChange={(e) => handleFileChange(e, index)}
                      style={{ display: "none" }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
      <div className='flex justify-end gap-2'>
        <Button
          disabled={currentCheckpoint === 0}
          className={`text-secondary w-24 text-center ${currentCheckpoint === 0 ? 'disabled' : 'hover:bg-red-700 hover:text-white bg-primary'}`}
          onClick={() => {
            handlePreviousButton();
          }}
        >
          Previous
        </Button>
        <Button
          className={`text-secondary w-24 text-center ${currentCheckpoint === totalCheckpoint ? 'hover:bg-red-700 hover:text-white bg-primary' : 'hover:bg-red-700 hover:text-white bg-primary'}`}
          onClick={() => {
            if (currentCheckpoint === totalCheckpoint) {
              if(validateAnswer()){
                setIsConfirmationModalOpen(true);
              }
            } else {
              handleNextButton();
            }
          }}
        >
          <h2 className={`text-secondary ${currentCheckpoint === totalCheckpoint ? 'font-bold' : ''}`}>
            {currentCheckpoint === totalCheckpoint ? 'Submit' : 'Next'}
          </h2>
        </Button>
      </div>
      <ConfirmationModal
        title="Submit Maturity Form"
        message="Are you sure you want to submit your Maturity Form?"
        onConfirm={() => {
          // calculateScore();
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
    </div>
  );
};

export default MaturityTable;