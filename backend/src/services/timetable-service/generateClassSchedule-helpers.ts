import nonSchoolDaysRepository from "@/repositories/nonSchoolDays-repository";
import { CoursesPrograms } from "@prisma/client";
import dayjs from "dayjs";

export async function datesClassToSchedule(
  coursesPrograms: CoursesProgramsWithProgramAndCourse,
  durationClass: number,
  startClasses: string
) {
  let dayClass = startClasses;
  let numberClasses = Math.ceil(coursesPrograms.course.workload / durationClass);
  const classWeekDays: { [key: number]: boolean } = { 1: true, 2: true, 3: true, 4: true, 5: true };
  const schedule: any = [];

  while (numberClasses > 0) {
    let startClassFilter = new Date(dayClass + 'T00:00:00');
    let finshClassFilter = new Date(dayjs(dayClass).add(1, 'day').format());
    let dayOfWeek: number = dayjs(startClassFilter).day();
    dayClass = finshClassFilter.toISOString().substring(0, 10);
    if (classWeekDays[dayOfWeek]) {
      const nonSchoolDay = await nonSchoolDaysRepository.getNonSchoolDaysByShiftAndDate('Morning', startClassFilter, finshClassFilter);
      if (nonSchoolDay.length === 0) {
        const { startTime, endTime } = createDayClass(startClassFilter);
        schedule.push({
          idProgram: coursesPrograms.idProgram,
          idCourse: coursesPrograms.idCourse,
          startClass: startTime,
          endClass: endTime
        });
        numberClasses--;
      }
    }
  }
  return {schedule, dayClass};
}

function createDayClass(startClass: Date) {
  const date = startClass.toISOString().substring(0, 10);
  const startTime = new Date(date + 'T08:00:00');
  const endTime = new Date(date + 'T12:00:00');
  return { startTime, endTime };
};

export interface CoursesProgramsWithProgramAndCourse extends CoursesPrograms {
  program: { name: string };
  course: { name: string, workload: number };
  class?: { nameCourse: string, qtdClass: number }[];
}

export type Shift = 'Morning' | 'Afternoon' | 'Evening';
