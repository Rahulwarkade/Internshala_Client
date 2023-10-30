import React from 'react'
import './brands.scss'
import Image from "next/image";

const Brands = () => {
  return (
    <>
    <div className='brands'>
        <div className="brand">
            <div className="nav">
                <h1>Top companies trust us</h1>
            </div>
            <div className="marquee">
                <marquee behavior="scroll" direction="right"  scrollamount="20">
                    <img className="img" src={`https://internshala.com/static/images/homepage/top_companies.png`} alt="loading"/>
                    <img className="img2" src={`https://internshala.com/static/images/homepage/top_companies.png`} alt="loading"/>
                    <img className="img" src={`https://internshala.com/static/images/homepage/top_companies.png`} alt="loading"/>
                    <img className="img2" src={`https://internshala.com/static/images/homepage/top_companies.png`} alt="loading"/>
                    <img className="img" src={`https://internshala.com/static/images/homepage/top_companies.png`} alt="loading"/>
                    <img className="img2" src={`https://internshala.com/static/images/homepage/top_companies.png`} alt="loading"/>
                    <img className="img" src={`https://internshala.com/static/images/homepage/top_companies.png`} alt="loading"/>
                    <img className="img2" src={`https://internshala.com/static/images/homepage/top_companies.png`} alt="loading"/>
                    <img className="img" src={`https://internshala.com/static/images/homepage/top_companies.png`} alt="loading"/>
                    <img className="img2" src={`https://internshala.com/static/images/homepage/top_companies.png`} alt="loading"/>
                    <img className="img" src={`https://internshala.com/static/images/homepage/top_companies.png`} alt="loading"/>
                    <img className="img2" src={`https://internshala.com/static/images/homepage/top_companies.png`} alt="loading"/>
                </marquee>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Brands