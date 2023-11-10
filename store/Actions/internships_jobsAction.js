import axios from "@/utils/axios.js";
import { toast } from 'react-toastify';

import {
    addinternships,
    addjobs,
    adderrors,
    removeerror,
} from "../Reducers/internships_jobsReducers.js";



// -    -   -   -   -   - ALL INTERNSHIPS - -   -   -   -   -   -   -   -   -  

export const allinternships = ()=> async(dispatch,getState)=>{
    try{
        const {data} = await axios.post("/allinternship/");
        dispatch(addinternships(data.internships));
    }catch(error){
        // dispatch(adderrors(error.response.data.message));
        // toast(error.response.data.message);
        console.log("Internships aren't available");
    }
}

// -    -   -   -   -   - ALL JOBS - -   -   -   -   -   -   -   -   -  

export const alljobs = ()=> async(dispatch,getState)=>{
    try{
        const {data} = await axios.post("/alljobs/");
        dispatch(addjobs(data.jobs));
    }catch(error){
        // dispatch(adderrors(error.response.data.message));
        // toast(error.response.data.message);
        console.log("Jobs aren't available");
    }
}