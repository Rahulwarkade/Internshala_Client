import { configureStore } from '@reduxjs/toolkit'
import studentReducer from '@/store/Reducers/studentReducer.js'
import employeReducer from '@/store/Reducers/employeReducer.js'
import internships_jobsReducers from '@/store/Reducers/internships_jobsReducers.js'
export const store = configureStore({
  reducer: {
    employeReducer,
    studentReducer,
    internships_jobsReducers
  },
})