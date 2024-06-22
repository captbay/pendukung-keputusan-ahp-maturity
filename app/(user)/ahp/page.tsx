"use client"
import AHPTable from "@/app/ui/ahp-table/ahpTable";
import ConfirmationModal from "@/app/ui/confirmation-modal/confirmationModal";
import ProgressBar from "@/app/ui/progress-bar/progressBar";
import { Button, Spacer } from "@nextui-org/react";
import { useState } from "react";

export default function AHP() {
  interface Criterion {
    left: string;
    right: string;
  }

  const criteria: Criterion[] = [
    { left: 'Project Size', right: 'Project Complexity' },
    { left: 'Project Size', right: 'Project Importance' },
    { left: 'Project Size', right: 'Development Approach' },
    { left: 'Project Complexity', right: 'Project Importance' },
    { left: 'Project Complexity', right: 'Development Approach' },
    { left: 'Project Importance', right: 'Development Approach' },
  ];

  const [currentCheckpoint, setCurrentCheckpoint] = useState(1);
  const [totalCheckpoint, setTotalCheckpoint] = useState(7);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [selections, setSelections] = useState<(any)[]>(new Array(criteria.length).fill(null));

  const handleCheckpointClick = (index: number) => {
    if(index + 1 > currentCheckpoint) return;
    setCurrentCheckpoint(index + 1);
  };

  const handleNextButton = () => {
    setCurrentCheckpoint(currentCheckpoint + 1);
  };

  const handlePreviousButton = () => {
    setCurrentCheckpoint(currentCheckpoint - 1);
  };

  return (
    <main className="flex w-full min-h-screen justify-center items-center bg-secondary z-0">
      <div className="flex flex-col lg:flex-row bg-secondary p-4 lg:p-14 rounded-lg w-full max-w-5xl">
        <div className="flex flex-col w-full h-full justify-center items-center">
          <ProgressBar 
            progress={(currentCheckpoint - 1) / (totalCheckpoint - 1) * 100}
            totalCheckpoint={totalCheckpoint}
            currentCheckpoint={currentCheckpoint}
            icons={["1", "2", "3", "4", "5", "6", "7"]}
            onClickCheckpoint={handleCheckpointClick}
          />
          <Spacer y={4} />
          <h1 className="text-xl lg:text-3xl font-bold text-center">Analytical Hierarchy Process</h1>
          <h1 className="text-md lg:text-xl p-2 text-center">Pilih skala yang sesuai dengan kecondongan kriteria.</h1>
          <AHPTable 
            selections={selections.map(s => s ?? null)}
            setSelections={setSelections}
            criteria={criteria}
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
                if(currentCheckpoint === totalCheckpoint) {
                  setIsConfirmationModalOpen(true);
                } else {
                  handleNextButton();
                }
              }}
              className={`text-secondary w-24 text-center ${currentCheckpoint === totalCheckpoint ? 'hover:bg-red-700 hover:text-white bg-primary' : 'hover:bg-red-700 hover:text-white bg-primary'}`}
              shadow-md
            >
              <h2 className={`text-secondary ${currentCheckpoint === totalCheckpoint ? "font-bold" : ""}`}>{currentCheckpoint === totalCheckpoint ? "Submit" : "Next"}</h2>
            </Button>
          </div>
        </div>
      </div>
      <ConfirmationModal 
        title="Submit AHP"
        message="Are you sure you want to submit your AHP?"
        onConfirm={() => {
          console.log("AHP submitted");
          setIsConfirmationModalOpen(false);
        }}
        onClose={() => setIsConfirmationModalOpen(false)}
        isOpen={isConfirmationModalOpen}
      />
    </main>
  );
}