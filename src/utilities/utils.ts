export const calculateDiff = (day: number, month: number, year: number) => {
    const currentDate = new Date();
  
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();
    const currentYear = currentDate.getFullYear();
  
    let yearDiff = currentYear - year;
    let monthDiff = 12 - month; 
    let dayDiff =  currentDay - day;
  
    if (currentMonth < month || (currentMonth === month && currentDay < day)) {
      yearDiff--;
    }
  
    if (currentDay > day) {
      monthDiff++
    }
  
    if (currentDay < day) {
      const daysInPreviousMonth = new Date(currentYear, month - 1, 0).getDate();
      dayDiff = daysInPreviousMonth - day + currentDay;
    }
  
    return { 
      year: String(yearDiff),
      month: String(monthDiff),
      day: String(dayDiff),
    };
  };
 