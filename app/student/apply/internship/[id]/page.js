'use client'
import React,{useEffect} from 'react'
import ApplyInternship from "@/Components/ApplyInternship.js";
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
        <ApplyInternship/>
    </>
  )
}

export default page