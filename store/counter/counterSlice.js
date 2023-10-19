import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value : 0,
}

export const counterSlice = createSlice(
    {
        name : "Slice",
        initialState,
        reducers : {
            increment : (state,action)=>{

            },
        }
    }
)

export const {increment} = counterSlice.actions
export default counterSlice.reducer