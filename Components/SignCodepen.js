"use client";
import React,{useEffect} from "react";
import "./SignCodepen.scss";
import Link from "next/link";
import {useRouter} from 'next/navigation';
import { useDispatch, useSelector} from "react-redux";
import {asyncsignupstudent,asyncsigninstudent} from "@/store/Actions/studentAction.js"

const SignCodepen = () => {
    const dispatch = useDispatch();
    const {student,isAuthenticated} = useSelector((state)=>state.studentReducer);
    const router = useRouter();

    useEffect(() => {
        if(isAuthenticated) router.push('/student/profile');
      },[isAuthenticated,student])

    const loginHandler =async (e)=>{
        e.preventDefault();   
        const student = {
            email : e.target[0].value,
            password : e.target[1].value,
        };
        await dispatch(asyncsigninstudent(student));
    }

    const signupHandler = async (e)=>{
        e.preventDefault();   
        const newStudent = {
            firstname : e.target[0].value,
            lastname : e.target[1].value,
            contact : e.target[2].value,
            city : e.target[3].value,
            gender : e.target[4].value,
            email : e.target[5].value,
            password : e.target[6].value,
        };
       await  dispatch(asyncsignupstudent(newStudent));
    }
  const toggleSignup = () => {
    document.getElementById("login-toggle").style.backgroundColor = "#fff";
    document.getElementById("login-toggle").style.color = "#222";
    document.getElementById("signup-toggle").style.backgroundColor = "#57b846";
    document.getElementById("signup-toggle").style.color = "#fff";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
  };

  const toggleLogin = () => {
    document.getElementById("login-toggle").style.backgroundColor = "#57B846";
    document.getElementById("login-toggle").style.color = "#fff";
    document.getElementById("signup-toggle").style.backgroundColor = "#fff";
    document.getElementById("signup-toggle").style.color = "#222";
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
  };


  return (
    <>
      <div className="form-modal">
        <div className="form-toggle">
          <button id="login-toggle" onClick={toggleLogin}>
            log in
          </button>
          <button id="signup-toggle" onClick={toggleSignup}>
            sign up
          </button>
        </div>
        <div id="signup-form">
          <form onSubmit={signupHandler}>
            <input type="text" placeholder="Firstname" />
            <input type="text" placeholder="Lastname" />
            <input type="text" placeholder="Contact" />
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Genger : Male,Female,and Others" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit" className="btn signup">
              create account
            </button>
            {/* <p>Clicking <strong>create account</strong> means that you are agree to our <a href="javascript:void(0)">terms of services</a>.</p> */}
            <hr />
            {/* <button type="button" className="btn -box-sd-effect"> <i className="fa fa-google fa-lg" aria-hidden="true"></i> sign up with google</button>
            <button type="button" className="btn -box-sd-effect"> <i className="fa fa-linkedin fa-lg" aria-hidden="true"></i> sign up with linkedin</button>
            <button type="button" className="btn -box-sd-effect"> <i className="fa fa-windows fa-lg" aria-hidden="true"></i> sign up with microsoft</button> */}
          </form>
        </div>
        <div id="login-form">
          <form onSubmit={loginHandler}>
            <input type="text" placeholder="Enter email or username" />
            <input type="password" placeholder="Enter password" />
            <button type="submit" className="btn login">
              login
            </button>
            <p>
              <Link href='/student/profile/forget'>Forgotten account</Link>
            </p>
            <hr />
            {/* <button type="button" className="btn -box-sd-effect"> <i className="fa fa-google fa-lg" aria-hidden="true"></i> sign in with google</button>
            <button type="button" className="btn -box-sd-effect"> <i className="fa fa-linkedin fa-lg" aria-hidden="true"></i> sign in with linkedin</button>
            <button type="button" className="btn -box-sd-effect"> <i className="fa fa-windows fa-lg" aria-hidden="true"></i> sign in with microsoft</button> */}
          </form>
        </div>


      </div>
    </>
  );
};

export default SignCodepen;
