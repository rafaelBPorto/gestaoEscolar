import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
dotenv.config();
console.log(process.env.PORT);

const prisma = new PrismaClient();

async function main() {

  await prisma.timetable.deleteMany({});
  await prisma.nonSchoolDays.deleteMany({});
  await prisma.coursesPrograms.deleteMany({});
  await prisma.programs.deleteMany({});
  await prisma.courses.deleteMany({});

  // Inserir registros na tabela Courses
  await prisma.courses.createMany({
    data: [
      {
        name: 'Matemática',
        courseCode: 'MAT01',
        workload: 60,
        fieldStudy: 'Ciências Exatas',
      },
      {
        name: 'Português',
        courseCode: 'POR01',
        workload: 45,
        fieldStudy: 'Linguística',
      },
      // Adicione outros registros aqui, se necessário
    ],
  });

  // Inserir registros na tabela Programs
  await prisma.programs.createMany({
    data: [
      {
        name: 'Engenharia de Computação',
        fieldStudy: 'Ciências Exatas',
      },
      {
        name: 'Letras',
        fieldStudy: 'Linguística',
      },
      // Adicione outros registros aqui, se necessário
    ],
  });

  // Inserir registros na tabela CoursesPrograms
  await prisma.coursesPrograms.createMany({
    data: [
      {
        name: 'Matemática - Engenharia de Computação',
        idCourse: 1,
        idProgram: 1,
      },
      {
        name: 'Português - Letras',
        idCourse: 2,
        idProgram: 2,
      },
      // Adicione outros registros aqui, se necessário
    ],
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