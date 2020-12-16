const dateInPast = (firstDate, secondDate) => {
    firstDate = new Date(firstDate)
    secondDate = new Date(secondDate)
    if (firstDate.setHours(0, 0, 0, 0) <= secondDate.setHours(0, 0, 0, 0)) {
      return true;
    }
  
    return false;
  };
  
export default dateInPast; 