import { Spinner } from '@nextui-org/react';
import React from 'react';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex flex-col justify-center items-center z-50">
      <Spinner />
      <div className="text-white text-lg">Loading...</div>
    </div>
  );
};

export default LoadingScreen;
