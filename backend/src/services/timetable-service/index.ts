import { Prisma } from "@prisma/client";
import { timetableStringDatesToDates } from "./mapNonSchoolDaysToDates";
import timeTable from "@/repositories/timatable-repository";
import { conflictError } from "@/errors";

async function postManyTimetable(metadates: Prisma.TimetableCreateManyCourseInput[]) {
  const convertedMetadates = timetableStringDatesToDates(metadates);

  const { count } = await timeTable.postManyTimetable(convertedMetadates);
  if(!count || count === 0){
    throw conflictError('it was not possible to create the sent dates');
  }

  return count;
};

const timeTableService = {
  postManyTimetable
};

export default timeTableService;