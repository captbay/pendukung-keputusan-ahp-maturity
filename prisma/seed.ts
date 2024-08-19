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
        email: "user_one@mail.com",
        password: await bcrypt.hash("password", 10),
        name: "User One",
        jabatan: "Project Manager",
      },
      {
        email: "user_two@mail.com",
        password: await bcrypt.hash("password", 10),
        name: "User Two",
        jabatan: "Project Coordinator",
      },
      {
        email: "user_three@mail.com",
        password: await bcrypt.hash("password", 10),
        name: "User Three",
        jabatan: "Pengawas Lapangan",
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
        key: "identify_risks",
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
  const [admin, user2, user3, user4] = await prisma.user.findMany();
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
  const usersAhpForm = await prisma.usersAhpForm.createMany({
    data: [
      {
        user_id: user2.id,
        value: {
          section_one: [0.5, 2.0, 1.0, 4.0, 1.0, 1.0],
          section_two: [
            0.5, 2, 2, 1, 1, 1, 3, 1, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 1, 4, 4, 1,
            0.5, 3, 1,
          ],
          section_three: [
            4, 0.333333333, 0.333333333, 3, 0.5, 2, 0.333333333, 0.5, 1, 0.5, 1,
            3, 3, 0.5, 3, 2, 0.5, 1, 0.5, 2, 3,
          ],
          section_four: [
            3, 0.5, 0.5, 1, 0.5, 1, 0.5, 0.5, 2, 1, 1, 0.5, 2, 1, 1, 3, 0.5, 1,
            2, 1, 3,
          ],
          section_five: [
            2, 3, 3, 2, 2, 3, 0.5, 0.5, 1, 1, 1, 2, 1, 2, 1, 3, 3, 2, 0.5, 1, 2,
          ],
        },
      },
      {
        user_id: user3.id,
        value: {
          section_one: [0.5, 1, 1, 3, 3, 2],
          section_two: [
            0.5, 2, 2, 3, 3, 4, 5, 5, 3, 3, 3, 1, 1, 1, 1, 4, 3, 0.5, 1, 1, 1,
          ],
          section_three: [
            0.5, 2, 2, 1, 2, 3, 2, 2, 1, 2, 1, 2, 1, 1, 0.5, 2, 0.5, 1, 1, 2, 2,
          ],
          section_four: [
            0.5, 3, 3, 1, 1, 0.5, 3, 3, 3, 3, 3, 2, 1, 1, 1, 1, 2, 2, 0.5, 0.5,
            0.5,
          ],
          section_five: [
            0.5, 1, 0.333333333, 0.5, 1, 0.5, 1, 1, 1, 0.5, 0.5, 2, 1, 0.5, 1,
            2, 2, 1, 1, 1, 1,
          ],
        },
      },
      {
        user_id: user4.id,
        value: {
          section_one: [3, 3, 3, 2, 3, 2],
          section_two: [
            3, 4, 4, 3, 3, 4, 3, 3, 4, 4, 4, 3, 4, 3, 4, 3, 3, 3, 3, 4, 4,
          ],
          section_three: [
            3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 3, 3, 3, 4, 4, 4, 3,
          ],
          section_four: [
            3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3,
          ],
          section_five: [
            2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3,
          ],
        },
      },
    ],
  });

  //   Create users-ahp-result
  const ahpResult = await prisma.ahpResult.createMany({
    data: [
      {
        category_id: category1.id,
        value: 0.2056,
      },
      {
        category_id: category2.id,
        value: 0.188,
      },
      {
        category_id: category3.id,
        value: 0.1544,
      },
      {
        category_id: category4.id,
        value: 0.1462,
      },
      {
        category_id: category5.id,
        value: 0.1075,
      },
      {
        category_id: category6.id,
        value: 0.1148,
      },
      {
        category_id: category7.id,
        value: 0.0835,
      },
    ],
  });

  // create question-maturity
  const questionMaturity1 = await prisma.questionMaturity.createMany({
    data: [
      {
        category_id: category1.id,
        code: "A01",
        level: 1,
        question:
          "Apakah ada rencana manajemen risiko yang diterapkan pada proyek?",
      },
      {
        category_id: category1.id,
        code: "A02",
        level: 1,
        question: "Apakah manajemen risiko bersifat anekdotal dan incidental?",
      },
      {
        category_id: category1.id,
        code: "A03",
        level: 1,
        question:
          "Apakah project charter adalah satu-satunya dokumen inisiasi proyek?",
      },
      {
        category_id: category1.id,
        code: "A04",
        level: 2,
        question:
          "Apakah terdapat pengembangan dari rencana manajemen risiko yang merupakan bagian dari proses manajemen proyek?",
      },
      {
        category_id: category1.id,
        code: "A05",
        level: 2,
        question:
          "Apakah terdapat rencana manajemen risiko yang menetapkan aturan untuk mengelola risiko pada proyek?",
      },
      {
        category_id: category1.id,
        code: "A06",
        level: 2,
        question:
          "Apakah sebagian besar proyek besar menggunakan rencana manajemen risiko?",
      },
      {
        category_id: category1.id,
        code: "A07",
        level: 3,
        question:
          "Apakah terdapat standar manajemen risiko dan telah diterapkan pada semua proyek?",
      },
      {
        category_id: category1.id,
        code: "A08",
        level: 3,
        question:
          "Apakah setiap proyek yang dijalankan mengikuti standar yang sudah diterapkan untuk identifikasi, evaluasi dan pengelolaan risiko proyek?",
      },
      {
        category_id: category1.id,
        code: "A09",
        level: 3,
        question:
          "Apakah terdapat dokumen perencanaan manajemen risiko yang telah diterapkan pada titik-titik tertentu selama proyek?",
      },
      {
        category_id: category1.id,
        code: "A10",
        level: 3,
        question:
          "Apakah penilaian risiko dan probabilitas risiko diterapkan pada semua proyek?",
      },
      {
        category_id: category1.id,
        code: "A11",
        level: 4,
        question:
          "Apakah perencanaan risiko dan manajemen risiko adalah hal yang wajib dilakukan pada semua proyek?",
      },
      {
        category_id: category1.id,
        code: "A12",
        level: 4,
        question:
          "Apakah expert judgement dan arsip proyek terdahulu digunakan sebagai acuan untuk membuat rencana manajemen risiko?",
      },
      {
        category_id: category1.id,
        code: "A13",
        level: 5,
        question:
          "Apakah nilai dan perbaikan adalah pertimbangan utama dalam pengembangan rencana manajemen risiko?",
      },
      {
        category_id: category1.id,
        code: "A14",
        level: 5,
        question:
          "Apakah lesson learned yang berkaitan dengan proses perencanaan manajemen risiko dicatat, disebarkan, dan digunakan untuk meningkatkan praktik manajemen risiko?",
      },
    ],
  });

  const questionMaturity2 = await prisma.questionMaturity.createMany({
    data: [
      {
        category_id: category2.id,
        code: "B01",
        level: 1,
        question: "Apakah risiko teridentifikasi secara rutin?",
      },
      {
        category_id: category2.id,
        code: "B02",
        level: 1,
        question:
          "Apakah identifikasi risiko dilakukan dengan menggunakan WBS dan scope statement secara rinci?",
      },
      {
        category_id: category2.id,
        code: "B03",
        level: 1,
        question:
          "Apakah risiko yang didapat dari project scope dan informasi milestone hanya dibahas secara ad hoc?",
      },
      {
        category_id: category2.id,
        code: "B04",
        level: 2,
        question:
          "Apakah terdapat proses terdokumentasi untuk mengidentifikasi risiko pada proyek?",
      },
      {
        category_id: category2.id,
        code: "B05",
        level: 2,
        question:
          "Apakah proses identifikasi keseluruhan risiko proyek dilakukan dengan upaya sadar?",
      },
      {
        category_id: category2.id,
        code: "B06",
        level: 2,
        question:
          "Apakah identifikasi risiko dilakukan dengan menyiapkan scope statement, WBS (minimal 3 level), project schedule yang sangat detil, dan estimasi biaya proyek yang komperhensif?",
      },
      {
        category_id: category2.id,
        code: "B07",
        level: 2,
        question:
          "Apakah dilakukan pemeriksaan terhadap procurement management dan staffing management plan untuk mengidentifikasi risiko proyek?",
      },
      {
        category_id: category2.id,
        code: "B08",
        level: 2,
        question:
          "Apakah project scope, schedule, dan cost menjadi focus bahasan dalam diskusi mengenai risiko pada proyek?",
      },
      {
        category_id: category2.id,
        code: "B09",
        level: 2,
        question:
          "Apakah top level risk sudah masuk dalam rencana manajemen risiko?",
      },
      {
        category_id: category2.id,
        code: "B10",
        level: 2,
        question:
          "Apakah penilaian dari ahli dan lesson learned digunakan dalam identifikasi risiko?",
      },
      {
        category_id: category2.id,
        code: "B11",
        level: 2,
        question:
          "Apakah terdapat dokumentasi untuk risiko yang telah teridentifikasi untuk monitoring pada proyek besar dan kompleks?",
      },
      {
        category_id: category2.id,
        code: "B12",
        level: 3,
        question:
          "Apakah terdapat proses terdokumentasi dan diulang untuk identifikasi risiko proyek?",
      },
      {
        category_id: category2.id,
        code: "B13",
        level: 3,
        question:
          "Apakah tim proyek mengidentifikasi risiko dan dimasukkan ke dalam basis data historis?",
      },
      {
        category_id: category2.id,
        code: "B14",
        level: 3,
        question:
          "Apakah terdapat upaya sadar yang dilakukan untuk mengidentifikasi risiko proyek secara menyeluruh?",
      },
      {
        category_id: category2.id,
        code: "B15",
        level: 3,
        question:
          "Apakah diskusi mengenai risiko mencakup input dari proyek serupa, lesson learned industri, dan key stakeholder?",
      },
      {
        category_id: category2.id,
        code: "B16",
        level: 3,
        question:
          "Apakah informasi dan indikasi risiko telah terkonsolidasi dan terintegrasi?",
      },
      {
        category_id: category2.id,
        code: "B17",
        level: 3,
        question:
          "Apakah proses identifikasi risiko dilakukan secara berulang sepanjang hidup proyek?",
      },
      {
        category_id: category2.id,
        code: "B18",
        level: 4,
        question:
          "Apakah keseluruhan proses identifikasi risiko telah terdokumentasi dan dimanfaatkan sepenuhnya?",
      },
      {
        category_id: category2.id,
        code: "B19",
        level: 4,
        question:
          "Apakah proses identifikasi risiko sudah terintegrasi dengan manajemen biaya, manajemen waktu, dan PMO?",
      },
      {
        category_id: category2.id,
        code: "B20",
        level: 4,
        question:
          "Apakah terdapat upaya sadar untuk mengidentifikasi risiko proyek secara menyeluruh dan mempertimbangkan organisasi, proyek, atau program?",
      },
      {
        category_id: category2.id,
        code: "B21",
        level: 5,
        question:
          "Apakah terdapat proses untuk meningkatkan proses identifikasi risiko secara terus-menerus dengan mengidentifikasi semua risiko proyek selengkap dan sedini mungkin?",
      },
      {
        category_id: category2.id,
        code: "B22",
        level: 5,
        question:
          "Apakah lesson learned digunakan untuk meningkatkan proses identifikasi risiko?",
      },
      {
        category_id: category2.id,
        code: "B23",
        level: 5,
        question:
          "Apakah identifikasi risiko dilakukan dengan melibatkan identifikasi prioritas organisasi dalam proyek?",
      },
      {
        category_id: category2.id,
        code: "B24",
        level: 5,
        question:
          "Apakah penentuan prioritas organisasi terhubung dengan keputusan manajemen dan memberikan tim proyek wewenang untuk menetapkan prioritas pada risiko yang dihadapi?",
      },
    ],
  });

  const questionMaturity3 = await prisma.questionMaturity.createMany({
    data: [
      {
        category_id: category3.id,
        code: "C01",
        level: 1,
        question:
          "Apakah manajer proyek dapat memperkirakan dampak risiko pada proyek jika risiko tersebut diidentifikasi?",
      },
      {
        category_id: category3.id,
        code: "C02",
        level: 1,
        question:
          "Apakah terdapat pendekatan umum yang dilakukan seperti spekulasi spontan tanpa analisis, perencanaan, atau proses standar?",
      },
      {
        category_id: category3.id,
        code: "C03",
        level: 2,
        question:
          "Apakah terdapat proses terdokumentasi yang menjelaskan penilaian risiko dengan kategori rendah, sedang, dan tinggi untuk menilai probabilitas dan dampak dari risiko?",
      },
      {
        category_id: category3.id,
        code: "C04",
        level: 3,
        question:
          "Apakah proses analisis risiko diperluas untuk mencakup prosedur yang lebih maju dalam mengevaluasi risiko secara kualitatif?",
      },
      {
        category_id: category3.id,
        code: "C05",
        level: 3,
        question:
          "Apakah proses analisis risiko secara kualitatif telah terdokumentasi dan dilakukan secara berulang?",
      },
      {
        category_id: category3.id,
        code: "C06",
        level: 3,
        question:
          "Apakah risiko diprioritaskan berdasarkan deskripsi naratif daripada perhitungan matematis?",
      },
      {
        category_id: category3.id,
        code: "C07",
        level: 4,
        question:
          "Apakah keseluruhan proses analisis risiko secara kualitatif telah terdokumentasi dan dimanfaatkan sepenuhnya?",
      },
      {
        category_id: category3.id,
        code: "C08",
        level: 4,
        question:
          "Apakah terdapat informasi tentang dampak potensial pada manajemen biaya, manajemen waktu, sistem keuangan dan akuntansi, serta proses perencanaan strategis dalam analisis risiko secara kualitatif?",
      },
      {
        category_id: category3.id,
        code: "C09",
        level: 4,
        question:
          "Apakah risiko yang terjadi dievaluasi dampaknya terhadap proyek dan potensi dampaknya terhadap organisasi?",
      },
      {
        category_id: category3.id,
        code: "C10",
        level: 5,
        question:
          "Apakah terdapat proses kontinyu untuk meningkatkan proses dalam pengembangan respon risiko dan menyusun rencana untuk manajemen risiko?",
      },
      {
        category_id: category3.id,
        code: "C11",
        level: 5,
        question:
          "Apakah lesson learned digunakan untuk meningkatkan pengembangan dari proses identifikasi risiko?",
      },
    ],
  });

  const questionMaturity4 = await prisma.questionMaturity.createMany({
    data: [
      {
        category_id: category4.id,
        code: "D01",
        level: 1,
        question:
          "Apakah analisis kuantitatif terhadap risiko yang terjadi hanya dilakukan sedikit atau bahkan tidak dilakukan dan hanya menggunakan spekulasi?",
      },
      {
        category_id: category4.id,
        code: "D02",
        level: 2,
        question:
          "Apakah terdapat proses terdokumentasi yang mencakup metode standar untuk memastikan penilaian konsistensi risiko?",
      },
      {
        category_id: category4.id,
        code: "D03",
        level: 2,
        question:
          "Apakah terdapat pendekatan yang lebih objektif untuk pengukuran dampak risiko yang digunakan oleh tim proyek?",
      },
      {
        category_id: category4.id,
        code: "D04",
        level: 2,
        question:
          "Apakah evaluasi terus dilakukan pada risiko pada saat proyek dilaksanakan?",
      },
      {
        category_id: category4.id,
        code: "D05",
        level: 3,
        question:
          "Apakah prosedur lanjutan digunakan dalam proses kuantifikasi risiko untuk mengukur risiko?",
      },
      {
        category_id: category4.id,
        code: "D06",
        level: 3,
        question:
          "Apakah proses analisis risiko kuantitatif telah didokumentasikan secara menyeluruh?",
      },
      {
        category_id: category4.id,
        code: "D07",
        level: 3,
        question:
          "Apakah risiko diprioritaskan ke dalam beberapa faktor, seperti EMV, kekritisan risiko, waktu, dan jenis risiko, serta dilakukan evaluasi berdasarkan proyek, program, atau organisasi?",
      },
      {
        category_id: category4.id,
        code: "D08",
        level: 4,
        question:
          "Apakah keseluruhan proses analisis risiko secara kuantitatif telah terdokumentasi dan dimanfaatkan sepenuhnya?",
      },
      {
        category_id: category4.id,
        code: "D09",
        level: 4,
        question:
          "Apakah proses kuantifikasi risiko telah terintegrasi sepenuhnya dengan manajemen biaya, manajemen waktu, keuangan, akuntansi, perencanaan strategis, dan PMO?",
      },
      {
        category_id: category4.id,
        code: "D10",
        level: 4,
        question:
          "Apakah kuantifikasi risiko dilakukan dengan mempertimbangkan risiko yang terjadi dari proyek lain?",
      },
      {
        category_id: category4.id,
        code: "D11",
        level: 4,
        question:
          "Apakah evaluasi risiko dilakukan berdasarkan dampaknya terhadap proyek dan efek potensial terhadap organisasi?",
      },
      {
        category_id: category4.id,
        code: "D12",
        level: 4,
        question:
          "Apakah terdapat kriteria pengukuran efektivitas dari manajemen risiko proyek yang ditetapkan oleh organisasi?",
      },
      {
        category_id: category4.id,
        code: "D13",
        level: 5,
        question:
          "Apakah terdapat proses kontinyu untuk meningkatkan proses dalam pengembangan respon risiko dan menyusun rencana untuk manajemen risiko?",
      },
      {
        category_id: category4.id,
        code: "D14",
        level: 5,
        question:
          "Apakah terdapat lesson learned yang digunakan untuk meningkatkan perencanaan manajemen risiko?",
      },
      {
        category_id: category4.id,
        code: "D15",
        level: 5,
        question:
          "Apakah project reserves (cadangan proyek) digunakan untuk menentukan efisiensi dan efektivitas dari proyek?",
      },
      {
        category_id: category4.id,
        code: "D16",
        level: 5,
        question:
          "Apakah terdapat proses yang digunakan utnuk memantau penggunaan project reserves sebagai pendukung keputusan manajemen selama proyek berjalan?",
      },
    ],
  });

  const questionMaturity5 = await prisma.questionMaturity.createMany({
    data: [
      {
        category_id: category5.id,
        code: "E01",
        level: 1,
        question:
          "Apakah sebagian besar risiko ditangani ketika risiko tersebut muncul?",
      },
      {
        category_id: category5.id,
        code: "E02",
        level: 1,
        question:
          "Apakah strategi mitigasi risiko atau perencanaan kemungkinan terjadinya risiko di masa depan jarang dilakukan oleh tim proyek?",
      },
      {
        category_id: category5.id,
        code: "E03",
        level: 1,
        question:
          "Apakah semua risiko memiliki pemilik/orang yang bertanggung jawab?",
      },
      {
        category_id: category5.id,
        code: "E04",
        level: 2,
        question:
          "Apakah tim proyek mengembangkan rencana manajemen risiko yang terdokumentasi untuk mengelola risiko-risiko yang muncul?",
      },
      {
        category_id: category5.id,
        code: "E05",
        level: 2,
        question:
          "Apakah tim mempertimbangkan secara informal strategi untuk menghadapi risiko di masa depan dan berdiskusi mengenai strategi-strategi tersebut?",
      },
      {
        category_id: category5.id,
        code: "E06",
        level: 2,
        question:
          "Apakah proyek-proyek besar menyertakan rencana kontingensi untuk risiko jangka pendek dan rencana mitigasi untuk semua area yang menjadi perhatian?",
      },
      {
        category_id: category5.id,
        code: "E07",
        level: 3,
        question:
          "Apakah pihak-pihak yang bertanggung jawab selalu diidentifikasi untuk semua risiko yang diperlukan?",
      },
      {
        category_id: category5.id,
        code: "E08",
        level: 3,
        question:
          "Apakah terdapat proses standar untuk mengatasi risiko yang perlu tanggapan terdokumentasi dan digunakan di semua proyek?",
      },
      {
        category_id: category5.id,
        code: "E09",
        level: 3,
        question:
          "Apakah terdapat template rencana manajemen risiko yang termasuk dalam proses pengembangan respon risiko?",
      },
      {
        category_id: category5.id,
        code: "E10",
        level: 3,
        question:
          "Apakah tim proyek memiliki rencana kontingensi untuk mengatasi risiko dalam jangka dekat dan strategi mitigasi untuk setiap risiko yang telah diidentifikasi?",
      },
      {
        category_id: category5.id,
        code: "E11",
        level: 3,
        question:
          "Apakah organisasi mampu menggunakan project reserves untuk menutupi rencana kontingensi dan strategi mitigasi?",
      },
      {
        category_id: category5.id,
        code: "E12",
        level: 4,
        question:
          "Apakah semua proses yang telah didokumentasikan digunakan sepenuhnya dalam proses perencanan respon risiko?",
      },
      {
        category_id: category5.id,
        code: "E13",
        level: 4,
        question:
          "Apakah proses pengembangan respon risiko sepenuhnya terintegrasi dengan manajemen biaya, manajemen waktu, sistem keuangan dan akuntansi, proses perencanaan strategis, dan (PMO)?",
      },
      {
        category_id: category5.id,
        code: "E14",
        level: 5,
        question:
          "Apakah terdapat proses untuk memantau penggunaan project reserve dan mendukung pengambilan keputusan manjerial selama proyek berlangsung?",
      },
      {
        category_id: category5.id,
        code: "E15",
        level: 5,
        question:
          "Apakah project reserve termasuk dalam penentuan keputusan efisiensi dan efektivitas proyek?",
      },
      {
        category_id: category5.id,
        code: "E16",
        level: 5,
        question:
          "Apakah lesson learned didokumentasikan dan digunakan untuk memperbaiki metode dalam mengidentifikasi strategi risiko/peluang?",
      },
    ],
  });

  const questionMaturity6 = await prisma.questionMaturity.createMany({
    data: [
      {
        category_id: category6.id,
        code: "F01",
        level: 1,
        question:
          "Apakah tim proyek selalu bertindak setelah merencanakan respons risiko terhadap risiko yang diketahui?",
      },
      {
        category_id: category6.id,
        code: "F02",
        level: 2,
        question: "Apakah respon risiko hanya dilakukan pada sebagian proyek?",
      },
      {
        category_id: category6.id,
        code: "F03",
        level: 2,
        question:
          "Apakah respon risiko telah terintegrasi dengan jadwal proyek?",
      },
      {
        category_id: category6.id,
        code: "F04",
        level: 3,
        question:
          "Apakah tindakan respon risiko diambil terhadap setiap risiko yang terindentifikasi merupakan standar organisasi?",
      },
      {
        category_id: category6.id,
        code: "F05",
        level: 3,
        question:
          "Apakah implementasi dari respon risiko menyebabkan perubahan pada lingkup, jadwal, dan biaya yang kemudian menghasilkan change request?",
      },
      {
        category_id: category6.id,
        code: "F06",
        level: 4,
        question:
          "Apakah respon risiko telah terintegrasi sepentuhnya dengan cost management, schedule management, keuangan/akuntansi, dan proses perencanaan strategis?",
      },
      {
        category_id: category6.id,
        code: "F07",
        level: 5,
        question:
          "Apakah lesson learned dikumpulkan dan digunakan untuk meningkatkan kegiatan respons risiko seperti halnya proses manajemen proyek lainnya?",
      },
    ],
  });

  const questionMaturity7 = await prisma.questionMaturity.createMany({
    data: [
      {
        category_id: category7.id,
        code: "G01",
        level: 1,
        question:
          "Apakah pemecahan masalah sehari-hari dilakukan ketika risiko baru muncul oleh tim proyek?",
      },
      {
        category_id: category7.id,
        code: "G02",
        level: 1,
        question:
          "Apakah ada pengembangkan solusi sementara untuk menangani risiko daripada mengacu pada rencana manajemen risiko dan mengidentifikasi strategi respons risiko tambahan?",
      },
      {
        category_id: category7.id,
        code: "G03",
        level: 2,
        question:
          "Apakah terdapat risk owner yang bertanggung jawab atas pengawasan dan pelaporan respons risiko?",
      },
      {
        category_id: category7.id,
        code: "G04",
        level: 2,
        question:
          "Apakah ada prosedur terdokumentasi untuk melaporkan status risiko kepada stakeholder kunci?",
      },
      {
        category_id: category7.id,
        code: "G05",
        level: 2,
        question:
          "Apakah pendekatan individu dilakukan dalam mengelola dan mengendalikan risiko?",
      },
      {
        category_id: category7.id,
        code: "G06",
        level: 2,
        question:
          "Apakah proses monitoring risiko mencakup risk register, pihak yang bertanggung jawab, dampak potensial, probabilitas dampak risiko, strategi mitigasi, dan status?",
      },
      {
        category_id: category7.id,
        code: "G07",
        level: 3,
        question:
          "Apakah terdapat proses khusus untuk mengelola dan mengendalikan risiko?",
      },
      {
        category_id: category7.id,
        code: "G08",
        level: 3,
        question:
          "Apakah risiko proyek dipantau secara rutin dan aktif untuk bisa mengambil Tindakan korektif?",
      },
      {
        category_id: category7.id,
        code: "G09",
        level: 3,
        question:
          "Apakah dilakukan pembaharuan terhadap rencana manajemen risiko ketika risiko terjadi dan adanya perubahan kondisi?",
      },
      {
        category_id: category7.id,
        code: "G10",
        level: 3,
        question:
          "Apakah dilakukan pengumpulan, analisis, dan perluasan pada metrik untuk menyetarakan tingkat keberhasilan mitigasi risiko?",
      },
      {
        category_id: category7.id,
        code: "G11",
        level: 4,
        question:
          "Apakah seluruh proses monitoring risiko telah terdokumentasi dan dilakukan sepenuhnya?",
      },
      {
        category_id: category7.id,
        code: "G12",
        level: 4,
        question:
          "Apakah sistem pengendalian risiko telah terintegrasi dengan control system dari organisasi, program monitoring, program manajemen biaya, dan program manajemen waktu?",
      },
      {
        category_id: category7.id,
        code: "G13",
        level: 4,
        question:
          "Apakah dilakukan pengumpulkan informasi historis seperti item risiko umum dan pemicu risiko dan mengorganisir informasi tersebut dalam basis data historis?",
      },
      {
        category_id: category7.id,
        code: "G14",
        level: 5,
        question:
          "Apakah ada proses kontinyu untuk peningkatan proses pengendalian risiko?",
      },
      {
        category_id: category7.id,
        code: "G15",
        level: 5,
        question:
          "Apakah terdapat proses terdokumentasi menggunakan penilaian risiko dan data status risiko saat ini untuk membantu pengambilan keputusan manajemen selama pelaksanaan proyek?",
      },
      {
        category_id: category7.id,
        code: "G16",
        level: 5,
        question:
          "Apakah lesson learned dikumpulkan dan digunakan untuk meningkatkan usaha monitoring dan controlling risiko proyek?",
      },
      {
        category_id: category7.id,
        code: "G17",
        level: 5,
        question:
          "Apakah ada evaluasi risiko yang diintegrasikan dan dimasukkan dalam penentuan efisiensi dan efektivitas proyek?",
      },
    ],
  });

  const questionSection1 = await prisma.questionMaturity.findMany({
    where: {
      category_id: category1.id,
      level: 1,
    },
  });

  const questionSection2 = await prisma.questionMaturity.findFirst({
    where: {
      category_id: category2.id,
    },
  });

  const questionSection3 = await prisma.questionMaturity.findFirst({
    where: {
      category_id: category3.id,
    },
  });

  const questionSection4 = await prisma.questionMaturity.findFirst({
    where: {
      category_id: category4.id,
    },
  });

  const questionSection5 = await prisma.questionMaturity.findFirst({
    where: {
      category_id: category5.id,
    },
  });

  const questionSection6 = await prisma.questionMaturity.findFirst({
    where: {
      category_id: category6.id,
    },
  });

  const questionSection7 = await prisma.questionMaturity.findFirst({
    where: {
      category_id: category7.id,
    },
  });

  console.log(questionSection1);

  // create userTempMaturity
  const user2Maturity = await prisma.usersMaturity.createMany({
    data: [
      {
        user_id: user2.id,
        question_maturity_id: questionSection1[0].id,
        answer: true,
        evidence:
          "https://firebasestorage.googleapis.com/v0/b/spk-citra.appspot.com/o/evidences%2FBLK_MEKS1716360490231.jpg?alt=media&token=02b511aa-04f9-4cbb-a181-b44023060cb7",
      },
      {
        user_id: user2.id,
        question_maturity_id: questionSection1[1].id,
        answer: true,
        evidence:
          "https://firebasestorage.googleapis.com/v0/b/spk-citra.appspot.com/o/evidences%2FBLK_MEKS1716360490231.jpg?alt=media&token=02b511aa-04f9-4cbb-a181-b44023060cb7",
      },
      {
        user_id: user2.id,
        question_maturity_id: questionSection1[2].id,
        answer: true,
        evidence:
          "https://firebasestorage.googleapis.com/v0/b/spk-citra.appspot.com/o/evidences%2FBLK_MEKS1716360490231.jpg?alt=media&token=02b511aa-04f9-4cbb-a181-b44023060cb7",
      },
      {
        user_id: user2.id,
        question_maturity_id: questionSection2!.id,
        answer: true,
        evidence:
          "https://firebasestorage.googleapis.com/v0/b/spk-citra.appspot.com/o/evidences%2FBLK_MEKS1716360490231.jpg?alt=media&token=02b511aa-04f9-4cbb-a181-b44023060cb7",
      },
      {
        user_id: user2.id,
        question_maturity_id: questionSection3!.id,
        answer: true,
        evidence:
          "https://firebasestorage.googleapis.com/v0/b/spk-citra.appspot.com/o/evidences%2FBLK_MEKS1716360490231.jpg?alt=media&token=02b511aa-04f9-4cbb-a181-b44023060cb7",
      },
      {
        user_id: user2.id,
        question_maturity_id: questionSection4!.id,
        answer: true,
        evidence:
          "https://firebasestorage.googleapis.com/v0/b/spk-citra.appspot.com/o/evidences%2FBLK_MEKS1716360490231.jpg?alt=media&token=02b511aa-04f9-4cbb-a181-b44023060cb7",
      },
      {
        user_id: user2.id,
        question_maturity_id: questionSection5!.id,
        answer: true,
        evidence:
          "https://firebasestorage.googleapis.com/v0/b/spk-citra.appspot.com/o/evidences%2FBLK_MEKS1716360490231.jpg?alt=media&token=02b511aa-04f9-4cbb-a181-b44023060cb7",
      },
      {
        user_id: user2.id,
        question_maturity_id: questionSection6!.id,
        answer: true,
        evidence:
          "https://firebasestorage.googleapis.com/v0/b/spk-citra.appspot.com/o/evidences%2FBLK_MEKS1716360490231.jpg?alt=media&token=02b511aa-04f9-4cbb-a181-b44023060cb7",
      },
      {
        user_id: user2.id,
        question_maturity_id: questionSection7!.id,
        answer: true,
        evidence:
          "https://firebasestorage.googleapis.com/v0/b/spk-citra.appspot.com/o/evidences%2FBLK_MEKS1716360490231.jpg?alt=media&token=02b511aa-04f9-4cbb-a181-b44023060cb7",
      },
      //
      {
        user_id: user3.id,
        question_maturity_id: questionSection1[0].id,
        answer: true,
        evidence:
          "https://firebasestorage.googleapis.com/v0/b/spk-citra.appspot.com/o/evidences%2FBLK_MEKS1716360490231.jpg?alt=media&token=02b511aa-04f9-4cbb-a181-b44023060cb7",
      },
      {
        user_id: user3.id,
        question_maturity_id: questionSection1[1].id,
        answer: true,
        evidence:
          "https://firebasestorage.googleapis.com/v0/b/spk-citra.appspot.com/o/evidences%2FBLK_MEKS1716360490231.jpg?alt=media&token=02b511aa-04f9-4cbb-a181-b44023060cb7",
      },
      {
        user_id: user3.id,
        question_maturity_id: questionSection1[2].id,
        answer: true,
        evidence:
          "https://firebasestorage.googleapis.com/v0/b/spk-citra.appspot.com/o/evidences%2FBLK_MEKS1716360490231.jpg?alt=media&token=02b511aa-04f9-4cbb-a181-b44023060cb7",
      },
      {
        user_id: user3.id,
        question_maturity_id: questionSection2!.id,
        answer: true,
        evidence:
          "https://firebasestorage.googleapis.com/v0/b/spk-citra.appspot.com/o/evidences%2FBLK_MEKS1716360490231.jpg?alt=media&token=02b511aa-04f9-4cbb-a181-b44023060cb7",
      },
      {
        user_id: user3.id,
        question_maturity_id: questionSection3!.id,
        answer: true,
        evidence:
          "https://firebasestorage.googleapis.com/v0/b/spk-citra.appspot.com/o/evidences%2FBLK_MEKS1716360490231.jpg?alt=media&token=02b511aa-04f9-4cbb-a181-b44023060cb7",
      },
      {
        user_id: user3.id,
        question_maturity_id: questionSection4!.id,
        answer: true,
        evidence:
          "https://firebasestorage.googleapis.com/v0/b/spk-citra.appspot.com/o/evidences%2FBLK_MEKS1716360490231.jpg?alt=media&token=02b511aa-04f9-4cbb-a181-b44023060cb7",
      },
      {
        user_id: user3.id,
        question_maturity_id: questionSection5!.id,
        answer: true,
        evidence:
          "https://firebasestorage.googleapis.com/v0/b/spk-citra.appspot.com/o/evidences%2FBLK_MEKS1716360490231.jpg?alt=media&token=02b511aa-04f9-4cbb-a181-b44023060cb7",
      },
      {
        user_id: user3.id,
        question_maturity_id: questionSection6!.id,
        answer: true,
        evidence:
          "https://firebasestorage.googleapis.com/v0/b/spk-citra.appspot.com/o/evidences%2FBLK_MEKS1716360490231.jpg?alt=media&token=02b511aa-04f9-4cbb-a181-b44023060cb7",
      },
      {
        user_id: user3.id,
        question_maturity_id: questionSection7!.id,
        answer: true,
        evidence:
          "https://firebasestorage.googleapis.com/v0/b/spk-citra.appspot.com/o/evidences%2FBLK_MEKS1716360490231.jpg?alt=media&token=02b511aa-04f9-4cbb-a181-b44023060cb7",
      },
      //
      {
        user_id: user4.id,
        question_maturity_id: questionSection1[0].id,
        answer: true,
        evidence:
          "https://firebasestorage.googleapis.com/v0/b/spk-citra.appspot.com/o/evidences%2FBLK_MEKS1716360490231.jpg?alt=media&token=02b511aa-04f9-4cbb-a181-b44023060cb7",
      },
      {
        user_id: user4.id,
        question_maturity_id: questionSection1[1].id,
        answer: true,
        evidence:
          "https://firebasestorage.googleapis.com/v0/b/spk-citra.appspot.com/o/evidences%2FBLK_MEKS1716360490231.jpg?alt=media&token=02b511aa-04f9-4cbb-a181-b44023060cb7",
      },
      {
        user_id: user4.id,
        question_maturity_id: questionSection1[2].id,
        answer: true,
        evidence:
          "https://firebasestorage.googleapis.com/v0/b/spk-citra.appspot.com/o/evidences%2FBLK_MEKS1716360490231.jpg?alt=media&token=02b511aa-04f9-4cbb-a181-b44023060cb7",
      },
      {
        user_id: user4.id,
        question_maturity_id: questionSection2!.id,
        answer: true,
        evidence:
          "https://firebasestorage.googleapis.com/v0/b/spk-citra.appspot.com/o/evidences%2FBLK_MEKS1716360490231.jpg?alt=media&token=02b511aa-04f9-4cbb-a181-b44023060cb7",
      },
      {
        user_id: user4.id,
        question_maturity_id: questionSection3!.id,
        answer: true,
        evidence:
          "https://firebasestorage.googleapis.com/v0/b/spk-citra.appspot.com/o/evidences%2FBLK_MEKS1716360490231.jpg?alt=media&token=02b511aa-04f9-4cbb-a181-b44023060cb7",
      },
      {
        user_id: user4.id,
        question_maturity_id: questionSection4!.id,
        answer: true,
        evidence:
          "https://firebasestorage.googleapis.com/v0/b/spk-citra.appspot.com/o/evidences%2FBLK_MEKS1716360490231.jpg?alt=media&token=02b511aa-04f9-4cbb-a181-b44023060cb7",
      },
      {
        user_id: user4.id,
        question_maturity_id: questionSection5!.id,
        answer: true,
        evidence:
          "https://firebasestorage.googleapis.com/v0/b/spk-citra.appspot.com/o/evidences%2FBLK_MEKS1716360490231.jpg?alt=media&token=02b511aa-04f9-4cbb-a181-b44023060cb7",
      },
      {
        user_id: user4.id,
        question_maturity_id: questionSection6!.id,
        answer: true,
        evidence:
          "https://firebasestorage.googleapis.com/v0/b/spk-citra.appspot.com/o/evidences%2FBLK_MEKS1716360490231.jpg?alt=media&token=02b511aa-04f9-4cbb-a181-b44023060cb7",
      },
      {
        user_id: user4.id,
        question_maturity_id: questionSection7!.id,
        answer: true,
        evidence:
          "https://firebasestorage.googleapis.com/v0/b/spk-citra.appspot.com/o/evidences%2FBLK_MEKS1716360490231.jpg?alt=media&token=02b511aa-04f9-4cbb-a181-b44023060cb7",
      },
    ],
  });

  // create recommendMaturity
  const recommendMaturity = await prisma.recommendMaturity.createMany({
    data: [
      {
        category_id: category1.id,
        level: 1,
        recommend:
          "Perusahaan harus melengkapi dokumen perencanaan untuk manajemen risiko dan project charter. Perusahaan dapat melakukan pengembangan dari rencana manajemen risiko untuk mengelola risiko pada proyek dan diterapkan pada sebagian besar proyek.",
      },
      {
        category_id: category1.id,
        level: 2,
        recommend:
          "Perusahaan menetapkan standar untuk identifikasi, evaluasi, dan pengelolaan risiko pada rencana manajemen risiko proyek dan diterapkan pada semua proyek. Lengkapi doumen perencanaan manajemen risiko pada titik-titik yang telah ditentukan selama proyek dan lakukan penilaian risiko serta probabilitas risiko pasa semua proyek.",
      },
      {
        category_id: category1.id,
        level: 3,
        recommend:
          "Perencanaan risiko dan manajemen risiko wajib diterapkan pada semua proyek yang dijalankan, serta menggunakan expert judgement dan arsip proyek terdahulu sebagai acuan dalam memebuat rencana manajemen risiko. Lakuakn dokumentasi pada lesson learned dan lakukan perbaikan pada rencana manajemen risiko.",
      },
      {
        category_id: category1.id,
        level: 4,
        recommend:
          "Selalu catat, sebarkan, dan gunakan lesson learned yang berkaitan dengan perencanaan manajemen risiko untuk meningkatkan praktik manajemen risiko. Lakukan evaluasi terus-menerus terhadap rencana manajemen risiko dan gunakan hasil evaluasi untuk penyempurnaan berkelanjutan. ",
      },
      {
        category_id: category1.id,
        level: 5,
        recommend:
          "Perencanaan manajemen risiko yang dilakukan telah maksimal.",
      },
      {
        category_id: category2.id,
        level: 1,
        recommend:
          "Lakukan identifikasi risiko secara rutin menggunakan WBS dan scope statement. Mulai dokumentasikan risiko yang diidentifikasi dari project scope dan milestone secara ad-hoc. Buat proses standar untuk identifikasi risiko yang harus diikuti semua proyek, dengan menyusun WBS hingga Level 3 serta melibatkan stakeholder utama. Manfaatkan penilaian ahli dan pelajaran yang diperoleh dari proyek industri untuk mengidentifikasi risiko.",
      },
      {
        category_id: category2.id,
        level: 2,
        recommend:
          "Lakukan proses terdokumentasi untuk identifikasi risiko secara iteratif sepanjang hidup proyek dan dimasukkan ke dalam basis data historis. Lakukan diskusi mengenai risiko dengan mencaup input proyek serupa, lesson learned industri, dan key stakeholder. ",
      },
      {
        category_id: category2.id,
        level: 3,
        recommend:
          "Pastikan proses identifikasi risiko terdokumentasi sepenuhnya dan terintegrasi dengan manajemen biaya dan waktu serta dengan PMO. ",
      },
      {
        category_id: category2.id,
        level: 4,
        recommend:
          "Implementasikan proses untuk terus meningkatkan identifikasi risiko dengan mengidentifikasi semua risiko secepat dan seakurat mungkin. Dokumentasikan dan gunakan lesson learned yang diperoleh untuk meningkatkan kegiatan identifikasi risiko di masa depan. Libatkan keputusan manajemen dan tim proyek dalam menetapkan prioritas risiko.",
      },
      {
        category_id: category2.id,
        level: 5,
        recommend: "Proses identifikasi risiko yang dilakukan telah maksimal",
      },
      {
        category_id: category3.id,
        level: 1,
        recommend:
          "Terapkan dan wajibkan penggunaan proses standar untuk menilai probabilitas dan dampak risiko di semua proyek.",
      },
      {
        category_id: category3.id,
        level: 2,
        recommend:
          "Proses analisis risiko secara kualitatif diperluas dan dilakukan secara berulang. Kembangkan proses yang terdokumentasi secara penuh dan dapat diulang untuk menilai risiko secara kualitatif. Prioritaskan risiko berdasarkan deskripsi naratif dan lakukan tinjauan untuk mengidentifikasi dan mengoreksi bias dalam penilaian. ",
      },
      {
        category_id: category3.id,
        level: 3,
        recommend:
          "Lakukan proses analisis risiko yang mencakup dampak potensial pada manajemen biaya, manajemen waktu, sistem keuangan dan akuntansi, serta proses perencanaan strategis. Evaluasi risiko tidak hanya berdasarkan dampak pada proyek, tetapi juga dampak potensial pada organisasi secara keseluruhan.",
      },
      {
        category_id: category3.id,
        level: 4,
        recommend:
          " Lakukan proses kontinyu untuk meningkatkan proses respon risiko. Catat dan gunakan lesson learned yang diperoleh untuk meningkatkan strategi identifikasi risiko dan pengembangan tanggapan risiko.",
      },
      {
        category_id: category3.id,
        level: 5,
        recommend:
          "Proses analisis risiko secara kualitative yang dilakukan telah maksimal",
      },
      {
        category_id: category4.id,
        level: 1,
        recommend:
          "Terapkan proses standar yang terdokumentasi untuk penilaian kuantitatif risiko di semua proyek. Terus lakukan evaluasi pada risiko saat proyek dilaksanakan.",
      },
      {
        category_id: category4.id,
        level: 2,
        recommend:
          "Terapkan prosedur lanjutan terdokumentasi untuk analisis kuantifikasi risiko. Prioritaskan risiko menggunakan beberapa faktor seperti EVM, kritikalitas, waktu, dan jenis risiko. Pastikan semua langkah proses terdokumentasi sepenuhnya.",
      },
      {
        category_id: category4.id,
        level: 3,
        recommend:
          "Pastikan proses kuantifikasi risiko terdokumentassi dan terintegrasi dengan manajemen biaya, manajemen wakti, sistem keuangan dan akuntansi, rencanaan strategis, dan PMO. Evaluasi risiko tidak hanya berdasarkan dampak pada proyek tetapi juga dampak potensial pada organisasi secara keseluruhan. Tetapkan kriteria untuk mengukur efektivitas program manajemen risiko organisasi.",
      },
      {
        category_id: category4.id,
        level: 4,
        recommend:
          "Terapkan proses kontinyu dan lesson learned untuk meningkatkan manajemen risiko yang dijalankan. Gunakan project reserves untuk menentukan efisiensi dan efektivitas proyek.",
      },
      {
        category_id: category4.id,
        level: 5,
        recommend:
          "Proses analisis risiko secara kuantitatif yang dilakukan telah maksimal",
      },
      {
        category_id: category5.id,
        level: 1,
        recommend:
          "Lakukan dokumentasi pada rencana penanganan risiko yang dilakukan. Tetapkan pemilik untuk setiap risiko yang diidentifikasi untuk memastikan tanggung jawab yang jelas. Buat template standar untuk rencana manajemen risiko yang harus digunakan oleh semua proyek.",
      },
      {
        category_id: category5.id,
        level: 2,
        recommend:
          "Lakukan dokumentasi pada rencana penanganan risiko yang dilakukan. Tetapkan pemilik untuk setiap risiko yang diidentifikasi untuk memastikan tanggung jawab yang jelas. Buat template standar untuk rencana manajemen risiko yang harus digunakan oleh semua proyek dengan menyertakan rencana kontingensi. Gunakan project reserves untuk menutupi strategi kontingensi dan mitigasi.",
      },
      {
        category_id: category5.id,
        level: 3,
        recommend:
          "Tetapkan proses standar untuk dokumentasi risiko yang digunakan pada semua proyek. untuk menutupi strategi kontingensi dan mitigasi. Pastikan proses pengembangan respon risiko terintegrasi penuh dengan manajemen biaya, manajemen waktu, sistem keuangan dan akuntansi, proses perencanaan strategis, dan PMO.",
      },
      {
        category_id: category5.id,
        level: 4,
        recommend:
          "Gunakan semua proses yang telah terdokumentasi untuk memastikan bahwa semua aspek manajemen proyek memperhitungkan risiko secara terintegrasi. Pastikan proses pengembangan respon risiko terintegrasi penuh dengan manajemen biaya, manajemen waktu, sistem keuangan dan akuntansi, serta proses perencanaan strategis. Implementasikan proses untuk melacak penggunaan project reserves guna mendukung keputusan manajemen selama pelaksanaan proyek. Gunakan lesson learned untuk meningkatkan proses respon risiko.",
      },
      {
        category_id: category5.id,
        level: 5,
        recommend:
          "Proses perencanaan respon risiko yang dilakukan telah maksimal",
      },
      {
        category_id: category6.id,
        level: 1,
        recommend:
          "Mulai dokumentasikan tindakan yang diambil setelah merencanakan respon risiko untuk memastikan transparansi dan akuntabilitas. Pastikan semua proses respon risiko terintegrasi ke dalam jadwal proyek, tidak hanya pada proyek besar tetapi juga pada proyek kecil dan menengah.",
      },
      {
        category_id: category6.id,
        level: 2,
        recommend:
          "Buat prosedur standar untuk menangani perubahan pada ruang lingkup, jadwal, dan biaya akibat pelaksanaan respon risiko, termasuk proses pengajuan permintaan perubahan.",
      },
      {
        category_id: category6.id,
        level: 3,
        recommend:
          "Pastikan hasil respon risiko sepenuhnya terintegrasi dengan manajemen biaya, manajemen jadwal, sistem keuangan dan akuntansi, serta proses perencanaan strategis.",
      },
      {
        category_id: category6.id,
        level: 4,
        recommend:
          "Implementasikan lesson learned untuk meningkatkan kegiatan respon risiko yang dilakukan.",
      },
      {
        category_id: category6.id,
        level: 5,
        recommend:
          "Proses implementasi respon risiko yang dilakukan telah maksimal.",
      },
      {
        category_id: category7.id,
        level: 1,
        recommend:
          "Lakukan proses terdokumentasi untuk memonitor risiko pada proyek dan melaporkan ke stakeholder. Buat basis data historis untuk mengumpulkan informasi risiko seperti risiko umum pada proyek serupa. Tetapkan pemilik risiko untuk setiap item risiko yang diidentifikasi dan pastikan pemilik risiko bertanggung jawab untuk memantau dan melaporkan status risiko. Dokumentasikan proses pelaporan risiko yang mencakup risk register dengan informasi lengkap tentang setiap risiko.",
      },
      {
        category_id: category7.id,
        level: 2,
        recommend:
          "Tetapkan pemilik risiko untuk setiap item risiko yang diidentifikasi dan pastikan pemilik risiko bertanggung jawab untuk memantau dan melaporkan status risiko. Dokumentasikan proses pelaporan risiko yang mencakup register risiko dengan informasi lengkap tentang setiap risiko.",
      },
      {
        category_id: category7.id,
        level: 3,
        recommend:
          "Gunakan proses spesifik dan terdokumentasi untuk mengelola dan mengontrol risiko di semua proyek. Integrasikan sistem pengendalian risiko dengan sistem kontrol, program pemantauan, serta program manajemen biaya dan waktu organisasi. Lakukan pengumpulan informasi historis  untuk mengidentifikasi item risiko umum dan pemicu risiko.",
      },
      {
        category_id: category7.id,
        level: 4,
        recommend:
          "Lakukan proses terdokumentasi untuk membantu pengambilan keputusan manajerial. Gunakan lesson learner untuk meningkatkan proses monitor risk dan lakukan evaluasi terhadap risiko pada proyek",
      },
      {
        category_id: category7.id,
        level: 5,
        recommend: "Proses monitor risiko yang dilakukan telah maksimal",
      },
    ],
  });

  console.log({
    users,
    category,
    usersAhpForm,
    ahpResult,
    questionMaturity1,
    questionMaturity2,
    questionMaturity3,
    questionMaturity4,
    questionMaturity5,
    questionMaturity6,
    questionMaturity7,
    user2Maturity,
    recommendMaturity,
  });
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
