import prisma from "../lib/prisma";
import bcrypt from "bcrypt";

async function main() {
  // Create Users
  const users = await prisma.user.createMany({
    data: [
      {
        email: "admin@mail.com",
        password: await bcrypt.hash("password", 10),
        name: "Admin",
        jabatan: "Admin",
      },
      {
        email: "user@mail.com",
        password: await bcrypt.hash("password", 10),
        name: "User One",
      },
    ],
  });

  // Create Categories
  const category = await prisma.category.createMany({
    data: [
      {
        key: "plan_risk_management",
        value: "Plan Risk Management",
      },
      {
        key: "identify-risks",
        value: "Identify Risks",
      },
      {
        key: "perform_qualitative_risk_analysis",
        value: "Perform Qualitative Risk Analysis",
      },
      {
        key: "perform_quantitative_risk_analysis",
        value: "Perform Quantitative Risk Analysis",
      },
      {
        key: "plan_risk_responses",
        value: "Plan Risk Responses",
      },
      {
        key: "implement_risk_responses",
        value: "Implement Risk Responses",
      },
      {
        key: "monitor_risks",
        value: "Monitor Risks",
      },
    ],
  });

  //   get the ID
  const [user1, user2] = await prisma.user.findMany();
  const [
    category1,
    category2,
    category3,
    category4,
    category5,
    category6,
    category7,
  ] = await prisma.category.findMany();

  //   Create users-ahp-result
  const usersAhpResult = await prisma.usersAhpResult.createMany({
    data: [
      {
        user_id: user2.id,
        category_id: category1.id,
        value: 0.2056,
      },
      {
        user_id: user2.id,
        category_id: category2.id,
        value: 0.188,
      },
      {
        user_id: user2.id,
        category_id: category3.id,
        value: 0.1544,
      },
      {
        user_id: user2.id,
        category_id: category4.id,
        value: 0.1462,
      },
      {
        user_id: user2.id,
        category_id: category5.id,
        value: 0.1075,
      },
      {
        user_id: user2.id,
        category_id: category6.id,
        value: 0.1148,
      },
      {
        user_id: user2.id,
        category_id: category7.id,
        value: 0.0835,
      },
    ],
  });

  console.log({ users, category, usersAhpResult });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
