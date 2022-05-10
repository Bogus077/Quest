export const getTimeLeft = (date: string) => {
  const timeLeft = new Date(date).toLocaleString();
  return timeLeft;
};
