"use server";

import { valueFromAhp } from "./definitions";
import prisma from "./prisma";
import { Prisma } from "@prisma/client";

export async function applyFormulaAhp() {
  try {
    const data = await prisma.usersAhpForm.findMany({
      select: {
        value: true,
      },
    });

    if (data) {
      const formValue: valueFromAhp[] = JSON.parse(JSON.stringify(data.values));
      // const formValue: valueFromAhp[] = data.map((item) => item.value);
      console.log(formValue);

      const temp_section_one_1: Array<number> = [];
      const temp_section_one_2: Array<number> = [];
      const temp_section_one_3: Array<number> = [];
      const temp_section_one_4: Array<number> = [];
      const temp_section_one_5: Array<number> = [];
      const temp_section_one_6: Array<number> = [];

      const temp_section_two_1: Array<number> = [];
      const temp_section_two_2: Array<number> = [];
      const temp_section_two_3: Array<number> = [];
      const temp_section_two_4: Array<number> = [];
      const temp_section_two_5: Array<number> = [];
      const temp_section_two_6: Array<number> = [];
      const temp_section_two_7: Array<number> = [];
      const temp_section_two_8: Array<number> = [];
      const temp_section_two_9: Array<number> = [];
      const temp_section_two_10: Array<number> = [];
      const temp_section_two_11: Array<number> = [];
      const temp_section_two_12: Array<number> = [];
      const temp_section_two_13: Array<number> = [];
      const temp_section_two_14: Array<number> = [];
      const temp_section_two_15: Array<number> = [];
      const temp_section_two_16: Array<number> = [];
      const temp_section_two_17: Array<number> = [];
      const temp_section_two_18: Array<number> = [];
      const temp_section_two_19: Array<number> = [];
      const temp_section_two_20: Array<number> = [];
      const temp_section_two_21: Array<number> = [];

      const temp_section_three_1: Array<number> = [];
      const temp_section_three_2: Array<number> = [];
      const temp_section_three_3: Array<number> = [];
      const temp_section_three_4: Array<number> = [];
      const temp_section_three_5: Array<number> = [];
      const temp_section_three_6: Array<number> = [];
      const temp_section_three_7: Array<number> = [];
      const temp_section_three_8: Array<number> = [];
      const temp_section_three_9: Array<number> = [];
      const temp_section_three_10: Array<number> = [];
      const temp_section_three_11: Array<number> = [];
      const temp_section_three_12: Array<number> = [];
      const temp_section_three_13: Array<number> = [];
      const temp_section_three_14: Array<number> = [];
      const temp_section_three_15: Array<number> = [];
      const temp_section_three_16: Array<number> = [];
      const temp_section_three_17: Array<number> = [];
      const temp_section_three_18: Array<number> = [];
      const temp_section_three_19: Array<number> = [];
      const temp_section_three_20: Array<number> = [];
      const temp_section_three_21: Array<number> = [];

      const temp_section_four_1: Array<number> = [];
      const temp_section_four_2: Array<number> = [];
      const temp_section_four_3: Array<number> = [];
      const temp_section_four_4: Array<number> = [];
      const temp_section_four_5: Array<number> = [];
      const temp_section_four_6: Array<number> = [];
      const temp_section_four_7: Array<number> = [];
      const temp_section_four_8: Array<number> = [];
      const temp_section_four_9: Array<number> = [];
      const temp_section_four_10: Array<number> = [];
      const temp_section_four_11: Array<number> = [];
      const temp_section_four_12: Array<number> = [];
      const temp_section_four_13: Array<number> = [];
      const temp_section_four_14: Array<number> = [];
      const temp_section_four_15: Array<number> = [];
      const temp_section_four_16: Array<number> = [];
      const temp_section_four_17: Array<number> = [];
      const temp_section_four_18: Array<number> = [];
      const temp_section_four_19: Array<number> = [];
      const temp_section_four_20: Array<number> = [];
      const temp_section_four_21: Array<number> = [];

      const temp_section_five_1: Array<number> = [];
      const temp_section_five_2: Array<number> = [];
      const temp_section_five_3: Array<number> = [];
      const temp_section_five_4: Array<number> = [];
      const temp_section_five_5: Array<number> = [];
      const temp_section_five_6: Array<number> = [];
      const temp_section_five_7: Array<number> = [];
      const temp_section_five_8: Array<number> = [];
      const temp_section_five_9: Array<number> = [];
      const temp_section_five_10: Array<number> = [];
      const temp_section_five_11: Array<number> = [];
      const temp_section_five_12: Array<number> = [];
      const temp_section_five_13: Array<number> = [];
      const temp_section_five_14: Array<number> = [];
      const temp_section_five_15: Array<number> = [];
      const temp_section_five_16: Array<number> = [];
      const temp_section_five_17: Array<number> = [];
      const temp_section_five_18: Array<number> = [];
      const temp_section_five_19: Array<number> = [];
      const temp_section_five_20: Array<number> = [];
      const temp_section_five_21: Array<number> = [];

      const section_one_bobot: Array<number> = [];
      const section_two_bobot: Array<number> = [];
      const section_three_bobot: Array<number> = [];
      const section_four_bobot: Array<number> = [];
      const section_five_bobot: Array<number> = [];

      formValue.forEach((value) => {
        temp_section_one_1.push(value.section_one[0]);
        temp_section_one_2.push(value.section_one[1]);
        temp_section_one_3.push(value.section_one[2]);
        temp_section_one_4.push(value.section_one[3]);
        temp_section_one_5.push(value.section_one[4]);
        temp_section_one_6.push(value.section_one[5]);

        temp_section_two_1.push(value.section_two[0]);
        temp_section_two_2.push(value.section_two[1]);
        temp_section_two_3.push(value.section_two[2]);
        temp_section_two_4.push(value.section_two[3]);
        temp_section_two_5.push(value.section_two[4]);
        temp_section_two_6.push(value.section_two[5]);
        temp_section_two_7.push(value.section_two[6]);
        temp_section_two_8.push(value.section_two[7]);
        temp_section_two_9.push(value.section_two[8]);
        temp_section_two_10.push(value.section_two[9]);
        temp_section_two_11.push(value.section_two[10]);
        temp_section_two_12.push(value.section_two[11]);
        temp_section_two_13.push(value.section_two[12]);
        temp_section_two_14.push(value.section_two[13]);
        temp_section_two_15.push(value.section_two[14]);
        temp_section_two_16.push(value.section_two[15]);
        temp_section_two_17.push(value.section_two[16]);
        temp_section_two_18.push(value.section_two[17]);
        temp_section_two_19.push(value.section_two[18]);
        temp_section_two_20.push(value.section_two[19]);
        temp_section_two_21.push(value.section_two[20]);

        temp_section_three_1.push(value.section_three[0]);
        temp_section_three_2.push(value.section_three[1]);
        temp_section_three_3.push(value.section_three[2]);
        temp_section_three_4.push(value.section_three[3]);
        temp_section_three_5.push(value.section_three[4]);
        temp_section_three_6.push(value.section_three[5]);
        temp_section_three_7.push(value.section_three[6]);
        temp_section_three_8.push(value.section_three[7]);
        temp_section_three_9.push(value.section_three[8]);
        temp_section_three_10.push(value.section_three[9]);
        temp_section_three_11.push(value.section_three[10]);
        temp_section_three_12.push(value.section_three[11]);
        temp_section_three_13.push(value.section_three[12]);
        temp_section_three_14.push(value.section_three[13]);
        temp_section_three_15.push(value.section_three[14]);
        temp_section_three_16.push(value.section_three[15]);
        temp_section_three_17.push(value.section_three[16]);
        temp_section_three_18.push(value.section_three[17]);
        temp_section_three_19.push(value.section_three[18]);
        temp_section_three_20.push(value.section_three[19]);
        temp_section_three_21.push(value.section_three[20]);

        temp_section_four_1.push(value.section_four[0]);
        temp_section_four_2.push(value.section_four[1]);
        temp_section_four_3.push(value.section_four[2]);
        temp_section_four_4.push(value.section_four[3]);
        temp_section_four_5.push(value.section_four[4]);
        temp_section_four_6.push(value.section_four[5]);
        temp_section_four_7.push(value.section_four[6]);
        temp_section_four_8.push(value.section_four[7]);
        temp_section_four_9.push(value.section_four[8]);
        temp_section_four_10.push(value.section_four[9]);
        temp_section_four_11.push(value.section_four[10]);
        temp_section_four_12.push(value.section_four[11]);
        temp_section_four_13.push(value.section_four[12]);
        temp_section_four_14.push(value.section_four[13]);
        temp_section_four_15.push(value.section_four[14]);
        temp_section_four_16.push(value.section_four[15]);
        temp_section_four_17.push(value.section_four[16]);
        temp_section_four_18.push(value.section_four[17]);
        temp_section_four_19.push(value.section_four[18]);
        temp_section_four_20.push(value.section_four[19]);
        temp_section_four_21.push(value.section_four[20]);

        temp_section_five_1.push(value.section_five[0]);
        temp_section_five_2.push(value.section_five[1]);
        temp_section_five_3.push(value.section_five[2]);
        temp_section_five_4.push(value.section_five[3]);
        temp_section_five_5.push(value.section_five[4]);
        temp_section_five_6.push(value.section_five[5]);
        temp_section_five_7.push(value.section_five[6]);
        temp_section_five_8.push(value.section_five[7]);
        temp_section_five_9.push(value.section_five[8]);
        temp_section_five_10.push(value.section_five[9]);
        temp_section_five_11.push(value.section_five[10]);
        temp_section_five_12.push(value.section_five[11]);
        temp_section_five_13.push(value.section_five[12]);
        temp_section_five_14.push(value.section_five[13]);
        temp_section_five_15.push(value.section_five[14]);
        temp_section_five_16.push(value.section_five[15]);
        temp_section_five_17.push(value.section_five[16]);
        temp_section_five_18.push(value.section_five[17]);
        temp_section_five_19.push(value.section_five[18]);
        temp_section_five_20.push(value.section_five[19]);
        temp_section_five_21.push(value.section_five[20]);
      });

      section_one_bobot.push(geometricMean(temp_section_one_1));
      section_one_bobot.push(geometricMean(temp_section_one_2));
      section_one_bobot.push(geometricMean(temp_section_one_3));
      section_one_bobot.push(geometricMean(temp_section_one_4));
      section_one_bobot.push(geometricMean(temp_section_one_5));
      section_one_bobot.push(geometricMean(temp_section_one_6));

      section_two_bobot.push(geometricMean(temp_section_two_1));
      section_two_bobot.push(geometricMean(temp_section_two_2));
      section_two_bobot.push(geometricMean(temp_section_two_3));
      section_two_bobot.push(geometricMean(temp_section_two_4));
      section_two_bobot.push(geometricMean(temp_section_two_5));
      section_two_bobot.push(geometricMean(temp_section_two_6));
      section_two_bobot.push(geometricMean(temp_section_two_7));
      section_two_bobot.push(geometricMean(temp_section_two_8));
      section_two_bobot.push(geometricMean(temp_section_two_9));
      section_two_bobot.push(geometricMean(temp_section_two_10));
      section_two_bobot.push(geometricMean(temp_section_two_11));
      section_two_bobot.push(geometricMean(temp_section_two_12));
      section_two_bobot.push(geometricMean(temp_section_two_13));
      section_two_bobot.push(geometricMean(temp_section_two_14));
      section_two_bobot.push(geometricMean(temp_section_two_15));
      section_two_bobot.push(geometricMean(temp_section_two_16));
      section_two_bobot.push(geometricMean(temp_section_two_17));
      section_two_bobot.push(geometricMean(temp_section_two_18));
      section_two_bobot.push(geometricMean(temp_section_two_19));
      section_two_bobot.push(geometricMean(temp_section_two_20));
      section_two_bobot.push(geometricMean(temp_section_two_21));

      section_three_bobot.push(geometricMean(temp_section_three_1));
      section_three_bobot.push(geometricMean(temp_section_three_2));
      section_three_bobot.push(geometricMean(temp_section_three_3));
      section_three_bobot.push(geometricMean(temp_section_three_4));
      section_three_bobot.push(geometricMean(temp_section_three_5));
      section_three_bobot.push(geometricMean(temp_section_three_6));
      section_three_bobot.push(geometricMean(temp_section_three_7));
      section_three_bobot.push(geometricMean(temp_section_three_8));
      section_three_bobot.push(geometricMean(temp_section_three_9));
      section_three_bobot.push(geometricMean(temp_section_three_10));
      section_three_bobot.push(geometricMean(temp_section_three_11));
      section_three_bobot.push(geometricMean(temp_section_three_12));
      section_three_bobot.push(geometricMean(temp_section_three_13));
      section_three_bobot.push(geometricMean(temp_section_three_14));
      section_three_bobot.push(geometricMean(temp_section_three_15));
      section_three_bobot.push(geometricMean(temp_section_three_16));
      section_three_bobot.push(geometricMean(temp_section_three_17));
      section_three_bobot.push(geometricMean(temp_section_three_18));
      section_three_bobot.push(geometricMean(temp_section_three_19));
      section_three_bobot.push(geometricMean(temp_section_three_20));
      section_three_bobot.push(geometricMean(temp_section_three_21));

      section_four_bobot.push(geometricMean(temp_section_four_1));
      section_four_bobot.push(geometricMean(temp_section_four_2));
      section_four_bobot.push(geometricMean(temp_section_four_3));
      section_four_bobot.push(geometricMean(temp_section_four_4));
      section_four_bobot.push(geometricMean(temp_section_four_5));
      section_four_bobot.push(geometricMean(temp_section_four_6));
      section_four_bobot.push(geometricMean(temp_section_four_7));
      section_four_bobot.push(geometricMean(temp_section_four_8));
      section_four_bobot.push(geometricMean(temp_section_four_9));
      section_four_bobot.push(geometricMean(temp_section_four_10));
      section_four_bobot.push(geometricMean(temp_section_four_11));
      section_four_bobot.push(geometricMean(temp_section_four_12));
      section_four_bobot.push(geometricMean(temp_section_four_13));
      section_four_bobot.push(geometricMean(temp_section_four_14));
      section_four_bobot.push(geometricMean(temp_section_four_15));
      section_four_bobot.push(geometricMean(temp_section_four_16));
      section_four_bobot.push(geometricMean(temp_section_four_17));
      section_four_bobot.push(geometricMean(temp_section_four_18));
      section_four_bobot.push(geometricMean(temp_section_four_19));
      section_four_bobot.push(geometricMean(temp_section_four_20));
      section_four_bobot.push(geometricMean(temp_section_four_21));

      section_five_bobot.push(geometricMean(temp_section_five_1));
      section_five_bobot.push(geometricMean(temp_section_five_2));
      section_five_bobot.push(geometricMean(temp_section_five_3));
      section_five_bobot.push(geometricMean(temp_section_five_4));
      section_five_bobot.push(geometricMean(temp_section_five_5));
      section_five_bobot.push(geometricMean(temp_section_five_6));
      section_five_bobot.push(geometricMean(temp_section_five_7));
      section_five_bobot.push(geometricMean(temp_section_five_8));
      section_five_bobot.push(geometricMean(temp_section_five_9));
      section_five_bobot.push(geometricMean(temp_section_five_10));
      section_five_bobot.push(geometricMean(temp_section_five_11));
      section_five_bobot.push(geometricMean(temp_section_five_12));
      section_five_bobot.push(geometricMean(temp_section_five_13));
      section_five_bobot.push(geometricMean(temp_section_five_14));
      section_five_bobot.push(geometricMean(temp_section_five_15));
      section_five_bobot.push(geometricMean(temp_section_five_16));
      section_five_bobot.push(geometricMean(temp_section_five_17));
      section_five_bobot.push(geometricMean(temp_section_five_18));
      section_five_bobot.push(geometricMean(temp_section_five_19));
      section_five_bobot.push(geometricMean(temp_section_five_20));
      section_five_bobot.push(geometricMean(temp_section_five_21));

      const matrix_one = createPairwiseComparisonMatrixSectionOne(
        section_one_bobot,
        4
      );
      const matrix_two = createPairwiseComparisonMatrix(section_two_bobot, 7);
      const matrix_three = createPairwiseComparisonMatrix(
        section_three_bobot,
        7
      );
      const matrix_four = createPairwiseComparisonMatrix(section_four_bobot, 7);
      const matrix_five = createPairwiseComparisonMatrix(section_five_bobot, 7);

      // print all section bobot
      console.log("section_one_bobot", section_one_bobot);
      printMatrix(matrix_one, "section_one_bobot");
      console.log("section_two_bobot", section_two_bobot);
      printMatrix(matrix_two, "section_two_bobot");
      console.log("section_three_bobot", section_three_bobot);
      printMatrix(matrix_three, "section_three_bobot");
      console.log("section_four_bobot", section_four_bobot);
      printMatrix(matrix_four, "section_four_bobot");
      console.log("section_five_bobot", section_five_bobot);
      printMatrix(matrix_five, "section_five_bobot");

      console.log(matrix_one);
      console.log(matrix_two);
      console.log(matrix_three);
      console.log(matrix_four);
      console.log(matrix_five);

      const sumMatrixOne = sumPerColumn(matrix_one);
      const sumMatrixTwo = sumPerColumn(matrix_two);
      const sumMatrixThree = sumPerColumn(matrix_three);
      const sumMatrixFour = sumPerColumn(matrix_four);
      const sumMatrixFive = sumPerColumn(matrix_five);

      console.log(sumMatrixOne);
      console.log(sumMatrixTwo);
      console.log(sumMatrixThree);
      console.log(sumMatrixFour);
      console.log(sumMatrixFive);

      const normalizeMatrixOne = normalizeMatrix(matrix_one, sumMatrixOne);
      const normalizeMatrixTwo = normalizeMatrix(matrix_two, sumMatrixTwo);
      const normalizeMatrixThree = normalizeMatrix(
        matrix_three,
        sumMatrixThree
      );
      const normalizeMatrixFour = normalizeMatrix(matrix_four, sumMatrixFour);
      const normalizeMatrixFive = normalizeMatrix(matrix_five, sumMatrixFive);

      console.log(normalizeMatrixOne);
      printMatrix(normalizeMatrixOne, "normalisasi one");
      console.log(normalizeMatrixTwo);
      printMatrix(normalizeMatrixTwo, "normalisasi two");
      console.log(normalizeMatrixThree);
      printMatrix(normalizeMatrixThree, "normalisasi three");
      console.log(normalizeMatrixFour);
      printMatrix(normalizeMatrixFour, "normalisasi four");
      console.log(normalizeMatrixFive);
      printMatrix(normalizeMatrixFive, "normalisasi five");

      const priorityVectorOne = calculateRowAverages(normalizeMatrixOne);
      console.log(priorityVectorOne);

      const priorityVectorTwo = calculateRowAverages(normalizeMatrixTwo);
      console.log(priorityVectorTwo);
      const priorityVectorThree = calculateRowAverages(normalizeMatrixThree);
      console.log(priorityVectorThree);
      const priorityVectorFour = calculateRowAverages(normalizeMatrixFour);
      console.log(priorityVectorFour);
      const priorityVectorFive = calculateRowAverages(normalizeMatrixFive);
      console.log(priorityVectorFive);

      const matrixKriteria = priorityVectorOne;
      const matrixAlternatifKriteria = mergeArraysIntoMatrix([
        priorityVectorTwo,
        priorityVectorThree,
        priorityVectorFour,
        priorityVectorFive,
      ]);

      console.log(matrixKriteria);
      console.log(matrixAlternatifKriteria);

      const result = mmult(matrixAlternatifKriteria, matrixKriteria);
      console.log(result);

      const plan_risk_management = result[0];
      const identify_risks = result[1];
      const perform_qualitative_risk_analysis = result[2];
      const perform_quantitative_qisk_analysis = result[3];
      const plan_risk_responses = result[4];
      const implement_risk_responses = result[5];
      const monitor_risks = result[6];

      console.log(plan_risk_management);
      console.log(identify_risks);
      console.log(perform_qualitative_risk_analysis);
      console.log(perform_quantitative_qisk_analysis);
      console.log(plan_risk_responses);
      console.log(implement_risk_responses);
      console.log(monitor_risks);

      try {
        const category = await prisma.category.findMany({});

        if (!category) {
          console.log("No data found for user.");
          throw new Error("No data found for user.");
        }

        await prisma.ahpResult.deleteMany({});

        await prisma.ahpResult.createMany({
          data: [
            {
              category_id: category[0].id,
              value: plan_risk_management,
            },
            {
              category_id: category[1].id,
              value: identify_risks,
            },
            {
              category_id: category[2].id,
              value: perform_qualitative_risk_analysis,
            },
            {
              category_id: category[3].id,
              value: perform_quantitative_qisk_analysis,
            },
            {
              category_id: category[4].id,
              value: plan_risk_responses,
            },
            {
              category_id: category[5].id,
              value: implement_risk_responses,
            },
            {
              category_id: category[6].id,
              value: monitor_risks,
            },
          ],
        });
      } catch (error) {
        console.log(error);
      }

      return result;
    } else {
      console.log("No data found for user.");
      throw new Error("No data found for user.");
    }
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        throw new Error(e.message);
      }
      throw new Error(e.message);
    }
  }
}

