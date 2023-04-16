export function timetableStringDatesToDates(metadates: any) {
  const convertedDates = metadates.map((day: any) => {
    const startClass = new Date(day.startClass);
    const endClass = new Date(day.endClass);
    return {
      idProgram: day.idProgram,
      idCourse: day.idCourse,
      startClass: startClass,
      endClass: endClass
    };
  });
  return convertedDates;
}