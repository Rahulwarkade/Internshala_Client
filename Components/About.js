'use client'
import React from "react";
import "./aboutUs.scss";
import Link from "next/link";
import NavBar from "@/Components/NavBar.js";
import Footer from "@/Components/Footer.js";
import { ImFacebook2 } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Image from 'next/image';
import CEO from '../public/CEO.jpeg'
import HR from '../public/HR.jpeg'
const About = () => {

  var team = [{name : "Bijay Chandra Das",info:"Chief Executive Officer of SAIC, advisor to business leaders, entrepreneur by nature.",pic:CEO}];
  var crew = [{name : "ADV. DR. GIRISH BAKSHI",position : "Human Resource Professional",pic:HR}];
  return (
    <>
      <NavBar />
      <div className="gallery">
        <img
          src="https://internshala.com/static/images/info/about_us/banners/banner-r1920.png"
          alt="loading"
        />
      </div>
      <div className="vision">
        <div className="text">
          <h1>Our mission </h1>
          <h4>Jobzz24 is a dot com business with the heart of dot org.</h4>
          <p>
            Our mission is to empower job seekers to find their dream jobs and
            help employers discover the perfect talent. We believe that every
            person deserves the opportunity to fulfill their career aspirations,
            and every business deserves the right team to thrive.
          </p>
        </div>
        <div className="boxes">
          <div className="box-one">
            <div className="img">
              <img
                src="https://internshala.com/static/images/info/about_us/vision/jobs-r575.svg"
                alt="loading"
              />
            </div>
            <div className="details">
              <h2>Fresher Jobs</h2>
              <p>
                Get premium fresher jobs with a minimum CTC of 2LPA on you
                fingertips
              </p>
              <Link className="lin" href="/">Explore more
              <MdOutlineKeyboardDoubleArrowRight style={{fontSize : "23px"}}/> 
              </Link>
            </div>
          </div>
          <div className="box-two">
            <div className="img">
              <img
                src="https://internshala.com/static/images/info/about_us/vision/internships-r575.svg"
                alt="loading"
              />
            </div>
            <div className="details">
              <h2>Internships</h2>
              <p>
                Find 10,000+ internships from great companies to give a
                kickstart to your career
              </p>
              <Link className="lin" href="/">Explore more
              <MdOutlineKeyboardDoubleArrowRight style={{fontSize : "23px"}}/> 
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="team">
        <h1>Meet Our Team</h1>
        <div className="teamGrid">
          {team.map((leader)=>{
            return (
              <div className="colmun">
              <div className="teamcol">
                <div className="teamcolinner">
                  <div className="avatar">
                    <Image className="img"
                      src={leader.pic}
                    />
                  </div>
                  <div className="member-name">
                    {" "}
                    <h2 align="center">{leader.name}</h2>{" "}
                  </div>
                  <div className="member-info">
                    <p align="center">
                    {leader.info}
                    </p>
                  </div>
                  <div className="member-mail">
                    {" "}
                    <p align="center">
                      {" "}
                      <Link className="lin" href="itdept.saindia@gmail.com">itdept.saindia@gmail.com</Link>{" "}
                    </p>{" "}
                  </div>
                  <div className="member-social">
                    <ul className="social-listing">
                      <li>
                        <Link
                          className="icon"
                          href="https://www.linkedin.com/in/sandiaconsultancies?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        >
                          <div className="linked">
                            <ImLinkedin />
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="icon"
                          href="https://www.instagram.com/sa_india1/"
                        >
                          <div className="insta">
                            <FaSquareInstagram />
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="icon"
                          href="https://twitter.com/SA_india1"
                        >
                          <div className="tiw">
                            <ImTwitter />
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            );
          })}

        </div>
        <div className="crew">
        <h1>Meet Our Crew</h1>
        <p>Creative people</p>
          {crew.map((member)=>{
            return (
              <div className="member">
              <div className="pic">
                <Image className="picture" src={member.pic} alt="loading"/>
              </div>
              <div className="profile">
                <h5>{member.name}</h5>
                <p>{member.position}</p>
                <div className="contact">
                <ul className="social-listingTwo">
                    <li>
                      <Link
                        className="icon"
                        href="https://www.linkedin.com/in/sandiaconsultancies?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      >
                        <div className="linked">
                          <ImLinkedin />
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="icon"
                        href="https://www.instagram.com/sa_india1/"
                      >
                        <div className="insta">
                          <FaSquareInstagram />
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="icon"
                        href="https://twitter.com/SA_india1"
                      >
                        <div className="tiw">
                          <ImTwitter />
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
          </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
