
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

  return `${Number(hours) < 1 ? '' : hours + ':'} ${minutes}:${seconds}.${milliseconds}`;
}

// Helper function to create lapNodes and assigning them a color based on 
// the optional 2nd and 3rd arguments.
export const createLapNode = (lapObj, boolFastest = false, boolSlowest = false) => {
  const { id, lapTime } = lapObj;

  let newLapNode = document.createElement('li');
  
  const newLap = document.createElement('h2');
  newLap.className = "lapNo";
  newLap.appendChild(document.createTextNode(`Lap ${id}`));

  const newLapTime = document.createElement('h2');
  newLapTime.className = "lapStopTime";
  newLapTime.appendChild(document.createTextNode(`${getTimeAsAString(lapTime)}`));

  if ((boolFastest || boolSlowest) && boolFastest !== boolSlowest) {
    newLapNode.style.color = boolFastest ? 'green' : 'red';
  };

  newLapNode.append(newLap);
  newLapNode.append(newLapTime);

  return newLapNode;
}