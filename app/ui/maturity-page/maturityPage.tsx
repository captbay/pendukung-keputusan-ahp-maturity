"use client"
import MaturityRecapTable, { TableRowMaturity } from '@/app/components/maturity-recap-table/maturityRecapTable';
import MaturityTable from '@/app/components/maturity-table/maturityTable';
import NotFoundIcon from '@/app/icon/NotFoundIcon';
import { RecommendMaturity, getQuestionMaturity } from '@/lib/actions';
import { Button } from '@nextui-org/react';
import React, { useState } from 'react';
import { QuestionPerSection } from '@/lib/actions';

interface MaturityPageProps {
  session: any;
  questionMaturity: QuestionPerSection[];
  maturityResult: QuestionPerSection[];
}

const MaturityPage: React.FC<MaturityPageProps> = ({ session, questionMaturity, maturityResult }) => {
  const [startMaturityForm, setStartMaturityForm] = useState(false);
  console.log('maturityResult ---- ', maturityResult);

  function getFilteredRecommendations(maturityResult: QuestionPerSection[], userName: string) {
    return maturityResult.map(entry => {
      const validDetails = entry.detail.filter(detail => detail.recommend !== "Belum ada");
      console.log('validDetails ---- ', entry.title, validDetails);
  
      if (validDetails.length > 0) {
        const levels = validDetails.map(detail => detail.level).sort((a, b) => a - b);
        let highestConsecutiveLevel = 0;

        if (levels[0] == 1) {
          highestConsecutiveLevel = 1;
          for (let i = 1; i < levels.length; i++) {
            if (levels[i] == highestConsecutiveLevel + 1) {
              highestConsecutiveLevel = levels[i];
            } else {
              break;
            }
          }
        }
  
        const highestLevelDetail = validDetails.find(detail => detail.level === highestConsecutiveLevel);
        console.log('lalalal -- ', entry.title, highestConsecutiveLevel);
  
        return {
          kriteria: entry.title,
          [userName]: highestConsecutiveLevel.toString(),
          avg_result: highestConsecutiveLevel.toString(),
          recommendation: highestLevelDetail ? highestLevelDetail.recommend : "Belum ada"
        };
      }
  
      return {
        kriteria: entry.title,
        [userName]: "0",
        avg_result: "0",
        recommendation: "Belum ada"
      };
    });
  }  

  const filteredDataRecommendations = (maturityResult.length > 0 ? getFilteredRecommendations(maturityResult, session?.user.name) : null) as TableRowMaturity[];
  const userData = [
    {
      name: "Kriteria",
      email: "",
      jabatan: ""
    },
    {
      name: session?.user.name,
      email: session?.user.email,
      jabatan: session?.user.jabatan
    },
    {
      name: "Hasil Rata Rata",
      email: "",
      jabatan: ""
    },
    {
      name: "Hasil Rekomendasi",
      email: "",
      jabatan: ""
    }
  ]

  console.log('getFilteredRecommendations ---- ', filteredDataRecommendations);

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
                onClick={() => setStartMaturityForm(!startMaturityForm)}
                className="text-secondary w-24 text-center hover:bg-red-700 hover:text-white bg-primary"
                shadow-md
              >
                {startMaturityForm ? 'Close' : 'Start'}
              </Button>
            </div>

            <div className='flex flex-col w-full h-full justify-center items-center max-lg:p-8 mb-[40px]'>
              {maturityResult.length > 0 && !startMaturityForm ? (
                <MaturityRecapTable 
                  data={filteredDataRecommendations}
                  users={userData}
                  session={session}
                />
              ) : maturityResult.length == 0 && !startMaturityForm ? (
                <div className='flex justify-center items-center flex-col gap-4'>
                  <NotFoundIcon />
                <p className="text-center text-xl max-w-[500px] mt-[-30px]">No Maturity data found. Press START button above to fill the Maturity Measurement form.</p>
              </div>
              ) : (
                <div className='flex flex-col w-full h-full justify-center items-center'>
                  <MaturityTable 
                    maturityQuestion={questionMaturity}
                    session={session}
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