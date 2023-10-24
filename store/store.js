import { configureStore } from '@reduxjs/toolkit'
import studentReducer from '@/store/Reducers/studentReducer.js'
export const store = configureStore({
  reducer: {studentReducer},
})