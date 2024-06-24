import React from "react";
import { Tooltip, Progress } from "@nextui-org/react";

interface ProgressBarProps {
  progress: number;
  totalCheckpoint: number;
  currentCheckpoint: number;
  icons: string[];
  onClickCheckpoint: (index: number) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, totalCheckpoint, currentCheckpoint, icons, onClickCheckpoint }) => {
  return (
    <div className="relative w-full z-0 mt-20">
      <Progress value={progress} size="lg" color="primary" className="rounded-md" />
      {Array.from({ length: totalCheckpoint }).map((_, index) => (
        <Tooltip content={`Bagian: ${icons[index]}`} key={index}>
          <div
            className="absolute top-[-10%] lg:top-[-35%]"
            style={{
              left: `${((index) / (totalCheckpoint - 1)) * 100}%`,
              transform: 'translateX(-50%)',
              cursor: index + 1 <= currentCheckpoint ? 'pointer' : 'default',
            }}
            onClick={() => onClickCheckpoint(index)}
          >
            <div
              className={`w-6 h-6 lg:w-8 lg:h-8 rounded-full border-2 border-primary text-center ${
                index < currentCheckpoint ? "bg-primary" : "bg-secondary"
              }`}
            >
              <p className="text-white text-center text-xs lg:text-base mt-0.5">{index + 1}</p>
            </div>
          </div>
        </Tooltip>
      ))}
    </div>
  );
};

export default ProgressBar;