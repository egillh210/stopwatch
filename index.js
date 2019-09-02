
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

const lapTimer = (time) => ({
  type: LAP,
  payload: {
    time
  }
})

// INITIAL STATE
let initialState = {
  startTime: null,
  currentTime: 0,

  currentLapTime: 0,
  previousLapTime: null,

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
      return ({
        ...state,
        startTime: time,
      })
    }
    case STOP_TIMER: {
      return ({
        ...state,
        startTime: null,
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
      const currentTime = startTime ? time - startTime + previousCurrentTime : previousCurrentTime;
      const currentLapTime = currentTime - previousLapTime;
      return ({
        ...state,
        currentTime,
        currentLapTime,
      })
    }
    default:
      return state;
  }
}

function showTime ({ currentTime: time } = 0) {
  let hours = Math.floor(time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  let minutes = Math.floor(time % (1000 * 60 * 60) / (1000 * 60));
  let seconds = Math.floor(time % (1000 * 60) / (1000));
  let milliseconds = Math.floor(time % (1000) / 10);

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  milliseconds = (milliseconds < 10) ? '0' + milliseconds : milliseconds;

  timeDisplay.innerHTML = `${hours} : ${minutes} : ${seconds} : ${milliseconds}`;
}

var btn = document.querySelectorAll('button');
var hours, minutes, seconds, time, state, tInterval;
var timeDisplay = document.querySelector('.timeDisplay');

document.querySelector('.timerContainer').addEventListener('click', e => {
  let time = Date.now();
  state = timer(state, getCurrentTime(time));
  console.log('here', state);
},true);

document.addEventListener('click', function (event) {
  event.preventDefault();

  if(event.target.matches('.timerContainer')) {
    //console.log('here!');
    // let time = Date.now();
    // state = timer(state, getCurrentTime(time));
  }

  if(event.target.matches('.startTimer')) {
    let time = Date.now();
    state = timer(state, startTimer(time))
    console.log(state);
  }
  if(event.target.matches('.stopTimer')) {
    let time = Date.now();
    state = timer(state, stopTimer(time))
    console.log(state);
  }
  if(event.target.matches('.resetTimer')) {
    let time = Date.now();
    state = timer(state, resetTimer());
    console.log(state);
  }
});