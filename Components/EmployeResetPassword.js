"use client";
import React,{useEffect} from "react";
import "./profileupdate.scss";
import Link from "next/link";
import {useRouter} from 'next/navigation';
import { useDispatch, useSelector} from "react-redux";
import {asyncemployeresetpassword} from "@/store/Actions/employeAction.js"

const resetpassword = ()=>{
  const {employe} = useSelector(state=>state.employeReducer)
  const dispatch = useDispatch();
  const router = useRouter();
  const updateHandler = async (e)=>{
    e.preventDefault();   
    const updatePassword = {
        oldpassword : e.target[0].value,
        password : e.target[1].value,
    };
   await  dispatch(asyncemployeresetpassword(updatePassword));
   router.push("/employe/");
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