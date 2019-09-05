
// Helper function to format a millisecond timestamp into a string of (*hours) : minutes : seconds : centiseconds
// * only displayed if time is greater than 60 minutes
export const getTimeAsAString = (time) => {
  let hours = Math.floor(time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  let minutes = Math.floor(time % (1000 * 60 * 60) / (1000 * 60));
  let seconds = Math.floor(time % (1000 * 60) / (1000));
  let milliseconds = Math.floor(time % (1000) / 10);

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  milliseconds = (milliseconds < 10) ? '0' + milliseconds : milliseconds;

  if (!time) return '00 : 00 : 00';

  return `${Number(hours) < 1 ? '' : hours + ':'} ${minutes}:${seconds}.${milliseconds}`;
}