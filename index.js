// ACTION TYPES
const START_TIMER = 'START_TIMER';
const STOP_TIMER = 'STOP_TIMER';
const RESET_TIMER = 'RESET_TIMER';
const LAP = 'LAP';
const GET_CURRENT_TIME = 'GET_CURRENT_TIME';

// INITIAL STATE
const initialState = {
  startTime: 0,
  currentTime: 0,

  running: false,

  currentLapTime: 0,
  previousLapTime: 0,

  slowestLapTimeId: null,
  fastestLapTimeId: null,

  slowestLapTime: 0,
  fastestLapTime: Infinity,

  laps: [],
}

// DECLARE STATE AND ASSIGN IT TO THE VALUE OF THE INITIAL STATE
let state = initialState, tInterval;

// Declare constants for buttons and assign them a reference to their
// respective properties of the document object.
const startBtn = document.querySelector('.startTimer');
const stopBtn = document.querySelector('.stopTimer');
const resetBtn = document.querySelector('.resetTimer');
const lapBtn = document.querySelector('.lap');

// Declare and assign re-assignable variables for elements to be rendered.
let timeDisplay = document.querySelector('.timeDisplay');
let lapDisplay = document.querySelector('.lapsContainer');
let currentLapDisplay = document.querySelector('.currentLapContainer');

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


// REDUCER
// 
let nextId = 1;
const timer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER: {
      let { time } = action.payload;
      let { currentTime } = state
      return ({
        ...state,
        startTime: time - currentTime,
        running: true,
      })
    }
    case STOP_TIMER: {
      return ({
        ...state,
        startTime: 0,
        running: false,
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
      const {
        currentLapTime, 
        laps, 
        previousLapTime, 
        slowestLapTime, 
        fastestLapTime,
        slowestLapTimeId,
        fastestLapTimeId,
      } = state;
      let newLap = {
        id: nextId,
        lapTime: currentLapTime,
      };
      nextId++;
      return ({
        ...state,
        previousLapTime: currentLapTime + previousLapTime,
        laps: [...laps].concat(newLap),
        slowestLapTimeId: currentLapTime > slowestLapTime ? newLap.id : slowestLapTimeId,
        fastestLapTimeId: currentLapTime < fastestLapTime ? newLap.id : fastestLapTimeId,
        fastestLapTime: currentLapTime < fastestLapTime ? currentLapTime : fastestLapTime,
        slowestLapTime: currentLapTime > slowestLapTime ? currentLapTime : slowestLapTime,
      })
    }
    default:
      return state;
  }
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

function renderState (state = state) {
  const { laps, currentTime, running } = state;

  if(laps.length > 0) showLaps(state)
  else lapDisplay.innerHTML = '';

  if (currentTime === 0) {
    currentLapDisplay.innerHTML = '';
    timeDisplay.innerHTML = '00 : 00 : 00';
    nextId = 1;
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
  const { startTime, currentTime, previousLapTime, laps } = state;
  const currTime = startTime ? (timeStamp - startTime) : currentTime;
  const currLapTime = currTime - previousLapTime;
  timeDisplay.innerHTML = getTimeAsAString(currTime);
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

