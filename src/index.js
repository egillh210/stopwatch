import './styles.css';
import { initialState } from './Constants/initialState';
import { startTimer, getCurrentTime, stopTimer, resetTimer, lapTimer } from './Actions/actions';
import { timer } from './Reducer/timerReducer';
import { getTimeAsAString } from './helperFunctions';

// DECLARE STATE AND ASSIGN IT TO THE VALUE OF THE INITIAL STATE
let state = initialState, tInterval;

// Declare constants for buttons and assign them a reference to their
// respective properties of the document object.
const startBtn = document.querySelector('.startTimer');
const stopBtn = document.querySelector('.stopTimer');
const resetBtn = document.querySelector('.resetTimer');
const lapBtn = document.querySelector('.lap');

// Declare and assign re-assignable variables for elements to be rendered.
let currentTimeDisplay = document.querySelector('.timeDisplay');
let currentLapDisplay = document.querySelector('.currentLapContainer');
let lapDisplay = document.querySelector('.lapsContainer');

// TODO: create a helper function that creates lap nodes
// helper function will accept three arguments, one required arg and two optional.
// (lapObj, boolFastest = false, boolSlowest = false)
function showLaps ({ laps, slowestLapTimeId, fastestLapTimeId }) {
  let arrLapsStr = laps.map(obj => {
    const { id, lapTime } = obj;
    let newLapNode = document.createElement('li');
    // const newLap = document.createTextNode(`Lap ${id}`);
    const newLap = document.createElement('h2');
    newLap.className = "lapNo";
    newLap.appendChild(document.createTextNode(`Lap ${id}`));
    const newLapTime = document.createElement('h2');
    newLapTime.className = "lapStopTime"
    newLapTime.appendChild(document.createTextNode(`${getTimeAsAString(lapTime)}`));

    if(id === slowestLapTimeId && laps.length > 1) {
      newLapNode.style.color = 'red';
    }

    if(id === fastestLapTimeId && laps.length > 1) {
      newLapNode.style.color = 'green';
    }

    newLapNode.append(newLap);
    newLapNode.append(newLapTime);
   //const newLapNode = `Lap ${id} : ${getTimeAsAString(lapTime)}`;
    return newLapNode;
  })
  arrLapsStr = arrLapsStr.reverse();
  console.log(arrLapsStr);
  var container = document.querySelector('.lapsContainer');
  container.innerHTML = '';
  arrLapsStr.forEach(t => {
    container.appendChild(t);
  })
}

function renderState ({ laps, currentTime, running }) {

  if(laps.length > 0) showLaps(state)
  else lapDisplay.innerHTML = '';

  if (currentTime === 0) {
    currentLapDisplay.innerHTML = '';
    currentTimeDisplay.innerHTML = '00 : 00 : 00';
  }

  if (running) {
    hide(startBtn);
    hide(resetBtn);
    show(stopBtn);
    show(lapBtn);
  }

  if (!running) {
    show(startBtn);
    show(resetBtn);
    hide(stopBtn);
    hide(lapBtn);
  }

}

function getTime() {
  const timeStamp = Date.now();
  const { startTime, currentTime, previousLapTime, nextId } = state;
  const currTime = startTime ? (timeStamp - startTime) : currentTime;
  const currLapTime = currTime - previousLapTime;
  currentTimeDisplay.innerHTML = getTimeAsAString(currTime);
  // currentLapDisplay.innerHTML = `Lap ${nextId} - ${getTimeAsAString(currLapTime)}`;
  // console.log('here');
  const listLapDisplay = document.createElement('li');

  const showCurLap = document.createElement('h2');
  showCurLap.className = "lapNo";
  showCurLap.appendChild(document.createTextNode(`Lap ${nextId}`));

  const showCurTime = document.createElement('h2');
  showCurTime.className = "lapStopTime";
  showCurTime.appendChild(document.createTextNode(`${getTimeAsAString(currLapTime)}`));

  listLapDisplay.appendChild(showCurLap);
  listLapDisplay.appendChild(showCurTime);

  currentLapDisplay.innerHTML = '';
  currentLapDisplay.appendChild(listLapDisplay);
}

var show = function (elem) {
  elem.style.display = 'inline-flex';
}

var hide = function (elem) {
  elem.style.display = 'none';
}

var toggle = function (elem) {

  if(window.getComputedStyle(elem).display === 'inline-flex') {
    hide(elem);
    return
  }

  show(elem);

}

document.querySelector('.timerContainer').addEventListener('click', e => {
  let time = Date.now();
  state = timer(state, getCurrentTime(time));
  console.log('here', state);
},true);

document.addEventListener('click', function (event) {
  event.preventDefault();

  if(event.target.matches('.startTimer')) {
    let time = Date.now();
    state = timer(state, startTimer(time))
    renderState(state);
    tInterval = setInterval(getTime, 10);
    console.log(state);
  }
  if(event.target.matches('.stopTimer')) {
    let time = Date.now();
    clearInterval(tInterval);
    state = timer(state, stopTimer(time))
    renderState(state);
    console.log(state);
  }
  if(event.target.matches('.resetTimer')) {
    state = timer(state, resetTimer());
    renderState(state);
    console.log(state);
  }
  if(event.target.matches('.lap')) {
    state = timer(state, lapTimer());
    showLaps(state);
    console.log(state);
  }
});

