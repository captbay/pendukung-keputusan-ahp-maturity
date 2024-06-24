import React from 'react';

interface AHPTableProps {
  selections: (number | null)[][];
  setSelections: (selections: (number | null)[][]) => void;
  criteria: { left: string; right: string }[];
  currentCheckpoint: number;
}

const scales = [9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const AHPTable: React.FC<AHPTableProps> = ({ selections, setSelections, criteria, currentCheckpoint }) => {

  const handleSelection = (rowIndex: number, scaleIndex: number) => {
    const newSelections = [...selections];
    newSelections[currentCheckpoint][rowIndex] = scaleIndex;
    console.log(newSelections);
    setSelections(newSelections);
  };

  const getScore = (rowIndex: number, scaleIndex: number) => {
    if (scaleIndex < 8) {
      return scales[scaleIndex];
    } else {
      return 1 / scales[scaleIndex];
    }
  };

  return (
    <div className="lg:flex justify-center items-center max-lg:overflow-x-auto w-full">
      <table className="border-collapse border border-gray-400 min-w-[600px] sm:min-w-full">
        {/* the thead can be sticky */}
      <thead className="bg-primary top-0 z-10">
          <tr>
            <th className="border border-gray-400 px-4 py-2 text-secondary" rowSpan={2}>Kriteria</th>
            <th className="border border-gray-400 px-4 py-2 text-secondary" colSpan={scales.length}>Skala</th>
            <th className="border border-gray-400 px-4 py-2 text-secondary" rowSpan={2}>Kriteria</th>
          </tr>
          <tr>
            {scales.map((scale, index) => (
              <th key={index} className="border border-gray-400 px-4 py-2 text-secondary">{scale}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {criteria.map((criterion, rowIndex) => (
            <tr key={rowIndex}>
              <td className="border border-gray-400 px-4 py-2">{criterion.left}</td>
              {scales.map((_, scaleIndex) => (
                <td key={scaleIndex} className="border border-gray-400 px-4 py-2">
                  <input
                    type="radio"
                    name={`row-${rowIndex}`}
                    checked={selections[currentCheckpoint][rowIndex] === scaleIndex}
                    onChange={() => handleSelection(rowIndex, scaleIndex)}
                  />
                </td>
              ))}
              <td className="border border-gray-400 px-4 py-2">{criterion.right}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AHPTable;