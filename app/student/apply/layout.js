import React from 'react'
import NavBar from '@/Components/NavBar.js';
import Footer from '@/Components/Footer.js';

const layout = ({children}) => {
  return (
    <>
        <NavBar/>
        {children}
        <Footer/>
    </>
  )
}

export default layout