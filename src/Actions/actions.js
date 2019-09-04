import * as actionTypes from '../Constants/actionTypes';

// ACTIONS
export const startTimer = (time) => ({
  type: actionTypes.START_TIMER,
  payload: {
    time
  }
})


export const getCurrentTime = (time) => ({
  type: actionTypes.GET_CURRENT_TIME,
  payload: {
    time
  }
})

export const stopTimer = (time) => ({
  type: actionTypes.STOP_TIMER,
  payload: {
    time
  }
})

export const resetTimer = () => ({
  type: actionTypes.RESET_TIMER,
})

export const lapTimer = () => ({
  type: actionTypes.LAP,
})

