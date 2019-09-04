import { initialState } from '../Constants/initialState';
import * as actionTypes from '../Constants/actionTypes';

// REDUCER
export const timer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_TIMER: {
      let { time } = action.payload;
      let { currentTime } = state
      return ({
        ...state,
        startTime: time - currentTime,
        running: true,
      })
    }
    case actionTypes.STOP_TIMER: {
      return ({
        ...state,
        startTime: 0,
        running: false,
      })
    }
    case actionTypes.RESET_TIMER: {
      return ({
        ...state,
        ...initialState,
      })
    }
    case actionTypes.GET_CURRENT_TIME: {
      const { time } = action.payload;
      const { startTime, currentTime: previousCurrentTime, previousLapTime } = state;
      const currentTime = startTime > 0 ? time - startTime : previousCurrentTime;

      return ({
        ...state,
        currentTime,
        currentLapTime: currentTime - previousLapTime,
      })
    }
    case actionTypes.LAP: {
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
      let newLap = {
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