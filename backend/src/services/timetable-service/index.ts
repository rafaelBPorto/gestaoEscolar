import { conflictError } from "@/errors";
import coursesProgramsRepository from "@/repositories/coursesPrograms-repository";
import { default as timeTable, default as timeTableRespository } from "@/repositories/timatable-repository";
import { Prisma } from "@prisma/client";
import { CoursesProgramsWithProgramAndCourse, datesClassToSchedule } from "./generateClassSchedule-helpers";
import { timetableStringDatesToDates } from "./mapNonSchoolDaysToDates";

async function postManyTimetable(metadates: Prisma.TimetableCreateManyCourseInput[]) {
  const convertedMetadates = timetableStringDatesToDates(metadates);

  const { count } = await timeTable.postManyTimetable(convertedMetadates);
  if (!count || count === 0) {
    throw conflictError('it was not possible to create the sent dates');
  }

  return count;
};
async function generateClassSchedule(idProgram: number, durationClass: number, firstDay: string) {
  const coursesPrograms: CoursesProgramsWithProgramAndCourse[] = await coursesProgramsRepository.getCoursesProgramsByIdProgram(idProgram);
  let startClasses = firstDay;
  const scheduleProgram: any = [];
  for (const cp of coursesPrograms) {
    const { schedule, dayClass } = await datesClassToSchedule(cp, durationClass, startClasses);
    startClasses = dayClass;
    scheduleProgram.push(schedule);
  }

  for (const sp of scheduleProgram) {
    await timeTableRespository.postManyTimetable(sp);
  }
  return scheduleProgram;
}

const timeTableService = {
  postManyTimetable,
  generateClassSchedule
};

export default timeTableService;

