'use client'
import React, { useEffect } from 'react';
import 'remixicon/fonts/remixicon.css';
import NavBar from '@/Components/NavBar.js';
import Welcome from '@/Components/Welcome.js';
import Jobs from '@/Components/Jobs.js';
import Internships from '@/Components/Internships.js';
import Footer from '@/Components/Footer.js';
import '@/node_modules/bootstrap/dist/css/bootstrap.min.css';

import {asynccurrentstudent} from "@/store/Actions/studentAction.js"
import { useDispatch } from 'react-redux';

const page = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asynccurrentstudent());
  },[])
  

  return (
    <>
      <div id="main">
        <div id="pageOne">
          <NavBar/>
          <Welcome/>
          <Internships/>
          <Jobs/>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default page