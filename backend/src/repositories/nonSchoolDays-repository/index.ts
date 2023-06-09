import { prisma } from "@/config";
import { NonSchoolDays, Prisma, Shift } from "@prisma/client";
import { date, func } from "joi";

function getNonSchoolDays(): Promise<NonSchoolDays[]> {
  return prisma.nonSchoolDays.findMany();
};

function getNonSchoolDaysById(idNonSchoolDay: number): Promise<NonSchoolDays> {
  return prisma.nonSchoolDays.findUnique({
    where: { id: idNonSchoolDay }
  });
};

function getNonSchoolDaysByqueries(
  type?: Prisma.EnumTypeNonSchoolDaysFilter,
  description: string = '',
  shift?: Prisma.EnumShiftFilter,
  date?: Date,

): Promise<NonSchoolDays[]> {
  return prisma.nonSchoolDays.findMany({
    where: {
      type: type !== undefined ? type : undefined,
      description: description !== '' ? description : undefined,
      shift: shift !== undefined ? shift : undefined,
      date: date !== undefined ? date : undefined
    }
  });
};
async function getNonSchoolDaysByShiftAndDate(shift: Shift, dateI: Date, dateF: Date) {
  const nonSchoolDays = await prisma.nonSchoolDays.findMany({
    where: {
      shift,
      date: {
        gte: dateI,
        lt: dateF
      }
    }
  });
  return nonSchoolDays;
}
function getNonSchoolDaysByOrderCreatedAt(count: number): Promise<NonSchoolDays[]> {
  return prisma.nonSchoolDays.findMany({
    orderBy: { createdAt: 'desc' },
    take: count
  });
}

async function postManyNonSchoolDays(nonSchoolDays: any) {
  try {
    return await prisma.nonSchoolDays.createMany({
      data: nonSchoolDays
    });
  } catch (error) {
    return error;
  };
};

function putNonSchoolDaysById(idNonShcoolDays: number, nonSchoolDays: Prisma.NonSchoolDaysUpdateInput) {
  return prisma.nonSchoolDays.update({
    where: { id: idNonShcoolDays },
    data: { ...nonSchoolDays }
  });
};

function deleteManyNonSchoolDaysById(idsNonShcoolDays: number[]) {
  return prisma.nonSchoolDays.deleteMany({
    where: {
      id: {
        in: idsNonShcoolDays
      }
    },
  });
};

const nonSchoolDaysRepository = {
  getNonSchoolDays,
  getNonSchoolDaysById,
  getNonSchoolDaysByqueries,
  getNonSchoolDaysByShiftAndDate,
  getNonSchoolDaysByOrderCreatedAt,
  postManyNonSchoolDays,
  putNonSchoolDaysById,
  deleteManyNonSchoolDaysById
};

export default nonSchoolDaysRepository;

