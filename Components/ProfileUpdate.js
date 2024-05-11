"use client";
import React,{useEffect} from "react";
import "./profileupdate.scss";
import Link from "next/link";
import {useRouter} from 'next/navigation';
import { useDispatch, useSelector} from "react-redux";
import {asyncupdatestudent} from "@/store/Actions/studentAction.js"

const profileupdate = ()=>{
  const {student} = useSelector(state=>state.studentReducer)
  const dispatch = useDispatch();
  const router = useRouter();
  const updateHandler = async (e)=>{
    e.preventDefault();   
    const updateStudent = {
        firstname : e.target[0].value,
        lastname : e.target[1].value,
        contact : e.target[2].value,
        city : e.target[3].value,
        skills : e.target[4].value,
        email : e.target[5].value,
    };
   await  dispatch(asyncupdatestudent(updateStudent));
   router.push("/student/profile");
  }

  return <>
      <div className="form-modal">
        <div id="signup-form">
          <form onSubmit={updateHandler} >
            <input type="text" placeholder="Firstname" />
            <input type="text" placeholder="Lastname" />
            <input type="text" placeholder="Contact" />
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Skills" />
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