"use client";
import React,{useEffect} from "react";
import "./SignCodepen.scss";
import Link from "next/link";
import {useRouter} from 'next/navigation';
import { useDispatch, useSelector} from "react-redux";
import {asyncsignupemploye,asyncsigninemploye} from "@/store/Actions/employeAction.js"
import { toast } from "react-toastify";

const EmployeSignin = () => {
    const dispatch = useDispatch();
    const {employe,isAuthenticated} = useSelector((state)=>state.employeReducer);
    const router = useRouter();

    useEffect(() => {
        if(isAuthenticated) router.push('/employe/profile');
      },[isAuthenticated,employe])



    const signupHandler = async (e)=>{
        e.preventDefault();   
        const newemploye = {
            firstname : e.target[0].value,
            lastname : e.target[1].value,
            contact : e.target[2].value,
            city : e.target[3].value,
            gender : e.target[4].value,
            email : e.target[5].value,
            organizationname : e.target[6].value,
        };
      //  await  dispatch(asyncsignupemploye(newemploye));
       toast("Your Request has been sent to Admin");
       return;
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
          <button id="login-toggle">
            Employer Account
          </button>
          {/* <button id="signup-toggle" onClick={toggleSignup}>
            sign up
          </button> */}
        </div>
        <div id="login-form">
          <form onSubmit={signupHandler}>
          <input type="text" placeholder="Firstname" />
            <input type="text" placeholder="Lastname" />
            <input type="text" placeholder="Contact" />
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Genger : Male,Female,and Others" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Organaization Name" />
            {/* <input type="text" placeholder="Organaization Logo" /> */}

            <button type="submit" className="btn signup">
              Send Request
            </button>
            <p>Clicking <strong>Request for account</strong> means that you are agree to our <a href="javascript:void(0)">terms of services</a>.</p>
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

export default EmployeSignin;
