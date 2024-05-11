"use client";
import React from "react";
import "./Profile.scss";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  asynccurrentstudent,
  asyncstudentavatar,
  asyncsignoutstudent,
  asyncstudentmatchedjob,
} from "@/store/Actions/studentAction.js";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar.js";
import Link from "next/link";
import Footer from "@/Components/Footer.js";
import { ColorRing } from "react-loader-spinner";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { GrLocation } from "react-icons/gr";
import { BsCalendar2Date } from "react-icons/bs";
import { toast } from "react-toastify";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
const profile = () => {
  const [flag, setFlag] = useState(true);
  const { student, isAuthenticated ,matchedJob} = useSelector(
    (state) => state.studentReducer
  );
  const internships = student?.internships;
  const appliedHandler = (e)=>{
    toast("You have applied for this Job.");
    return;
  }
  const inputpic = useRef();
  const pic = useRef();
  const submit = useRef();
  const dispatch = useDispatch();
  const router = useRouter();

  const inputpicHandler = () => {
    inputpic.current.click();
  };

  const submitHandler = () => {
    submit.current.click();
  };
  const signoutHandler = () => {
    dispatch(asyncsignoutstudent());
    router.push("/");
  };

  const updateHandler = () => {
    router.push("/student/profile/profileupdate");
  };

  const avatarHandler = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    formdata.set("avatar", e.target.avatar.files[0]);
    dispatch(asyncstudentavatar(formdata));
  };

  const resetpasswordHandler = () => {
    router.push("/student/profile/resetpassword");
  };

  useEffect(() => {
    if (!isAuthenticated) router.push("/student");
    dispatch(asyncstudentmatchedjob(student?._id));
  }, [student]);
  const jobs = student?.jobs;

  return (
    <>
      <NavBar/>
      <div className="container">
        <div className="profile-header">
          <div className="profile-img">
            {!student ? (
              <img
                onClick={inputpicHandler}
                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJHtLNj7M2GqTtcijfgVGjSK5BWMLlI1Q8pPYNc6G6ZYMQyXUiPWQhK19MtmGh6A6POM&usqp=CAU`}
                width="200"
                alt="Profile Image"
              />
            ) : (
              <img
                onClick={inputpicHandler}
                src={student.avatar.url}
                width="200"
                alt="Profile Image"
              />
            )}
            <form
              onSubmit={avatarHandler}
              id="hidden"
              encType="multipart/form-data"
            >
              <input
                ref={inputpic}
                onChange={submitHandler}
                type="file"
                name="avatar"
              />
              <button ref={submit} type="submit">
                {" "}
                submit{" "}
              </button>
            </form>
          </div>
          <div className="profile-nav-info">
            {!student ? (
              <h3 className="user-name">Firstname Lastname</h3>
            ) : (
              <h3 className="user-name">
                {student?.firstname + " " + student?.lastname}
              </h3>
            )}
            <div className="address">
              {!student ? (
                <p id="state" className="state">
                  City,
                </p>
              ) : (
                <p id="state" className="state">
                  {student.city},
                </p>
              )}
              <span id="country" className="country">
                INDIA.
              </span>
            </div>
          </div>
          <div className="profile-option">
            <div className="notification">
              {/* <i className="fa fa-bell"></i> */}
              <Link className="link" onClick = {signoutHandler} href='/'>
                Signout
              </Link>
              {/* <span className="alert-message">3</span> */}
            </div>
          </div>
        </div>

        <div className="main-bd">
          <div className="left-side">
            <div className="profile-side">
              {!student ? (
                <p className="mobile-no">
                  <i className="fa fa-phone"></i> +91470xxxxx700
                </p>
              ) : (
                <p className="mobile-no">
                  <i className="fa fa-phone"></i>
                  {student.contact}
                </p>
              )}
              {!student ? (
                <p className="user-mail">
                  <i className="fa fa-envelope"></i>example@gmail.com
                </p>
              ) : (
                <p className="user-mail">
                  <i className="fa fa-envelope"></i>
                  {student.email}
                </p>
              )}
              <div className="user-bio">
                <h3>Bio</h3>
                {(student)?(<p className="bio">
                Hi, This is {student.firstname +" "+ student.lastname}.<br/>
                Skills : {student.skills},<br/>
                Location : {student.city},<br/>
                Gender : {student.gender},<br/>
                {/* Organization : {student.organizationname}. */}
                </p>):""}
              </div>
              <div className="profile-btn">
                <button
                  onClick={updateHandler}
                  className="chatbtn"
                  id="chatBtn"
                >
                  <i className="fa fa-comment"></i>Edit
                </button>
              </div>

              {/* <div className="user-rating">
          <h3 className="rating">4.5</h3>
          <div className="rate">
            <div className="star-outer">
              <div className="star-inner">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
            <span className="no-of-user-rate"><span>123</span>&nbsp;&nbsp;reviews</span>
          </div>
        </div> */}
            </div>
          </div>
          <div className="right-side">
            <div className="nav">
              <ul>
                <li
                  onClick={() => {
                    setFlag(true);
                  }}
                  className="user-post active"
                >
                  Jobs
                </li>
                <li
                  onClick={() => {
                    setFlag(false);
                  }}
                  className="user-review"
                >
                  Internships
                </li>
                {/* <li onClick={updateHandler} className="user-setting">
                  Update
                </li> */}
                <li onClick={resetpasswordHandler} className="user-setting">
                  Reset Password
                </li>
              </ul>
            </div>

            <div className={flag ? "cards" : "hid"}>
                {jobs &&
                  jobs.map((job, index) => {
                    return (
                      <>
                        <div key={job._id} className="card">
                          <div className="job">
                            <h3>{job.title}</h3>
                            <p>{job.organizationname}</p>
                            <div className="line"></div>
                          </div>
                          <div className="details">
                            <div className="span">
                              <GrLocation className="mt-1" />
                              <p>{job.location}</p>
                            </div>
                            <div className="span">
                              <LiaMoneyBillSolid className="mt-1" />
                              <p>{job.slary}INR</p>
                            </div>
                            <div className="span">
                              <BsCalendar2Date className="mt-1" />
                              <p>{job.duration}</p>
                            </div>
                          </div>
                          <div className="more">
                            <Link
                              className="link"
                              href={`/apply/job/${job._id}`}
                            >
                              View details
                              <MdOutlineKeyboardDoubleArrowRight
                                className="ml-3"
                                style={{ color: "#10C8CF", fontSize: "25px" }}
                              />
                            </Link>
                            <button onClick={appliedHandler}  className="btn btn-success">
              Applied
            </button>
                          </div>
                        </div>
                      </>
                    );
                  })}

{matchedJob &&
                  matchedJob.map((job, index) => {
                    return (
                      <>
                        <div key={job._id} className="card">
                          <div className="job">
                            <h3>{job.title}</h3>
                            <p>{job.organizationname}</p>
                            <div className="line"></div>
                          </div>
                          <div className="details">
                            <div className="span">
                              <GrLocation className="mt-1" />
                              <p>{job.location}</p>
                            </div>
                            <div className="span">
                              <LiaMoneyBillSolid className="mt-1" />
                              <p>{job.slary}INR</p>
                            </div>
                            <div className="span">
                              <BsCalendar2Date className="mt-1" />
                              <p>{job.duration}</p>
                            </div>
                          </div>
                          <div className="more">
                            <Link
                              className="link"
                              href={`/apply/job/${job._id}`}
                            >
                              View details
                              <MdOutlineKeyboardDoubleArrowRight
                                className="ml-3"
                                style={{ color: "#10C8CF", fontSize: "25px" }}
                              />
                            </Link>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </div>
              <div className={!flag ? "cards" : "hid"}>
                {internships &&
                  internships.map((intern, index) => {
                    return (
                      <>
                        <div className="card" key={intern._id}>
                          <div className="internship">
                            <h3>{intern.title}</h3>
                            <p>{intern.organizationname}</p>
                            <div className="line"></div>
                          </div>
                          <div className="details">
                            <div className="span">
                              <GrLocation className="mt-1" />
                              <p>{intern.location}</p>
                            </div>
                            <div className="span">
                              <LiaMoneyBillSolid className="mt-1" />
                              <p>{intern.stipend}INR</p>
                            </div>
                            <div className="span">
                              <BsCalendar2Date className="mt-1" />
                              <p>{intern.duration}</p>
                            </div>
                          </div>
                          <div className="more">
                            <Link
                              className="link"
                              href={`/apply/internship/${intern._id}`}
                            >
                              View details
                              <MdOutlineKeyboardDoubleArrowRight
                                className="ml-3"
                                style={{ color: "#10C8CF", fontSize: "25px" }}
                              />
                            </Link>
                            <button onClick={appliedHandler}  className="btn btn-success">
              Applied
            </button>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default profile;
