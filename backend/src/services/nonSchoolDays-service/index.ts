import { conflictError, notFoundError } from "@/errors";
import nonSchoolDaysRespository from "@/repositories/nonSchoolDays-repository";
import { NonSchoolDays, Prisma } from "@prisma/client";
import { mapNonSchoolDaysToDates } from "./mapNonSchoolDaysToDates";

async function getNonSchoolDays(): Promise<NonSchoolDays[]> {
  const listNonScoolDays = await nonSchoolDaysRespository.getNonSchoolDays();
  if (listNonScoolDays.length === 0) {
    throw notFoundError();
  };

  return listNonScoolDays;
};

async function getNonSchoolDaysById(idNonSchoolDay: number): Promise<NonSchoolDays> {
  const nonSchoolDay = await nonSchoolDaysRespository.getNonSchoolDaysById(idNonSchoolDay);
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

  const listNonScoolDays = await nonSchoolDaysRespository.getNonSchoolDaysByqueries(type, description, shift, date);
  if (listNonScoolDays.length === 0) {
    throw notFoundError();
  };

  return listNonScoolDays;
};

async function postManyNonSchoolDays(nonSchoolDays: Prisma.NonSchoolDaysCreateInput[]) {
  const convertedNonSchoolDays = mapNonSchoolDaysToDates(nonSchoolDays);
  const { count } = await nonSchoolDaysRespository.postManyNonSchoolDays(convertedNonSchoolDays);
  if (count === 0 || count == undefined) {
    throw conflictError("unregistered dates");
  };
  const listNonScoolDaysCreated = await nonSchoolDaysRespository.getNonSchoolDaysByOrderCreatedAt(count);

  return listNonScoolDaysCreated;

};


const nonSchoolDaysService = {
  getNonSchoolDays,
  getNonSchoolDaysById,
  getNonSchoolDaysByqueries,
  postManyNonSchoolDays
};

export default nonSchoolDaysService;