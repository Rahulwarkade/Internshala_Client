import { configureStore } from '@reduxjs/toolkit'
import studentReducer from '@/store/Reducers/studentReducer.js'
import internships_jobsReducers from '@/store/Reducers/internships_jobsReducers.js'
export const store = configureStore({
  reducer: {
    studentReducer,
    internships_jobsReducers
  },
})