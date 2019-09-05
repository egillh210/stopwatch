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
//let lapDisplay = document.querySelector('.lapsContainer');
let lapDisplay = document.querySelector('#lapsCont')


// Define show and hide functions to toggle display property of buttons
const show = function (elem) {
  elem.style.display = 'inline-flex';
}
const hide = function (elem) {
  elem.style.display = 'none';
}

// Use helper function to create lap nodes from the array of lap objects
// and use the return values to manipulate the DOM
function showLaps ({ laps, slowestLapTimeId, fastestLapTimeId }) {
  lapDisplay.innerHTML = '';
  laps = laps.map(lap => {
    const { id } = lap;
    return createLapNode(lap, fastestLapTimeId === id, slowestLapTimeId === id);
  }).reverse();
  laps.forEach(lap => {
    lapDisplay.appendChild(lap);
  })
}

// Calculate current time and current lap time by comparing Date.now() to
// the startTime timestamp in state. Then update the DOM with the calculated 
// current times. This function only "consumes" the state and does not alter 
// it at all. Function is called recursively by the setInterval function 
// assigned to the tInterval variable. 
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

// Rendering funtion that handles the conditional rendering logic such as
// showing/hiding buttons, resetting DOM elements to their empty/initial value
// state. The function is called after each click event, after the reducer has 
// fired and the new state has been assigned.
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

// This event listener listens for any click event that fires within the 
// time container div. Any click event that fires in a child element of the
// container will first execute this function before traveling down to the 
// child element's event handler (set useCapture to true). This is to avoid
// repeating logic in reducer that relies on the currentTime and currentLapTime.
document.querySelector('.timerContainer').addEventListener('click', e => {
  let time = Date.now();
  state = timer(state, getCurrentTime(time));
  console.log('here', state);
},true);


// Event listener that listens for a click event and fires the reducer.
// the new state returned from the reducer is then assigned to the state variable.
document.addEventListener('click', function (event) {
  event.preventDefault();

  if(event.target.matches('.startTimer')) {
    let time = Date.now();
    state = timer(state, startTimer(time))
    renderState(state);
    tInterval = setInterval(getTime, 10);
  }
  else if(event.target.matches('.stopTimer')) {
    let time = Date.now();
    clearInterval(tInterval);
    state = timer(state, stopTimer(time))
    renderState(state);
  }
  else if(event.target.matches('.resetTimer')) {
    state = timer(state, resetTimer());
    renderState(state);
  }
  else if(event.target.matches('.lap')) {
    state = timer(state, lapTimer());
    renderState(state)
  }
});

