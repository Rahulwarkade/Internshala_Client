import axios from "@/utils/axios.js";
import { toast } from 'react-toastify';

import {
    addstudent,
    addinternship,
    addjob,
    removestudent,
    iserror,
    addmatchedjob,
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
        dispatch(addstudent(data.student));
    }catch(error){
        dispatch(iserror(error.response.data.message))
        toast(error.response.data.message);
    }
}
export const asyncupdatestudent = (student)=>async(dispatch,getState)=>{

    try{
        const {_id} = getState().studentReducer.student;
        const {data }= await axios.post("/student/update/"+_id,student);
        dispatch(addstudent(data.student));
    }catch(error){
        dispatch(iserror(error.response.data.message))
        toast(error.response.data.message);
    }
}
export const asyncstudentresetpassword = (password)=>async(dispatch,getState)=>{

    try{
        const {_id} = getState().studentReducer.student;
        const {data }= await axios.post("/student/reset-password/"+_id,password);
        dispatch(addstudent(data.student));
    }catch(error){
        dispatch(iserror(error.response.data.message))
        toast(error.response.data.message);
    }
}
export const asyncstudentsendmeail = (email)=>async(dispatch,getState)=>{

    try{
        const  {data} =  await axios.post("/student/send-mail",email);
        dispatch(addstudent(data.student));
    }catch(error){
        dispatch(iserror(error.response.data.message))
        toast(error.response.data.message);
    }
}
export const asyncstudentforgetpassword = (pom)=>async(dispatch,getState)=>{

    try{
        const {data }= await axios.post("/student/forget-link/",pom);
    }catch(error){
        dispatch(iserror(error.response.data.message))
        toast(error.response.data.message);
    }
}
export const asyncstudentavatar = (avatar)=>async(dispatch,getState)=>{

    try{
        const {_id} = getState().studentReducer.student;
        const {data}= await axios.post("/student/avatar/"+_id,avatar);
        dispatch(addstudent(data.student));
    }catch(error){
        dispatch(iserror(error.response.data.message))
        toast(error.response.data.message);
    }
}

export const asyncsigninstudent = (student)=>async(dispatch,getState)=>{

    try{
        const {data} = await axios.post("/student/signin",student);
        dispatch(addstudent(data.student));
    }catch(error){
        dispatch(iserror(error.response.data.message))
        toast(error.response.data.message);
    }
}

export const asyncsignoutstudent = (student)=>async(dispatch,getState)=>{

    try{
        const {data} = await axios.get("/student/signout");
        dispatch(removestudent());
    }catch(error){
        dispatch(iserror(error.response.data.message))
    }
}

export const asyncstudentgetinternship = (id)=>async(dispatch,getState)=>{
    try{
        const {data} = await axios.post("/student/read/internship/"+id);
        dispatch(addinternship(data.internship));
    }catch(error){
        dispatch(iserror(error.response.data.message));
    }
}
export const asyncstudentapplyinternship = (id)=>async(dispatch,getState)=>{
    try{
        const {data} = await axios.post("/student/apply/internship/"+id);
    }catch(error){
        dispatch(iserror(error.response.data.message));
    }
}
export const asyncstudentgetjob = (id)=>async(dispatch,getState)=>{
    try{
        const {data} = await axios.post("/student/read/job/"+id);
        dispatch(addjob(data.job));
    }catch(error){
        dispatch(iserror(error.response.data.message));
    }
}
export const asyncstudentapplyjob = (id)=>async(dispatch,getState)=>{
    try{
        const {data} = await axios.post("/student/apply/job/"+id);
    }catch(error){
        dispatch(iserror(error.response.data.message));
    }
}
export const asyncstudentmatchedjob = (id)=>async(dispatch,getState)=>{
    try{
        const {data} = await axios.post("/student/matchedjob/"+id);
        dispatch(addmatchedjob(data.jobs));
    }catch(error){
        dispatch(iserror(error.response.data.message));
    }
}

