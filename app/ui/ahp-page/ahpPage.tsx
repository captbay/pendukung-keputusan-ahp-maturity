"use client"
import React, { useEffect, useState } from 'react';
import AHPTable from '@/app/ui/ahp-table/ahpTable';
import ConfirmationModal from '@/app/ui/confirmation-modal/confirmationModal';
import ProgressBar from '@/app/ui/progress-bar/progressBar';
import { criteriaData } from '@/app/utils/criteriaData';
import { Button, Spacer } from '@nextui-org/react';
import { getPerUserFormAhp, submitAhp } from '@/lib/actions';
import { StateAhp } from '@/lib/actions';
import { Toaster, toast } from 'sonner';
import { useRouter } from 'next/navigation';
import LoadingScreen from '@/app/components/loading-screen/loadingScreen';
import UserRecapTable from '@/app/components/user-recap-table/userRecapTable';
import NotFoundIcon from '@/app/icon/NotFoundIcon';
import Image from 'next/image';

interface AHPPageProps {
  session: any;
  userAhpData: any;
};

const AHPPage: React.FC<AHPPageProps> = ({ session, userAhpData }) => {
  const [currentCheckpoint, setCurrentCheckpoint] = useState(1);
  const [totalCheckpoint, setTotalCheckpoint] = useState(criteriaData.length);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [selections, setSelections] = useState<Array<Array<number | null>>>(() =>
    criteriaData.map(row => Array.from({ length: row.length }, () => null))
  );
  const tempSelections: Array<Array<number | null>> = criteriaData.map(row => Array.from({ length: row.length }, () => null));
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [startAhpForm, setStartAhpForm] = useState(false);

  const scales = [9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const tableKeyHeader = [
    "Perbandingan Berpasangan Tingkat Kepentingan Antar Kriteria",
    "Perbandingan Berpasangan Tingkat Kepentingan Setiap Alternatif pada Kriteria Project Size",
    "Perbandingan Berpasangan Tingkat Kepentingan Setiap Alternatif pada Kriteria Project Complexity",
    "Perbandingan Berpasangan Tingkat Kepentingan Setiap Alternatif pada Kriteria Project Importance",
    "Perbandingan Berpasangan Tingkat Kepentingan Setiap Alternatif pada Kriteria Project Approach"
  ];

  useEffect(() => {
    if(userAhpData){
      console.log('this is user ahp data --- ', userAhpData);
    }
  }, [userAhpData]);

  const handleCheckpointClick = (index: number) => {
    if (index + 1 > currentCheckpoint) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentCheckpoint(index + 1);
  };

  const handleNextButton = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if(validateAnswer()){
      setCurrentCheckpoint(currentCheckpoint + 1);
    }
  };

  const validateAnswer = () => {
    if(selections[currentCheckpoint - 1].includes(null)){
      toast.error('Silahkan pilih skala pada baris yang kosong');
      return false;
    };

    return true;
  };

  const calculateScore = () => {
    for(let i = 0; i < selections.length; i++){
      for(let j = 0; j < selections[i].length; j++){
        if(selections[i][j]! >= 0 && selections[i][j]! < 9){
          tempSelections[i][j] = scales[selections[i][j]!];
        } else if(selections[i][j]! >= 9 && selections[i][j]! <= 16){
          tempSelections[i][j] = 1 / scales[selections[i][j]!];
        }
      }
    }
    
    sendData();
  };

  const sendData = async() => {
    // show loading into true
    setIsLoading(true);
    const formData = new FormData();
    const state = {} as StateAhp;
    formData.append('section_one', JSON.stringify(tempSelections[0]));
    formData.append('section_two', JSON.stringify(tempSelections[1]));
    formData.append('section_three', JSON.stringify(tempSelections[2]));
    formData.append('section_four', JSON.stringify(tempSelections[3]));
    formData.append('section_five', JSON.stringify(tempSelections[4]));

    const result = await submitAhp(session.user.id, state, formData);
    // set the loading into false
    if(result!.success){
      toast.success('Analytical Hierarcy Process submitted successfully!');
      setIsLoading(false);
      setTimeout(() => {
        router.push('/dashboard');
      }, 1200);
    } else{
      toast.error('Failed to submit Analytical Hierarcy Process');
      setIsLoading(false);
    }
  };

  const handlePreviousButton = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentCheckpoint(currentCheckpoint - 1);
  };

  return (
    <main className="flex w-full min-h-screen bg-secondary z-0 justify-center">
      <div className="flex flex-col lg:flex-row bg-secondary rounded-lg w-full lg:w-[80%]">
        <div className="flex flex-col w-full h-full items-center">
          
          <div className='flex flex-col w-full items-center mt-10 max-lg:mt-20'>
            <div className='rounded-2xl flex'>
              <h1 className="text-2xl lg:text-3xl font-bold text-center text-tertiary p-4">Analytical Hierarchy Process</h1>
            </div>
            <div className='flex justify-center'>
              <Button
                onClick={() => setStartAhpForm(!startAhpForm)}
                className="text-secondary w-24 text-center hover:bg-red-700 hover:text-white bg-primary"
                shadow-md
              >
                {startAhpForm ? 'Close' : 'Start'}
              </Button>
            </div>
          </div>

          <div className='flex flex-col w-full h-full justify-center items-center max-lg:p-8 mb-[40px]'>
            {userAhpData && !startAhpForm ? (
              <UserRecapTable
                data={userAhpData.tableData}
                users={userAhpData.users}
              />
            ) : !userAhpData && !startAhpForm ? (
              <div className='flex justify-center items-center flex-col gap-4'>
                <NotFoundIcon />
                <p className="text-center text-xl max-w-[500px]">No AHP data found. Press START button above to fill the Analytical Hierarchy Process form.</p>
              </div>
            ) : (
              <>
                <ProgressBar
                  progress={(currentCheckpoint - 1) / (totalCheckpoint - 1) * 100}
                  totalCheckpoint={totalCheckpoint}
                  currentCheckpoint={currentCheckpoint}
                  icons={Array.from({ length: totalCheckpoint }, (_, i) => String(i + 1))}
                  onClickCheckpoint={handleCheckpointClick}
                />
                <Spacer y={8} />
                <h1 className="text-md lg:text-lg font-semibold text-center">{tableKeyHeader[currentCheckpoint - 1]}</h1>
                <h1 className="text-sm lg:text-md p-2 text-center">*Pilih skala yang sesuai dengan kecondongan kriteria.</h1>
                <AHPTable
                  selections={selections}
                  currentCheckpoint={currentCheckpoint - 1}
                  setSelections={setSelections}
                  criteria={criteriaData[currentCheckpoint - 1]}
                />
                <Spacer y={6} />
                <div className="flex gap-2 w-full justify-end">
                  <Button
                    onClick={handlePreviousButton}
                    className={`text-secondary w-24 text-center ${currentCheckpoint === 1 ? 'disabled' : 'hover:bg-red-700 hover:text-white bg-primary'}`}
                    shadow-md
                    disabled={currentCheckpoint === 1}
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={() => {
                      if (currentCheckpoint === totalCheckpoint) {
                        if(validateAnswer()){
                          setIsConfirmationModalOpen(true);
                        }
                      } else {
                        handleNextButton();
                      }
                    }}
                    className={`text-secondary w-24 text-center ${currentCheckpoint === totalCheckpoint ? 'hover:bg-red-700 hover:text-white bg-primary' : 'hover:bg-red-700 hover:text-white bg-primary'}`}
                    shadow-md
                  >
                    <h2 className={`text-secondary ${currentCheckpoint === totalCheckpoint ? 'font-bold' : ''}`}>
                      {currentCheckpoint === totalCheckpoint ? 'Submit' : 'Next'}
                    </h2>
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <ConfirmationModal
        title="Submit AHP"
        message="Are you sure you want to submit your AHP?"
        onConfirm={() => {
          calculateScore();
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
      <LoadingScreen isLoading={isLoading} />
    </main>
  );
}

export default AHPPage;