/**
 * Function to calculate the geometric mean of an array of numbers.
 * @param numbers - Array of numbers.
 * @returns Geometric mean of the numbers, rounded to two decimal places.
 */
function geometricMean(numbers: number[]): number {
  if (numbers.length === 0) {
    console.log("error");
  }

  // Ensure all numbers are non-negative
  for (const number of numbers) {
    if (number < 0) {
      console.log("error");
    }
  }

  // Calculate the product of all numbers
  const product = numbers.reduce((acc, num) => acc * num, 1);

  // Calculate the n-th root of the product
  const n = numbers.length;
  const geomean = Math.pow(product, 1 / n);

  // Round to two decimal places
  const roundedGeomean = Math.round(geomean * 100) / 100;

  return roundedGeomean;
}

function createPairwiseComparisonMatrixSectionOne(
  section: number[],
  length: number
): number[][] {
  const matrix: number[][] = [];
  for (let i = 0; i < length; i++) {
    const row: number[] = [];
    for (let j = 0; j < length; j++) {
      if (i == j) {
        row.push(1);
      } else if (i - j > 0) {
        if (j == 0) {
          row.push(Math.round((1 / section[i - 1]) * 100) / 100);
        } else if (j == 1 || j == 2) {
          row.push(Math.round((1 / section[i + j]) * 100) / 100);
        } else {
          row.push(Math.round((1 / section[i]) * 100) / 100);
        }
      } else {
        if (i == 0) {
          row.push(Math.round(section[j - 1] * 100) / 100);
        } else if (i == 1 || i == 2) {
          row.push(Math.round(section[i + j] * 100) / 100);
        } else {
          row.push(Math.round(section[j] * 100) / 100);
        }
      }
    }
    matrix.push(row);
  }
  return matrix;
}

