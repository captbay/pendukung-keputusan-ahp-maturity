"use client"
import MaturityRecapTable from '@/app/components/maturity-recap-table/maturityRecapTable';
import MaturityTable from '@/app/components/maturity-table/maturityTable';
import NotFoundIcon from '@/app/icon/NotFoundIcon';
import { Button } from '@nextui-org/react';
import React, { useState } from 'react';

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
interface MaturityPageProps {
  session: any;
}

const MaturityPage: React.FC<MaturityPageProps> = () => {
  const [startAhpForm, setStartAhpForm] = useState(false);
  const [isData, setIsData] = useState(false);

  const tempQuestion: QuestionSet[] = 
  [
    {
      title: "Plan Risk Management",
      detail: [
        {
          level: 1,
          rekomendasi: "Belum ada",
          questions: [
            {
              id: 1,
              kode: "A01",
              question: 'Apakah perusahaan sudah efisien?',
              ya: false,
              tidak: false,
              evidence: null
            },
            {
              id: 2,
              kode: "A02",
              question: 'Apakah perusahaan beroperasi dengan baik?',
              ya: false,
              tidak: false,
              evidence: null
            },
            {
              id: 3,
              kode: "A03",
              question: 'Apakah kinerja karyawan telah optimal sesuai dengan standar kinerja karyawan?',
              ya: false,
              tidak: false,
              evidence: null
            },
            {
              id: 1,
              kode: "A01",
              question: 'Apakah perusahaan sudah efisien?',
              ya: false,
              tidak: false,
              evidence: null
            },
            {
              id: 2,
              kode: "A02",
              question: 'Apakah perusahaan beroperasi dengan baik?',
              ya: false,
              tidak: false,
              evidence: null
            },
            {
              id: 3,
              kode: "A03",
              question: 'Apakah kinerja karyawan telah optimal sesuai dengan standar kinerja karyawan?',
              ya: false,
              tidak: false,
              evidence: null
            },
          ]
        },
        {
          level: 2,
          rekomendasi: "Tingkatkan lagi",
          questions: [
            {
              id: 1,
              kode: "B01",
              question: 'Level 2-1?',
              ya: false,
              tidak: false,
              evidence: null
            },
            {
              id: 2,
              kode: "B02",
              question: 'Level 2-2',
              ya: false,
              tidak: false,
              evidence: null
            },
            {
              id: 3,
              kode: "B03",
              question: 'Level 2-3',
              ya: false,
              tidak: false,
              evidence: null
            },
            {
              id: 1,
              kode: "B01",
              question: 'Level 2-1?',
              ya: false,
              tidak: false,
              evidence: null
            },
            {
              id: 2,
              kode: "B02",
              question: 'Level 2-2',
              ya: false,
              tidak: false,
              evidence: null
            },
            {
              id: 3,
              kode: "B03",
              question: 'Level 2-3',
              ya: false,
              tidak: false,
              evidence: null
            },
          ]
        }
      ],
    },
    {
      title: "Monitor Risks",
      detail: [
        {
          level: 1,
          rekomendasi: "Monitor risk rekomendasi",
          questions: [
            {
              id: 1,
              kode: "A01",
              question: 'Apakah monitor risk sudah efisien?',
              ya: false,
              tidak: false,
              evidence: null
            },
            {
              id: 2,
              kode: "A02",
              question: 'Apakah perusahaan beroperasi dengan baik sesuai monitor risks?',
              ya: false,
              tidak: false,
              evidence: null
            },
            {
              id: 3,
              kode: "A03",
              question: 'Apakah kinerja karyawan telah optimal sesuai dengan standar kinerja karyawan?',
              ya: false,
              tidak: false,
              evidence: null
            },
            {
              id: 1,
              kode: "A01",
              question: 'Apakah monitor risk sudah efisien?',
              ya: false,
              tidak: false,
              evidence: null
            },
            {
              id: 2,
              kode: "A02",
              question: 'Apakah perusahaan beroperasi dengan baik sesuai monitor risks?',
              ya: false,
              tidak: false,
              evidence: null
            },
            {
              id: 3,
              kode: "A03",
              question: 'Apakah kinerja karyawan telah optimal sesuai dengan standar kinerja karyawan?',
              ya: false,
              tidak: false,
              evidence: null
            },
          ]
        },
        {
          level: 2,
          rekomendasi: "Monitor risk level 2 rekomendasi",
          questions: [
            {
              id: 1,
              kode: "B01",
              question: 'Level 2-1 monitor risks?',
              ya: false,
              tidak: false,
              evidence: null
            },
            {
              id: 2,
              kode: "B02",
              question: 'Level 2-2 monitor risks',
              ya: false,
              tidak: false,
              evidence: null
            },
            {
              id: 3,
              kode: "B03",
              question: 'Level 2-3 monitor risks',
              ya: false,
              tidak: false,
              evidence: null
            },
            {
              id: 1,
              kode: "B01",
              question: 'Level 2-1 monitor risks?',
              ya: false,
              tidak: false,
              evidence: null
            },
            {
              id: 2,
              kode: "B02",
              question: 'Level 2-2 monitor risks',
              ya: false,
              tidak: false,
              evidence: null
            },
            {
              id: 3,
              kode: "B03",
              question: 'Level 2-3 monitor risks',
              ya: false,
              tidak: false,
              evidence: null
            },
          ]
        }
      ],
    }
  ];

  return (
    <main className="flex w-full min-h-screen bg-secondary z-0 justify-center">
      <div className="flex flex-col lg:flex-row bg-secondary rounded-lg w-full lg:w-[80%]">
        <div className="flex flex-col w-full h-full items-center">
          
          <div className='flex flex-col w-full h-full items-center mt-10 max-lg:mt-20'>
            <div className='rounded-2xl flex'>
              <h1 className="text-2xl lg:text-3xl font-bold text-center text-tertiary p-4">Maturity Measurement</h1>
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

            <div className='flex flex-col w-full h-full justify-center items-center max-lg:p-8 mb-[40px]'>
              {isData && !startAhpForm ? (
                <MaturityRecapTable />
              ) : !isData && !startAhpForm ? (
                <div className='flex justify-center items-center flex-col gap-4'>
                  <NotFoundIcon />
                <p className="text-center text-xl max-w-[500px]">No Maturity data found. Press START button above to fill the Maturity Measurement form.</p>
              </div>
              ) : (
                <div className='flex flex-col w-full h-full justify-center items-center'>
                  <MaturityTable 
                    maturityQuestion={tempQuestion}
                  />
                </div>
              
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MaturityPage