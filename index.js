
// ACTION TYPES
const START_TIMER = 'START_TIMER';
const STOP_TIMER = 'STOP_TIMER';
const RESET_TIMER = 'RESET_TIMER';
const LAP = 'LAP';
const GET_CURRENT_TIME = 'GET_CURRENT_TIME';

// ACTIONS
const startTimer = (time) => ({
  type: START_TIMER,
  payload: {
    time
  }
})

const getCurrentTime = (time) => ({
  type: GET_CURRENT_TIME,
  payload: {
    time
  }
})

const stopTimer = (time) => ({
  type: STOP_TIMER,
  payload: {
    time
  }
})

const resetTimer = () => ({
  type: RESET_TIMER,
})

const lapTimer = () => ({
  type: LAP,
})

// INITIAL STATE
let initialState = {
  startTime: 0,
  currentTime: 0,

  currentLapTime: 0,
  previousLapTime: 0,

  slowestLapTimeId: null,
  fastestLapTimeId: null,

  slowestLapTime: null,
  fastestLapTime: null,

  laps: [],
}

// REDUCER
let nextId = 1;
const timer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER: {
      let { time } = action.payload;
      let { currentTime } = state
      return ({
        ...state,
        startTime: time - currentTime,
      })
    }
    case STOP_TIMER: {
      return ({
        ...state,
        startTime: 0,
      })
    }
    case RESET_TIMER: {
      return ({
        ...state,
        ...initialState,
      })
    }
    case GET_CURRENT_TIME: {
      const { time } = action.payload;
      const { startTime, currentTime: previousCurrentTime, previousLapTime } = state;
      const currentTime = startTime > 0 ? time - startTime : previousCurrentTime;

      return ({
        ...state,
        currentTime,
        currentLapTime: currentTime - previousLapTime,
      })
    }
    case LAP: {
      const { currentLapTime: tes, laps, previousLapTime: tas } = state;
      let newLap = {
        id: nextId,
        lapTime: tes,
      };
      nextId++;
      return ({
        ...state,
        previousLapTime: tes + tas,
        laps: [...laps].concat(newLap),
      })
    }
    default:
      return state;
  }
}

function showTime ({ currentTime: time = 0 }) {
  timeDisplay.innerHTML = getTimeAsAString(time);
}

function getTimeAsAString (time) {
  let hours = Math.floor(time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  let minutes = Math.floor(time % (1000 * 60 * 60) / (1000 * 60));
  let seconds = Math.floor(time % (1000 * 60) / (1000));
  let milliseconds = Math.floor(time % (1000) / 10);

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  milliseconds = (milliseconds < 10) ? '0' + milliseconds : milliseconds;

  if (!time) return '00 : 00 : 00';

  return `${Number(hours) < 1 ? '' : hours + ' :'} ${minutes} : ${seconds} : ${milliseconds}`;
}

function showLaps ({ laps }) {
  let arrLapsStr = laps.map(obj => {
    const { id, lapTime } = obj;
    let newLapNode = document.createElement('li');
    const newLap = document.createTextNode(`Lap ${id} ${getTimeAsAString(lapTime)}`);
    newLapNode.append(newLap);
    return newLapNode;
  })
  console.log(arrLapsStr);
  arrLapsStr = arrLapsStr.reverse();
  var container = document.querySelector('.lapsContainer');
  container.innerHTML = '';
  arrLapsStr.forEach(t => {
    container.appendChild(t);
  })
}

function renderState (state) {
  const { laps, currentTime } = state;

  if(laps.length > 1) showLaps(state)
  else lapDisplay.innerHTML = '';

  if (currentTime === 0) {
    currentLapDisplay.innerHTML = '';
    timeDisplay.innerHTML = '00 : 00 : 00';
  }
}

function getTime() {
  const timeStamp = Date.now();
  const { startTime, currentTime, previousLapTime, laps } = state;
  const currTime = startTime ? (timeStamp - startTime) : currentTime;
  const currLapTime = currTime - previousLapTime;
  timeDisplay.innerHTML = getTimeAsAString(currTime);
  currentLapDisplay.innerHTML = `Lap ${nextId} - ${getTimeAsAString(currLapTime)}`;
  console.log('here');
}

var btn = document.querySelectorAll('button');
var hours, minutes, seconds, time, state, tInterval;
var timeDisplay = document.querySelector('.timeDisplay');
var lapDisplay = document.querySelector('.lapsContainer');
var currentLapDisplay = document.querySelector('.currentLapContainer');

document.querySelector('.timerContainer').addEventListener('click', e => {
  let time = Date.now();
  state = timer(state, getCurrentTime(time));
  console.log('here', state);
}, true);

document.addEventListener('click', function (event) {
  event.preventDefault();

  if(event.target.matches('.startTimer')) {
    let time = Date.now();
    state = timer(state, startTimer(time))
    tInterval = setInterval(getTime, 10);
    console.log(state);
  }
  if(event.target.matches('.stopTimer')) {
    let time = Date.now();
    state = timer(state, stopTimer(time))
    clearInterval(tInterval);
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

