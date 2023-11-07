"use client";
import React, { useEffect, useState } from "react";
import "./applyjob.scss";
import "@/node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";
import Popup from "reactjs-popup";
import { asyncstudentapplyjob } from "@/store/Actions/studentAction.js";
const Apply = () => {
  const [modalstatus, setModalStatus] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const { student, isAuthenticated, job } = useSelector(
    (state) => state.studentReducer
  );

  const applyHandler = (e) => {
    if (!isAuthenticated) {
      toast("Login for applying the job");
      return;
    }

    dispatch(asyncstudentapplyjob(job?._id));
    e.stopPropagation();
    setModalStatus(true);
  };
  const appliedHandler = (e)=>{
    toast("You have applied for this Job.");
    return;
  }
  return (
    <>
      <div className="contain" onClick={()=>{setModalStatus(false)}}>
        <div className={modalstatus?"container":"modalClose"} >
          <div className="modal" onClick={(e)=>{
            e.stopPropagation()}}>
            <h2>You have Applied for Job</h2>
            <p>Click the button to close</p>
            <button onClick={()=>{setModalStatus(false)}} className="modal_button">Close</button>
          </div>
        </div>

        <div className="applylayout">
          <div className="nav">
            <h1>{job?.title}</h1>
          </div>
          <div className="jobdetails">
            <div className="heading">
              <h3>{job?.title}</h3>
              <h4>{job?.organizationname}</h4>
            </div>
            <div className="details">
              <h3>{job?.jobtype}</h3>
              <div className="alpha">
                <div className="comn">
                  <h3>start date</h3>
                  <p>Immediately</p>
                </div>
                <div className="comn">
                  <h3>Duration</h3>
                  <p>{job?.duration}</p>
                </div>
                <div className="comn">
                  <h3>Stipend</h3>
                  <p>{job?.stipend}</p>
                </div>
                {/* <div className="comn">
                                <h3>Apply by</h3>
                                <p>24/7/2024</p>
                                </div> */}
              </div>
            </div>
            <div className="status">
              <h3>Posted just now</h3>
              {/* <h3>part time</h3> */}
            </div>
            <span>Be an early applicant</span>
          </div>
          <div className="skills">
            <h3>Skill(s) required</h3>
            <p>{job?.skill}</p>
          </div>
          <div className="perks">
            <h3>Perks</h3>
            <p>{job?.perks}</p>
          </div>
          <div className="assesments">
            <h3>Assesments</h3>
            <p>{job?.assesments}</p>
          </div>
          {job && !job.students.includes(student?._id) ? (
            <button onClick={applyHandler} className="btn btn-primary">
              Apply
            </button>
          ) : (
            <button onClick={appliedHandler}  className="btn btn-success">
              Applied
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Apply;
