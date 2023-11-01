import React from "react";
import Link from "next/link";
import "./footer.scss";
import logo from "@/public/logo.png";
import Image from "next/image";
import { ImFacebook2 } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import { PiCopyrightFill } from "react-icons/pi";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="foot">
          <div className="foot-one">
            <div className="logo">
              <Link href='/'>     
              <Image className="img" src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="social">
              <h3>Connect with us</h3>
              <div className="social-icons">
                <Link className="icon" href="https://www.facebook.com/">
                  <div className="facebook">
                    <ImFacebook2 />
                  </div>
                </Link>
                <Link className="icon" href="https://www.instagram.com/sa_india1/">
                  <div className="insta">
                    <FaSquareInstagram />
                  </div>
                </Link>
                <Link className="icon" href="https://twitter.com/SA_india1">
                  <div className="tiw">
                    <ImTwitter />
                  </div>
                </Link>
                <Link className="icon" href="https://www.linkedin.com/in/sandiaconsultancies?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <div className="linked">
                    <ImLinkedin />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="foot-two">
            <Link className="link" href="#">
              About us
            </Link>
            <Link className="link" href="#">
              Careers
            </Link>
            <Link className="link" href="#">
              Employer home
            </Link>
            <Link className="link" href="#">
              Sitemap
            </Link>
          </div>
          <div className="foot-three">
            <Link className="link" href="#">
              Help center
            </Link>
            <Link className="link" href="#">
              Notices
            </Link>
            <Link className="link" href="#">
              Grievances
            </Link>
            <Link className="link" href="#">
              Report issue
            </Link>
          </div>
          <div className="foot-four">
            <Link className="link" href="#">
              Privacy policy
            </Link>
            <Link className="link" href="#">
              Terms & conditions
            </Link>
            <Link className="link" href="#">
              Fraud alert
            </Link>
            <Link className="link" href="#">
              Trust & safety
            </Link>
          </div>
        </div>
        <div className="cpy">
            <h3> <PiCopyrightFill style={{fontSize : "20px"}}/> Copyright 2023 Jobzz24</h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
