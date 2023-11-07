import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    student : null,
    jobs : null,
    internships : null,
    internship : null,
    job : null,
    errors : [],
    isAuthenticated : false,
}

export const studentReducer = createSlice(
    {
        name : "student",
        initialState,
        reducers : {
            addstudent : (state,action)=>{
                state.student = action.payload;
                state.isAuthenticated = true;
                
            },
            removestudent : (state,action)=>{
                state.student = null;
                state.isAuthenticated = false;
            },
            addinternship : (state,action)=>{
                state.internship = action.payload;
            },
            addjob : (state,action)=>{
                state.job = action.payload;
            },
            iserror : (state,action)=>{
                state.errors.push(action.payload);
            },
            removeerror : (state,action)=>{
                state.errors = [];
            },
        }
    }
)

export const {
    addstudent,
    addinternship,
    addjob,
    removestudent,
    iserror,
    removeerror
    } = studentReducer.actions;
export default studentReducer.reducer;