import axios from "@/utils/axios.js";

import {
    addstudent,
    removestudent,
    iserror,
    removeerror,
} from "../Reducers/studentReducer";


export const asynccurrentstudent = ()=>async(dispatch,getState)=>{

    try{
        const {data} = await axios.post("/student");
        dispatch(addstudent(data.student));
    }catch(error){
        dispatch(iserror(error.response.data.message))
    }

}
export const asyncsignupstudent = (student)=>async(dispatch,getState)=>{

    try{
        const {data} = await axios.post("/student/signup",student);
        asynccurrentstudent();
    }catch(error){
        dispatch(iserror(error.response.data.message))
        console.log(error)
    }
}

export const asyncsigninstudent = (student)=>async(dispatch,getState)=>{

    try{
        const {data} = await axios.post("/student/signin",student);
        dispatch(addstudent(data.student));
    }catch(error){
        dispatch(iserror(error.response.data.message))
        console.log(error)
    }
}

export const asyncsignoutstudent = (student)=>async(dispatch,getState)=>{

    try{
        const {data} = await axios.get("/student/signout");
        dispatch(removestudent());
    }catch(error){
        dispatch(iserror(error.response.data.message))
        console.log(error)
    }
}