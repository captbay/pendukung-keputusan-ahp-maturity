import { Progress, Spinner } from '@nextui-org/react';
import React from 'react';

interface LoadingScreenProps {
  isLoading?: boolean;
  text?: string;
  isProgress?: boolean;
  progressValue?: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  isLoading,
  text = "Loading...",
  isProgress = false,
  progressValue,
}) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex flex-col justify-center items-center z-50">
      {isProgress ? (
        <>
          <div className="text-secondary text-lg">{text}</div>
          <Progress 
            size="md"
            radius="md"
            classNames={{
              // base: "max-w-md",
              // track: "drop-shadow-md border border-default",
              // indicator: "bg-gradient-to-r from-red-100 to-red-700",
              label: "tracking-wider font-medium text-secondary",
              value: "text-secondary",
            }}
            color="danger" 
            showValueLabel={true} 
            value={progressValue} 
            className="max-w-md" 
          />
        </>
      ) : (
        <>
          <Spinner />
          <div className="text-secondary text-lg">{text}</div>
        </>
      )}
    </div>
  );
};

export default LoadingScreen;
