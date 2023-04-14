export function mapNonSchoolDaysToDates(nonSchoolDays: any) {
  const convertedDates = nonSchoolDays.map((day: any) => {
    const dateObj = new Date(day.date);
    return {
      type: day.type,
      description: day.description,
      shift: day.shift,
      date: dateObj
    };
  });
  return convertedDates;
}