"use client";
import React, { useState, useEffect } from "react";
import "./careers.scss";
import NavBar from "@/Components/NavBar.js";
import Footer from "@/Components/Footer.js";
import Link from 'next/link';
import Image from "next/image";

const Careers = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const images = document.querySelectorAll(".gallery > .imageflex");
    const slideshow = setInterval(() => {
      images[currentImageIndex].style.display = "none";
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 3000);
    const slidehide = setInterval(() => {
      images[currentImageIndex].style.display = "initial";
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 6000);

    return () =>{ 
      clearInterval(slideshow);
      clearInterval(slidehide);
    } 
  }, [currentImageIndex]);
  return (
    <>
      <NavBar />
      <div className="career">
        <div className="gallery">
          <img
            className="imageflex"
            src="https://res.cloudinary.com/huda-tariq-design/image/upload/v1484581124/iStock-test2_n37c7a.jpg"
          />
          <img
            className="imageflex"
            src="https://res.cloudinary.com/huda-tariq-design/image/upload/v1484578659/iStock-475690164_bfxqhu.jpg"
          />
          <img
            className="imageflex"
            src="https://res.cloudinary.com/huda-tariq-design/image/upload/v1484671451/iStock-test3_i8awzu.jpg"
          />
          <img className="img" src="https://res.cloudinary.com/huda-tariq-design/image/upload/v1484581124/iStock-test2_n37c7a.jpg" alt="loading"/>
        </div>
        <div className="join">
          <h1>Join our Team</h1>
          <h4>Welcome to Jobzz24.</h4>
          <p>
            At Jobzz24, we're more than just a job portal; we're a team of
            passionate individuals committed to transforming the world of work.
            We're always on the lookout for talented, driven, and creative
            individuals to join our mission. Explore our current job openings
            and consider becoming a part of our journey.
          </p>
        </div>
        <div className="culture">
          <h1>Company Culture</h1>
          <p>
            Our workplace is built on principles of teamwork, creativity, and
            respect. We value diversity, collaboration, and innovation, creating
            an environment where you can thrive and contribute your best work.
          </p>
        </div>
        <div className="benefit">
          <h1>Perks and Benefits</h1>
          <h6> Competitive salary packages </h6>
          <h6>Health and wellness programs </h6>
          <h6> Flexible work arrangements </h6>
          <h6> Opportunities for professional development</h6>
        </div>
        <div className="testimonials">
          <h1>Testimonials</h1>
          <p>
            I joined jobzz24 as a recent graduate, and the opportunities for
            learning and growth have been incredible. - Emily R.
          </p>
        </div>
        <div className="get">
          <h1>Get in Touch</h1>
          <p>
            If you have any questions or need further assistance, don't hesitate
            to contact us at <Link href="/career" className="lin"> careers@jobzz24portal.com.</Link>
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Careers;
