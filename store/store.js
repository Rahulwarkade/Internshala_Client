import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/store/counter/counterSlice.js'
export const store = configureStore({
  reducer: {counter : counterReducer},
})