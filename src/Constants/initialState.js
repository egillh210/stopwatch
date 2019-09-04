// INITIAL STATE
export const initialState = {
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