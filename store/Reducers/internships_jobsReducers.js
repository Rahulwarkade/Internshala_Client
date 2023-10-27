import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    internships : null,
    jobs : null,
    errors : [],
}

export const internships_jobsReducers = createSlice({
    name : "internships_jobs",
    initialState,
    reducers : {
        addinternships : (state,action)=>{
            state.internships = action.payload;
        },
        addjobs : (state,action)=>{
            state.jobs = action.payload;
        },
        adderrors : (state,action)=>{
            state.errors.push(action.payload);
        },
        removeerrors : (state,action)=>{
            state.errors = [];
        }
    }
}) 


export const {addinternships,addjobs,adderrors,removeerrors} = internships_jobsReducers.actions;

export default internships_jobsReducers.reducer;