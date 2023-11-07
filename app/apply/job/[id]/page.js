'use client'
import React,{useEffect} from 'react'
import ApplyJob from '@/Components/ApplyJob.js';
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
        <ApplyJob/>
    </>
  )
}

export default page