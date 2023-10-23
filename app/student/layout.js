'use client'
import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {asynccurrentstudent} from "@/store/Actions/studentAction.js"


const layout = ({children}) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(asynccurrentstudent());
    },[])
  return (
    <>
        {children}
    </>
  )
}

export default layout