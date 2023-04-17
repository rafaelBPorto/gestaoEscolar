import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import { type } from 'os';
dotenv.config();
console.log(process.env.PORT);

const prisma = new PrismaClient();

async function main() {

  await prisma.$executeRaw`TRUNCATE TABLE "timetable" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "non-school-days" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "courses_programs" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "program" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "course" RESTART IDENTITY CASCADE;`;

  await prisma.courses.createMany({
    data: [
      {
        name: 'Aplicações Front-end',
        courseCode: 'APFE01',
        workload: 120,
        fieldStudy: 'Técnoligia da Informação',
      },
      {
        name: 'Single Page Applications',
        courseCode: 'SPA01',
        workload: 120,
        fieldStudy: 'Técnoligia da Informação',
      },
      {
        name: 'TypeScript',
        courseCode: 'TS01',
        workload: 60,
        fieldStudy: 'Técnoligia da Informação',
      },
      {
        name: 'Prsima',
        courseCode: 'DB02',
        workload: 60,
        fieldStudy: 'Técnoligia da Informação',
      },
    ],
  });

  await prisma.programs.createMany({
    data: [
      {
        name: 'Introdução a React',
        fieldStudy: 'Técnoligia da Informação',
      },
      {
        name: 'Back-end',
        fieldStudy: 'Técnoligia da Informação',
      },
    ],
  });

  await prisma.coursesPrograms.createMany({
    data: [
      {
        name: 'React - Aplicações Front-end',
        idCourse: 1,
        idProgram: 1,
      },
      {
        name: 'Reac - Single Page Applications',
        idCourse: 2,
        idProgram: 1,
      },
    ],
  });

  await prisma.nonSchoolDays.createMany({
    data: [
      {
        date: new Date('2023-01-01'),
        type: 'holiday',
        description: 'feriado nacional',
        shift: 'Morning'
      },
      {
        date: new Date('2023-02-20'),
        type: 'holiday',
        description: 'Carnaval',
        shift: 'Morning'
      },
      {
        date: new Date('2023-02-21'),
        type: 'holiday',
        description: 'Carnaval',
        shift: 'Morning'
      },
      {
        date: new Date('2023-02-22'),
        type: 'holiday',
        description: 'Carnaval',
        shift: 'Morning'
      },
      {
        date: new Date('2023-04-07'),
        type: 'holiday',
        description: 'Paixão de Cristo',
        shift: 'Morning'
      },
      {
        date: new Date('2023-04-21'),
        type: 'holiday',
        description: 'Tiradentes',
        shift: 'Morning'
      },
      {
        date: new Date('2023-05-01'),
        type: 'holiday',
        description: 'Dia Mundial do Trabalho',
        shift: 'Morning'
      }
    ]

  });
}



main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });