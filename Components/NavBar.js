"use client";
import React,{useState} from "react";
import style from "./NavBar.module.scss";
import Link from "next/link";
import "@/node_modules/bootstrap/dist/css/bootstrap.min.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import Image from 'next/image'
import logo from "@/public/logo.jpg";
const NavBar = () => {
  const [nav,setNav] = useState(false);

  return (
    <>
      <div className={style.nav}>
        <div className={style.logo}>
          <Image className={style.img} src={logo} alt="logo"/>
        </div>
        <div className={(nav)?style.manu:style.hid}>
          <Link className={style.link} href="/Home">
            Home
          </Link>
          <Link className={style.link} href="/About">
            About
          </Link>
          <Link className={style.link} href="/Candidate">
            Candidate
          </Link>
          <Link className={style.link} href="/Employer">
            Employer
          </Link>
        </div>
        <div className={style.authentication}>
          <i className="ri-user-add-fill" style={{color :" #FC246A",fontSize : "24px" }}></i>
          <button
            className="btn btn-sm btn-success"
            id={style.student}
            style={{
              backgroundColor: "transparent",
              border: "1px solid #FC246A",
            }}
          >
            <Link className={style.link} href="/student">
              Student
            </Link>
          </button>
          <button
            className="btn btn-sm btn-info"
            id={style.employee}
            style={{ backgroundColor: "#FC246A", border: "none" }}
          >
            <Link className={style.link} href="/employe">
              Employee
            </Link>
          </button>
          {(nav)?<RxCross1 className={style.cross} onClick={()=>setNav(!nav)}></RxCross1>:<GiHamburgerMenu className={style.hambar} onClick={()=>setNav(!nav)} ></GiHamburgerMenu>}
        </div>
      </div>
    </>
  );
};

export default NavBar;