"use client";
import React,{useState,useEffect,useRef} from "react";
import "./forgetpassword.scss";
import Link from "next/link";
import {useRouter} from 'next/navigation';
import { useDispatch, useSelector} from "react-redux";
import { toast } from 'react-toastify';
import {asyncemployeforgetpassword,asyncemployesendmeail} from "@/store/Actions/employeAction.js"

const resetpassword = ()=>{
  const {errors} = useSelector(state=>state.employeReducer)
  const dispatch = useDispatch();
  const router = useRouter();
  const [flag,setFlag] = useState(true);
  const updateHandler = async (e)=>{
    e.preventDefault();   
    const email = {
        email : e.target[0].value,
    };
   await  dispatch(asyncemployesendmeail(email));
   setFlag(false);
  }
  const forgetPassword = async (e)=>{
    e.preventDefault();
    const getOtp = {
        email : e.target[0].value,
        otp : e.target[1].value,
        password : e.target[2].value,
    }
    await dispatch(asyncemployeforgetpassword(getOtp));
    router.push('/employe');
  }

  useEffect(()=>{},[]);

  return <>
      <div id={(flag)?"show":"hid"} className="form-modal">
        <div id="signup-form">
          <form onSubmit={updateHandler} >
            <input type="email" placeholder="Enter mail" />
            <button type="submit" className="btn signup">
              send mail
            </button>
            <hr />
          </form>
        </div>
      </div>
      <div id={(!flag)?"show":"hid"} className="form-modal">
        <div id="signup-form">
          <form onSubmit={forgetPassword} >
            <input type="text" placeholder="Enter mail" />
            <input type="text" placeholder="Enter otp" />
            <input type="password" placeholder="Enter new password" />
            <button type="submit" className="btn signup">
              forget password
            </button>
            <hr />
          </form>
        </div>
      </div>
  </>
}

export default resetpassword