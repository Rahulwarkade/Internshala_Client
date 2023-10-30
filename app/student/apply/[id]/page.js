"use client"
import React,{useEffect} from 'react'
import Apply from "@/Components/Apply.js"
import { useDispatch, useSelector } from "react-redux";
import {asyncstudentgetjob} from "@/store/Actions/studentAction.js";
const page = (props) => {
    const dispatch = useDispatch();
    const id = props.params.id;

    useEffect(()=>{
        dispatch(asyncstudentgetjob(id));
    },[])

  return (
    <>
        <Apply/>
    </>
  )
}

export default page