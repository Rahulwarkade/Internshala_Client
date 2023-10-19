'use client'
import React from 'react';
import 'remixicon/fonts/remixicon.css'
import NavBar from '@/Components/NavBar.js';
import Welcome from '@/Components/Welcome.js';
import Jobs from '@/Components/Jobs.js';
const page = () => {

  return (
    <>
      <div id="main">
        <div id="pageOne">
          <NavBar/>
          <Welcome/>
          <Jobs/>
        </div>
      </div>
    </>
  )
}

export default page