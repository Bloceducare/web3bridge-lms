export const formatDate = (
    date?: string,
    formatAsMonthYear: boolean = false
  ) => {
    const options: Intl.DateTimeFormatOptions = formatAsMonthYear
      ? { month: "long", year: "numeric" }
      : {};
    const parsedDate = date ? new Date(date) : new Date();
    if (isNaN(parsedDate.getTime())) {
      return "";
    }
    return parsedDate.toLocaleDateString("default", options);
  };
  
  export const formatDateToLongFormat = (start: string, end?: string) => {
    const parsedStartDate = start ? new Date(start) : new Date();
    const parsedEndDate = end ? new Date(end) : null;
  
    if (
      isNaN(parsedStartDate.getTime()) ||
      (parsedEndDate && isNaN(parsedEndDate.getTime()))
    ) {
      return "";
    }
  
    const startDay = parsedStartDate.getDate();
    const startMonth = parsedStartDate.toLocaleString("default", {
      month: "long",
    });
    const startYear = parsedStartDate.getFullYear();
  
    if (parsedEndDate) {
      const endDay = parsedEndDate.getDate();
      const endMonth = parsedEndDate.toLocaleString("default", { month: "long" });
      const endYear = parsedEndDate.getFullYear();
  
      if (
        parsedStartDate === parsedEndDate ||
        parsedStartDate.getDay() === parsedEndDate.getDay()
      ) {
        return `${startDay}${getOrdinalSuffix(
          startDay
        )} ${startMonth}, ${startYear}`;
      } else if (startMonth === endMonth && startYear === endYear) {
        return `${startDay} - ${endDay}${getOrdinalSuffix(
          endDay
        )} ${startMonth}, ${startYear}`;
      } else {
        return `${startDay}${getOrdinalSuffix(
          startDay
        )} ${startMonth}, ${startYear} - ${endDay}${getOrdinalSuffix(
          endDay
        )} ${endMonth}, ${endYear}`;
      }
    } else {
      return `${startDay}${getOrdinalSuffix(
        startDay
      )} ${startMonth} ${startYear}`;
    }
  };
  
  const getOrdinalSuffix = (day: number) => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };
  export const formatDateMMDDYYYY = (dateString: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "";
    }
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };
  
  export const formatMonthDay = (dateString: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "";
    }
    const month = date.toLocaleString("default", { month: "long" });
    const day = String(date.getDate()).padStart(2, "0");
    return `${month} ${day}`;
  };
  
  export const formatName = (name: { first?: string; last?: string }) => {
    return `${name.first ?? ""} ${name.last ?? ""}`;
  };
  
  export const pluralize = (count: number, singular: string, plural: string) => {
    return count === 1 ? singular : plural;
  };
  