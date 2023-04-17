import { prisma } from "@/config";
import { conflictError } from "@/errors";
import { Prisma } from "@prisma/client";

async function postManyTimetable(metadates : Prisma.TimetableCreateManyInput[]) {
  try {
    return await prisma.timetable.createMany({
      data : metadates
    });
  } catch (error) {
    if (error.code === 'P2002')
      throw conflictError('It was not possible to perform this registration, one or more records are already registered.');
  };
};

const timeTableRespository = {
  postManyTimetable
};

export default timeTableRespository;