"use client"
import React, { useState } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button } from "@nextui-org/react";
import { Toaster, toast } from 'sonner';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { app } from '@/firebase';

interface MaturityTableProps {}

const MaturityTable: React.FC<MaturityTableProps> = () => {
  const storage = getStorage(app)
  const [dataTemp, setDataTemp] = useState([
    {
      kode: "B01",
      pertanyaan: "Apakah risiko teridentifikasi secara rutin?",
      ya: false,
      tidak: false,
      evidence: "",
    },
    {
      kode: "B02",
      pertanyaan: "Apakah identifikasi risiko dilakukan dengan menggunakan WBS dan scope statement secara rinci?",
      ya: false,
      tidak: false,
      evidence: "",
    },
    {
      kode: "B03",
      pertanyaan: "Apakah risiko yang didapat dari project scope dan informasi milestone hanya dibahas secara ad hoc?",
      ya: false,
      tidak: false,
      evidence: "",
    },
  ]);

  const handleSelection = (index: number, type: 'ya' | 'tidak') => {
    const newData = [...dataTemp];
    newData[index][type] = !newData[index][type]; // Toggle the selected state
    if (type === 'ya' && newData[index][type]) {
      newData[index].tidak = false; // Ensure only one can be selected
    } else if (type === 'tidak' && newData[index][type]) {
      newData[index].ya = false; // Ensure only one can be selected
    }
    setDataTemp(newData);
  };

  const handleFileButtonClick = (index: number) => {
    const fileInput = document.getElementById(`evidence-${index}`) as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleFileChange = async(e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0];
    if (file) {
      const storageRef = ref(storage, `evidences/${file.name}`);
      const allowedExtensions = ['pdf'];
      const fileExtension = file.name.split('.').pop()?.toLowerCase();

      if (fileExtension && allowedExtensions.includes(fileExtension)) {
        try {
          const snapshot = await uploadBytes(storageRef, file)
          const tempUrl = await getDownloadURL(snapshot.ref)
          console.log('File uploaded successfully: ', tempUrl)
          
          const newData = [...dataTemp];
          newData[index].evidence = file.name;
          setDataTemp(newData);
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      } else {
        toast.error('Only PDF file are allowed!');
        e.target.value = '';
      }
    }
  };

  return (
    <div className="lg:flex justify-center items-center max-lg:overflow-x-auto w-[70%]">
      <table className="border-collapse border border-gray-400 min-w-[600px] sm:min-w-full">
        <thead className="bg-primary top-0 z-10">
          <tr>
            <th className="border border-amber-700 px-4 py-2 text-secondary">Kode</th>
            <th className="border border-amber-700 px-4 py-2 text-secondary">Pertanyaan</th>
            <th className="border border-amber-700 px-4 py-2 text-secondary">Ya</th>
            <th className="border border-amber-700 px-4 py-2 text-secondary">Tidak</th>
            <th className="border border-amber-700 px-4 py-2 text-secondary">Evidence</th>
          </tr>
        </thead>
        <tbody>
          {dataTemp.map((data, index) => (
            <tr key={index}>
              <td className="border border-gray-400 px-4 py-2">{data.kode}</td>
              <td className="border border-gray-400 px-4 py-2">{data.pertanyaan}</td>
              <td className="border border-gray-400 px-4 py-2 text-center">
                <input
                  type="radio"
                  name={`row-${index}-ya`}
                  checked={data.ya}
                  onChange={() => handleSelection(index, 'ya')}
                />
              </td>
              <td className="border border-gray-400 px-4 py-2 text-center">
                <input
                  type="radio"
                  name={`row-${index}-tidak`}
                  checked={data.tidak}
                  onChange={() => handleSelection(index, 'tidak')}
                />
              </td>
              <td className="border border-gray-400 px-4 py-2 text-center">
                <Button
                  className='bg-secondary text-primary border-primary border-2'
                  onClick={() => handleFileButtonClick(index)}
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
                  onChange={(e) => handleFileChange(e, index)}
                  style={{ display: "none" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Toaster 
        expand={true} 
        richColors 
        position="top-center"
      />
    </div>
  );
};

export default MaturityTable;