"use client";
import React, { useEffect, useState } from "react";
import "./applyinternship.scss";
import "@/node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";
import Popup from "reactjs-popup";
import { asyncstudentapplyinternship } from "@/store/Actions/studentAction.js";
const Apply = () => {
  const [modalstatus, setModalStatus] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const { student, isAuthenticated, internship } = useSelector(
    (state) => state.studentReducer
  );

  const applyHandler = (e) => {
    if (!isAuthenticated) {
      toast("Login for applying the internship");
      return;
    }

    dispatch(asyncstudentapplyinternship(internship?._id));
    e.stopPropagation();
    setModalStatus(true);
  };
  return (
    <>
      <div className="contain" onClick={()=>{setModalStatus(false)}}>
        <div className={modalstatus?"container":"modalClose"} >
          <div className="modal" onClick={(e)=>{
            e.stopPropagation()}}>
            <h2>You have Applied for Internship</h2>
            <p>Click the button to close</p>
            <button onClick={()=>{setModalStatus(false)}} className="modal_button">Close</button>
          </div>
        </div>

        <div className="applylayout">
          <div className="nav">
            <h1>{internship?.title}</h1>
          </div>
          <div className="jobdetails">
            <div className="heading">
              <h3>{internship?.title}</h3>
              <h4>{internship?.organizationname}</h4>
            </div>
            <div className="details">
              <h3>{internship?.internshiptype}</h3>
              <div className="alpha">
                <div className="comn">
                  <h3>start date</h3>
                  <p>Immediately</p>
                </div>
                <div className="comn">
                  <h3>Duration</h3>
                  <p>{internship?.duration}</p>
                </div>
                <div className="comn">
                  <h3>Stipend</h3>
                  <p>{internship?.stipend}</p>
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
            <p>{internship?.skill}</p>
          </div>
          <div className="perks">
            <h3>Perks</h3>
            <p>{internship?.perks}</p>
          </div>
          <div className="assesments">
            <h3>Assesments</h3>
            <p>{internship?.assesments}</p>
          </div>
          {internship && !internship.students.includes(student?._id) ? (
            <button onClick={applyHandler} className="btn btn-primary">
              Apply
            </button>
          ) : (
            <button onClick={applyHandler}  className="btn btn-success">
              Applied
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Apply;
