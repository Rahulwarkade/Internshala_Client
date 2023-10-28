"use client";
import React,{useEffect} from "react";
import "./profileupdate.scss";
import Link from "next/link";
import {useRouter} from 'next/navigation';
import { useDispatch, useSelector} from "react-redux";
import {asyncupdateemploye} from "@/store/Actions/employeAction.js"

const profileupdate = ()=>{
  const {employe} = useSelector(state=>state.employeReducer)
  const dispatch = useDispatch();
  const router = useRouter();
  const updateHandler = async (e)=>{
    e.preventDefault();   
    const updateemploye = {
        firstname : e.target[0].value,
        lastname : e.target[1].value,
        contact : e.target[2].value,
        city : e.target[3].value,
        gender : e.target[4].value,
        email : e.target[5].value,
    };
   await  dispatch(asyncupdateemploye(updateemploye));
   router.push("/employe/profile");
  }

  return <>
      <div className="form-modal">
        <div id="signup-form">
          <form onSubmit={updateHandler} >
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
      </div>
  </>
}

export default profileupdate