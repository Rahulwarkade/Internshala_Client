"use client";
import React,{useEffect} from "react";
import "./profileupdate.scss";
import Link from "next/link";
import {useRouter} from 'next/navigation';
import { useDispatch, useSelector} from "react-redux";
import {asyncstudentresetpassword} from "@/store/Actions/studentAction.js"

const resetpassword = ()=>{
  const {student} = useSelector(state=>state.studentReducer)
  const dispatch = useDispatch();
  const router = useRouter();
  const updateHandler = async (e)=>{
    e.preventDefault();   
    const updatePassword = {
        oldpassword : e.target[0].value,
        password : e.target[1].value,
    };
   await  dispatch(asyncstudentresetpassword(updatePassword));
   router.push("/student/");
  }

  return <>
      <div className="form-modal">
        <div id="signup-form">
          <form onSubmit={updateHandler} >
            <input type="password" placeholder="Old Password" />
            <input type="password" placeholder="New Password" />
            <button type="submit" className="btn signup">
              reset password
            </button>
            <hr />
          </form>
        </div>
      </div>
  </>
}

export default resetpassword