function createPairwiseComparisonMatrix(
  section: number[],
  length: number
): number[][] {
  const matrix: number[][] = [];
  for (let i = 0; i < length; i++) {
    const row: number[] = [];
    for (let j = 0; j < length; j++) {
      if (i == j) {
        row.push(1);
      } else if (i - j > 0) {
        if (j == 0) {
          row.push(Math.round((1 / section[i - 1]) * 100) / 100);
        } else if (j == 1) {
          row.push(Math.round((1 / section[i + j + 3]) * 100) / 100);
        } else if (j == 2) {
          row.push(Math.round((1 / section[i + j + 6]) * 100) / 100);
        } else if (j == 3) {
          row.push(Math.round((1 / section[i + j + 8]) * 100) / 100);
        } else if (j == 4) {
          row.push(Math.round((1 / section[i + j + 9]) * 100) / 100);
        } else if (j == 5) {
          row.push(Math.round((1 / section[i + j + 9]) * 100) / 100);
        } else {
          row.push(Math.round(section[i] * 100) / 100);
        }
      } else {
        if (i == 0) {
          row.push(Math.round(section[j - 1] * 100) / 100);
        } else if (i == 1) {
          row.push(Math.round(section[i + j + 3] * 100) / 100);
        } else if (i == 2) {
          row.push(Math.round(section[i + j + 6] * 100) / 100);
        } else if (i == 3) {
          row.push(Math.round(section[i + j + 8] * 100) / 100);
        } else if (i == 4) {
          row.push(Math.round(section[i + j + 9] * 100) / 100);
        } else if (i == 5) {
          row.push(Math.round(section[i + j + 9] * 100) / 100);
        } else {
          row.push(Math.round(section[j] * 100) / 100);
        }
      }
    }
    matrix.push(row);
  }
  return matrix;
}

