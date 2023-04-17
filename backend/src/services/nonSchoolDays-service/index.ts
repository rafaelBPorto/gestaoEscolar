import { conflictError, notFoundError } from "@/errors";
import nonSchoolDaysRepository from "@/repositories/nonSchoolDays-repository";
import { NonSchoolDays, Prisma } from "@prisma/client";
import { mapNonSchoolDaysToDates } from "./mapNonSchoolDaysToDates";

async function getNonSchoolDays(): Promise<NonSchoolDays[]> {
  const listNonScoolDays = await nonSchoolDaysRepository.getNonSchoolDays();
  if (listNonScoolDays.length === 0) {
    throw notFoundError();
  };

  return listNonScoolDays;
};

async function getNonSchoolDaysById(idNonSchoolDay: number): Promise<NonSchoolDays> {
  const nonSchoolDay = await nonSchoolDaysRepository.getNonSchoolDaysById(idNonSchoolDay);
  if (!nonSchoolDay) {
    throw notFoundError();
  }

  return nonSchoolDay;
}

async function getNonSchoolDaysByqueries(
  type: Prisma.EnumTypeNonSchoolDaysFilter,
  description: string = '',
  shift?: Prisma.EnumShiftFilter,
  date?: Date
): Promise<NonSchoolDays[]> {

  const listNonScoolDays = await nonSchoolDaysRepository.getNonSchoolDaysByqueries(type, description, shift, date);
  if (listNonScoolDays.length === 0) {
    throw notFoundError();
  };

  return listNonScoolDays;
};

async function postManyNonSchoolDays(nonSchoolDays: Prisma.NonSchoolDaysCreateInput[]) {
  const convertedNonSchoolDays = mapNonSchoolDaysToDates(nonSchoolDays);
  const { count } = await nonSchoolDaysRepository.postManyNonSchoolDays(convertedNonSchoolDays);
  if (count === 0 || count == undefined) {
    throw conflictError("unregistered dates");
  };
  const listNonScoolDaysCreated = await nonSchoolDaysRepository.getNonSchoolDaysByOrderCreatedAt(count);

  return listNonScoolDaysCreated;

};

async function deleteManyNonSchoolDaysById(idsNonSchoolDays: number[]) {
  const { count } = await nonSchoolDaysRepository.deleteManyNonSchoolDaysById(idsNonSchoolDays);
  if (count === 0 || count == undefined) {
    throw notFoundError();
  };

  return count;
}


const nonSchoolDaysService = {
  getNonSchoolDays,
  getNonSchoolDaysById,
  getNonSchoolDaysByqueries,
  postManyNonSchoolDays,
  deleteManyNonSchoolDaysById
};

export default nonSchoolDaysService;