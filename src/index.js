import './styles.css';
import { initialState } from './Constants/initialState';
import { startTimer, getCurrentTime, stopTimer, resetTimer, lapTimer } from './Actions/actions';
import { timer } from './Reducer/timerReducer';
import { getTimeAsAString, createLapNode } from './helperFunctions';

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


function showLaps ({ laps, slowestLapTimeId, fastestLapTimeId }) {
  lapDisplay.innerHTML = '';
  laps = laps.map(lap => {
    const { id } = lap;
    const slowest = id === slowestLapTimeId;
    const fastest = id === fastestLapTimeId;
    return createLapNode(lap, fastest, slowest);
  });
  laps.forEach(lap => {
    lapDisplay.appendChild(lap);
  })
}

function renderState ({ laps, currentTime, running }) {

  if(laps.length > 0) showLaps(state)
  else lapDisplay.innerHTML = '';

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

  if (currentTime === 0) {
    currentLapDisplay.innerHTML = '';
    currentTimeDisplay.innerHTML = '00:00.00';
    hide(resetBtn);
    show(lapBtn);
    lapBtn.classList.toggle("runningLap")
  }

}

function getTime() {
  const timeStamp = Date.now();
  const { startTime, currentTime, previousLapTime, nextId } = state;
  const currTime = startTime ? (timeStamp - startTime) : currentTime;
  const currLapTime = currTime - previousLapTime;

  const currentLap = createLapNode(({ id: nextId, lapTime: currLapTime }))

  currentLapDisplay.innerHTML = '';
  currentLapDisplay.appendChild(currentLap);
  currentTimeDisplay.innerHTML = getTimeAsAString(currTime);
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

