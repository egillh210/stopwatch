
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
  nextId: 1,

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
const timer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER: {
      const { time } = action.payload;
      const { currentTime } = state
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
        nextId
      } = state;
      const newLap = {
        id: nextId,
        lapTime: currentLapTime,
      };
      return ({
        ...state,
        nextId: nextId + 1,
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

// Helper function to format a millisecond timestamp into a string of (*hours) : minutes : seconds : centiseconds
// * only displayed if time is greater than 60 minutes
const getTimeAsAString = (time) => {
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
const createLapNode = (lapObj, boolFastest = false, boolSlowest = false) => {
  const { id, lapTime } = lapObj;

  const newLapNode = document.createElement('li');
  
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
// time container div, which will first execute this function before traveling down to the 
// child element's event handler (set useCapture to true). This is to avoid
// repeating logic in reducer that relies on the currentTime and currentLapTime.
document.querySelector('.timerContainer').addEventListener('click', e => {
  const time = Date.now();
  state = timer(state, getCurrentTime(time));
},true);


// Event listener that listens for a click event and fires the reducer.
// the new state returned from the reducer is then assigned to the state variable.
document.addEventListener('click', function (event) {
  event.preventDefault();

  if(event.target.matches('.startTimer')) {
    const time = Date.now();
    state = timer(state, startTimer(time))
    renderState(state);
    tInterval = setInterval(getTime, 10);
  }
  else if(event.target.matches('.stopTimer')) {
    const time = Date.now();
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

