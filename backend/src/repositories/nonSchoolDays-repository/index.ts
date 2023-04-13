import { prisma } from "@/config";
import { NonSchoolDays, Prisma } from "@prisma/client";

function getNonSchoolDays(): Promise<NonSchoolDays[]> {
  return prisma.nonSchoolDays.findMany();
};

function getNonSchoolDaysById(idNonSchoolDay: number): Promise<NonSchoolDays> {
  return prisma.nonSchoolDays.findUnique({
    where: { id: idNonSchoolDay }
  });
};

function getNonSchoolDaysByqueries(
  type: string = '',
  description?: Prisma.EnumTypeNonSchoolDaysFilter,
  shift?: Prisma.EnumShiftFilter,
  date?: Date,

): Promise<NonSchoolDays[]> {
  return prisma.nonSchoolDays.findMany({
    where: {
      type: type !== '' ? type : undefined,
      description: description !== undefined ? description : undefined,
      shift: shift !== undefined ? shift : undefined,
      date: date !== undefined ? date : undefined
    }
  });
};

function postManyNonSchoolDays(nonSchoolDays: Prisma.NonSchoolDaysCreateInput[]) {
  return prisma.nonSchoolDays.createMany({
    data: { ...nonSchoolDays }
  });
};

function putNonSchoolDaysById(idNonShcoolDays: number, nonSchoolDays: Prisma.NonSchoolDaysUpdateInput) {
  return prisma.nonSchoolDays.update({
    where: { id: idNonShcoolDays },
    data: { ...nonSchoolDays }
  });
};

function deleteNonSchoolDaysById(idNonShcoolDays: number) {
  return prisma.nonSchoolDays.delete({
    where: { id: idNonShcoolDays },
  });
};

const nonSchoolDaysRespository = {
  getNonSchoolDays,
  getNonSchoolDaysById,
  getNonSchoolDaysByqueries,
  postManyNonSchoolDays,
  putNonSchoolDaysById,
  deleteNonSchoolDaysById
};

export default nonSchoolDaysRespository;