function printMatrix(matrix: number[][], sectionName: string) {
  console.log(`Pairwise comparison matrix for ${sectionName}:`);
  matrix.forEach((row) => {
    console.log(row.map((value) => Math.round(value * 100) / 100).join("\t"));
  });
  console.log("\n");
}

function sumPerColumn(matrix: number[][]): number[] {
  if (matrix.length === 0) return [];

  const numColumns = matrix[0].length;
  const columnSums = new Array(numColumns).fill(0);

  for (let row of matrix) {
    for (let col = 0; col < numColumns; col++) {
      columnSums[col] += row[col];
    }
  }

  // Round the column sums to two decimal places
  for (let i = 0; i < columnSums.length; i++) {
    columnSums[i] = Math.round(columnSums[i] * 100) / 100;
  }

  return columnSums;
}

function normalizeMatrix(matrix: number[][], columnSums: number[]): number[][] {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  const normalizedMatrix: number[][] = [];

  for (let row = 0; row < numRows; row++) {
    const normalizedRow: number[] = [];
    for (let col = 0; col < numCols; col++) {
      const normalizedValue = matrix[row][col] / columnSums[col];
      normalizedRow.push(Math.round(normalizedValue * 100) / 100);
    }
    normalizedMatrix.push(normalizedRow);
  }

  return normalizedMatrix;
}

