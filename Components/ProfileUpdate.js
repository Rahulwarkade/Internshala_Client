"use client";
import React,{useEffect} from "react";
import "./profileupdate.scss";
import Link from "next/link";
import {useRouter} from 'next/navigation';
import { useDispatch, useSelector} from "react-redux";
import {asyncsignupstudent,asyncsigninstudent} from "@/store/Actions/studentAction.js"

const profileupdate = ()=>{

  return <>
      <div className="form-modal">
        <div id="signup-form">
          <form >
            <input type="text" placeholder="Firstname" />
            <input type="text" placeholder="Lastname" />
            <input type="text" placeholder="Contact" />
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Genger : Male,Female,and Others" />
            <input type="email" placeholder="Email" />
            <button type="submit" className="btn signup">
              update account
            </button>
            <hr />
          </form>
        </div>
        <div id="login-form">
          <form >
            <input type="text" placeholder="Enter email or username" />
            <input type="password" placeholder="Enter password" />
            <button type="submit" className="btn login">
              login
            </button>
            <p>
              <a>Forgotten account</a>
            </p>
            <hr />
          </form>
        </div>
      </div>
  </>
}

export default profileupdate