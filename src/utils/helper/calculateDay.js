const calculateDay = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  // Calculate the difference in milliseconds
  const differenceInMilliseconds = endDate - startDate;

  // Calculate the difference in days
  const days = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
  return days === 0 ? 1 : days;
};

export default calculateDay;
