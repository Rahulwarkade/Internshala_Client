'use client'
import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {asynccurrentemploye} from "@/store/Actions/employeAction.js"

const layout = ({children}) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(asynccurrentemploye());
    },[])
  return (
    <>
        {children}
    </>
  )
}

export default layout