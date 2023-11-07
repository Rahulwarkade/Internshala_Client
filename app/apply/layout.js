'use client';
import React, { useEffect } from 'react';
import {asynccurrentstudent} from "@/store/Actions/studentAction.js"
import { useDispatch } from 'react-redux';
import NavBar from '@/Components/NavBar.js';
import Footer from '@/Components/Footer.js';

const layout = ({children}) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(asynccurrentstudent());
  },[])
  return (
    <>
        <NavBar/>
        {children}
        <Footer/>
    </>
  )
}

export default layout 