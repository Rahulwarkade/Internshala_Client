import axios from "@/utils/axios.js";
import { toast } from 'react-toastify';

import {
    addemploye,
    removeemploye,
    iserror,
    removeerror,
} from "../Reducers/employeReducer";


export const asynccurrentemploye = ()=>async(dispatch,getState)=>{

    try{
        const {data} = await axios.post("/employe");
        dispatch(addemploye(data.employe));
    }catch(error){
        dispatch(iserror(error.response.data.message))
    }

}
export const asyncsignupemploye = (employe)=>async(dispatch,getState)=>{

    try{
        const {data} = await axios.post("/employe/signup",employe);
        dispatch(addemploye(data.employe));
    }catch(error){
        dispatch(iserror(error.response.data.message))
        toast(error.response.data.message);
    }
}
export const asyncupdateemploye = (employe)=>async(dispatch,getState)=>{

    try{
        const {_id} = getState().employeReducer.employe;
        const {data }= await axios.post("/employe/update/"+_id,employe);
        dispatch(addemploye(data.employe));
    }catch(error){
        dispatch(iserror(error.response.data.message))
        toast(error.response.data.message);
    }
}
export const asyncemployeresetpassword = (password)=>async(dispatch,getState)=>{

    try{
        const {_id} = getState().employeReducer.employe;
        const {data }= await axios.post("/employe/reset-password/"+_id,password);
        dispatch(addemploye(data.employe));
    }catch(error){
        dispatch(iserror(error.response.data.message))
        toast(error.response.data.message);
    }
}
export const asyncemployesendmeail = (email)=>async(dispatch,getState)=>{

    try{
        const  {data} =  await axios.post("/employe/send-mail",email);
        dispatch(addemploye(data.employe));
    }catch(error){
        dispatch(iserror(error.response.data.message))
        toast(error.response.data.message);
    }
}
export const asyncemployeforgetpassword = (pom)=>async(dispatch,getState)=>{

    try{
        const {data }= await axios.post("/employe/forget-link/",pom);
    }catch(error){
        dispatch(iserror(error.response.data.message))
        toast(error.response.data.message);
    }
}
export const asyncemployeavatar = (avatar)=>async(dispatch,getState)=>{

    try{
        const {_id} = getState().employeReducer.employe;
        const {data}= await axios.post("/employe/avatar/"+_id,avatar);
        dispatch(addemploye(data.employe));
    }catch(error){
        dispatch(iserror(error.response.data.message))
        toast(error.response.data.message);
    }
}

export const asyncsigninemploye = (employe)=>async(dispatch,getState)=>{

    try{
        const {data} = await axios.post("/employe/signin",employe);
        dispatch(addemploye(data.employe));
    }catch(error){
        // dispatch(iserror(error.response.data.message));
        toast(error);
    }
}

export const asyncsignoutemploye = (employe)=>async(dispatch,getState)=>{

    try{
        const {data} = await axios.get("/employe/signout");
        dispatch(removeemploye());
    }catch(error){
        dispatch(iserror(error.response.data.message))
    }
}

// -`-`-`-`-    -   -   -   -   -   CREATE JOBS     =   =   =   =   


export const asynccreatejobs = (job)=>async(dispatch,getState)=>{

    try{
        const {data} = await axios.post("/employe/job/create/",job);
        dispatch(asynccurrentemploye());
    }catch(error){
        dispatch(iserror(error.response.data.message))
    }
}

// -`-`-`-`-    -   -   -   -   -   CREATE JOBS     =   =   =   =   


export const asynccreateinternship = (intern)=>async(dispatch,getState)=>{

    try{
        const {data} = await axios.post("/employe/internship/create/",intern);
        dispatch(asynccurrentemploye());
    }catch(error){
        dispatch(iserror(error.response.data.message))
    }
}