function calculateRowAverages(matrix: number[][]): number[] {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  const rowAverages: number[] = [];

  for (let row = 0; row < numRows; row++) {
    const sum = matrix[row].reduce((acc, val) => acc + val, 0);
    const average = sum / numCols;
    rowAverages.push(Math.round(average * 100) / 100);
  }

  return rowAverages;
}

function mergeArraysIntoMatrix(arrays: number[][]): number[][] {
  const numRows = arrays[0].length;
  const numCols = arrays.length;
  const matrix: number[][] = [];

  for (let row = 0; row < numRows; row++) {
    const newRow: number[] = [];
    for (let col = 0; col < numCols; col++) {
      newRow.push(arrays[col][row]);
    }
    matrix.push(newRow);
  }

  return matrix;
}

function mmult(array2: number[][], array1: number[]): number[] {
  const numRows2 = array2.length;
  const numCols2 = array2[0].length;
  const numRows1 = array1.length;

  if (numCols2 !== numRows1) {
    throw new Error(
      "Number of columns in the first array must match the number of rows in the second array."
    );
  }

  const result: number[] = new Array(numRows2).fill(0);

  for (let i = 0; i < numRows2; i++) {
    for (let j = 0; j < numCols2; j++) {
      result[i] += array2[i][j] * array1[j];
    }
  }

  for (let i = 0; i < result.length; i++) {
    result[i] = Math.round(result[i] * 1000) / 1000;
  }

  return result;
}
