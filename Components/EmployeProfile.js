"use client";
import React from "react";
import "./EmployeProfile.scss";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  asynccurrentemploye,
  asyncemployeavatar,
  asyncsignoutemploye,
  asynccreatejobs,
  asynccreateinternship,
} from "@/store/Actions/employeAction.js";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar.js";
import Link from "next/link";
import Footer from "@/Components/Footer.js";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { GrLocation } from "react-icons/gr";
import { BsCalendar2Date } from "react-icons/bs";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const profile = () => {
  const [title, setTitle] = useState("");
  const [skill, setSkill] = useState("");
  const [jobtype, setJobtype] = useState("Hibrid");
  const [internshiptype, setInternshiptype] = useState("Hibrid");
  const [openings, setOpenings] = useState();
  const [discription, setDiscription] = useState("");
  const [preference, setPreference] = useState("");
  const [organizationname, setOrganizationname] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState();
  const [perks, setPerks] = useState("");
  const [assesments, setAssesments] = useState("");
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [stipend, setStipend] = useState();
  const [duration, setDuration] = useState();
  const [responsibility, setResponsibility] = useState("");

  const [flag, setFlag] = useState(true);
  const [jobflag, setJobflag] = useState(true);
  const [internflag, setInternflag] = useState(true);
  const { employe, isAuthenticated } = useSelector(
    (state) => state.employeReducer
  );
  const jobs = employe?.jobs;
  const internships = employe?.internships;

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
    dispatch(asyncsignoutemploye());
    router.push("/");
  };

  const updateHandler = () => {
    router.push("/employe/profile/profileupdate");
  };

  const avatarHandler = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    formdata.set("avatar", e.target.avatar.files[0]);
    dispatch(asyncemployeavatar(formdata));
  };

  const resetpasswordHandler = () => {
    router.push("/employe/profile/resetpassword");
  };

  const jobHandler = async (e) => {
    e.preventDefault();

    const newJob = {
      organizationname,
      location,
      title,
      skill,
      jobtype,
      openings,
      discription,
      preference,
      salary,
      perks,
      assesments,
      duration,
    };
    await dispatch(asynccreatejobs(newJob));

    setJobflag(!jobflag);
  };
  const internshipHandler = async (e) => {
    e.preventDefault();

    const newInternship = {
      organizationname,
      location,
      title,
      skill,
      internshiptype,
      openings,
      to,
      from,
      duration,
      responsibility,
      stipend,
      perks,
      assesments,
    };
    await dispatch(asynccreateinternship(newInternship));
    console.log("hey there!!");
    setInternflag(!internflag);
  };

  useEffect(() => {
    if (!isAuthenticated) router.push("/employe");
  }, [employe]);

  return (
    <>
      <div className={jobflag ? "joblayout" : "joblayoutshow"}>
        <div className="createjob">
          <form onSubmit={jobHandler}>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              className="form-control mt-2"
              placeholder="Title"
            />
            <input
              onChange={(e) => setOrganizationname(e.target.value)}
              value={organizationname}
              type="text"
              className="form-control mt-2"
              placeholder="Organizationname"
            />
            <input
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              type="text"
              className="form-control mt-2"
              placeholder="Location"
            />
            <input
              onChange={(e) => setSkill(e.target.value)}
              value={skill}
              type="text"
              className="form-control mt-2"
              placeholder="Skills"
            />

            <input
              onChange={(e) => setOpenings(e.target.value)}
              value={openings}
              type="number"
              className="form-control mt-2"
              placeholder="Openings"
            />

            <input
              onChange={(e) => setSalary(e.target.value)}
              value={salary}
              type="number"
              className="form-control mt-2"
              placeholder="salary"
            />
            <input
              onChange={(e) => setDuration(e.target.value)}
              value={duration}
              type="text"
              className="form-control mt-2"
              placeholder="Duration"
            />
            <input
              onChange={(e) => setPreference(e.target.value)}
              value={preference}
              type="text"
              className="form-control mt-2"
              placeholder="Preference"
            />
            <input
              onChange={(e) => setPerks(e.target.value)}
              value={perks}
              type="text"
              className="form-control mt-2"
              placeholder="Perks"
            />
            <input
              onChange={(e) => setAssesments(e.target.value)}
              value={assesments}
              type="text"
              className="form-control mt-2"
              placeholder="Assesments"
            />
            <select
              className="form-control  mt-3"
              onChange={(e) => setJobtype(e.target.value)}
              value={jobtype}
            >
              <option value="Work From Office">Work From Office</option>
              <option value="Wrok From Home">Work From Home</option>
              <option value="Hibrid">Hibrid</option>
            </select>
            <textarea
              onChange={(e) => setDiscription(e.target.value)}
              value={discription}
              placeholder="discription here ....."
              className="form-control mt-3 "
            ></textarea>
            <button type="submit" className="btn btn-primary mt-3">
              Post Job
            </button>
          </form>
        </div>
      </div>
      <div className={internflag ? "internshiplayout" : "internshipshow"}>
        <div className="createinternship">
          <form onSubmit={internshipHandler}>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              className="form-control mt-2"
              placeholder="Title"
            />
            <input
              onChange={(e) => setOrganizationname(e.target.value)}
              value={organizationname}
              type="text"
              className="form-control mt-2"
              placeholder="Organizationname"
            />
            <input
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              type="text"
              className="form-control mt-2"
              placeholder="Location"
            />
            <input
              onChange={(e) => setSkill(e.target.value)}
              value={skill}
              type="text"
              className="form-control mt-2"
              placeholder="Skills"
            />

            <input
              onChange={(e) => setOpenings(e.target.value)}
              value={openings}
              type="number"
              className="form-control mt-2"
              placeholder="Openings"
            />
            <label>
              TO :
              <input
                onChange={(e) => setTo(e.target.value)}
                value={to}
                type="date"
                min={new Date().toLocaleDateString()}
                className="form-control mt-2"
                id="to"
              />
            </label>
            <label>
              From:
              <input
                onChange={(e) => setFrom(e.target.value)}
                value={from}
                type="date"
                min={new Date().toLocaleDateString()}
                className="form-control mt-2"
                id="from"
              />
            </label>

            <input
              onChange={(e) => setDuration(e.target.value)}
              value={duration}
              type="text"
              className="form-control mt-2"
              placeholder="Duration"
            />
            <input
              onChange={(e) => setPerks(e.target.value)}
              value={perks}
              type="text"
              className="form-control mt-2"
              placeholder="Perks"
            />
            <input
              onChange={(e) => setAssesments(e.target.value)}
              value={assesments}
              type="text"
              className="form-control mt-2"
              placeholder="Assesments"
            />
            <input
              onChange={(e) => setStipend(e.target.value)}
              value={stipend}
              type="number"
              className="form-control mt-2"
              placeholder="stipend"
            />
            <select
              className="form-control  mt-3"
              onChange={(e) => setInternshiptype(e.target.value)}
              value={internshiptype}
            >
              <option value="In office">Work From Office</option>
              <option value="Remote">Work From Home</option>
              <option value="Hibrid">Hibrid</option>
            </select>
            <textarea
              onChange={(e) => setResponsibility(e.target.value)}
              value={responsibility}
              placeholder="Responsibilities here ....."
              className="form-control mt-3 "
            ></textarea>
            <button type="submit" className="btn btn-primary mt-3">
              Post Internship
            </button>
          </form>
        </div>
      </div>
      <div>
        <NavBar />
        <div className="container">
          <div className="profile-header">
            <div className="profile-img">
              {!employe ? (
                <img
                  onClick={inputpicHandler}
                  src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJHtLNj7M2GqTtcijfgVGjSK5BWMLlI1Q8pPYNc6G6ZYMQyXUiPWQhK19MtmGh6A6POM&usqp=CAU`}
                  width="200"
                  alt="Profile Image"
                />
              ) : (
                <img
                  onClick={inputpicHandler}
                  src={employe.avatar.url}
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
              {!employe ? (
                <h3 className="user-name">Firstname Lastname</h3>
              ) : (
                <h3 className="user-name">
                  {employe?.firstname + " " + employe?.lastname}
                </h3>
              )}
              <div className="address">
                {!employe ? (
                  <p id="state" className="state">
                    City,
                  </p>
                ) : (
                  <p id="state" className="state">
                    {employe.city},
                  </p>
                )}
                <span id="country" className="country">
                  IDNIA.
                </span>
              </div>
            </div>
            <div className="profile-option">
              <div className="notification">
                {/* <i className="fa fa-bell"></i> */}
                <Link className="link" href="/">
                  Home
                </Link>
                {/* <span className="alert-message">3</span> */}
              </div>
            </div>
          </div>

          <div className="main-bd">
            <div className="left-side">
              <div className="profile-side">
                {!employe ? (
                  <p className="mobile-no">
                    <i className="fa fa-phone"></i> +91470xxxxx700
                  </p>
                ) : (
                  <p className="mobile-no">
                    <i className="fa fa-phone"></i>
                    {employe.contact}
                  </p>
                )}
                {!employe ? (
                  <p className="user-mail">
                    <i className="fa fa-envelope"></i>example@gmail.com
                  </p>
                ) : (
                  <p className="user-mail">
                    <i className="fa fa-envelope"></i>
                    {employe.email}
                  </p>
                )}
                <div className="user-bio">
                  <h3>Bio</h3>
                  {employe ? (
                    <p className="bio">
                      Hi, This is {employe.firstname + " " + employe.lastname}.
                      <br />
                      Location : {employe.city},<br />
                      Gender : {employe.gender},<br />
                      Organization : {employe.organizationname}.
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="profile-btn">
                  <button
                    onClick={signoutHandler}
                    className="chatbtn"
                    id="chatBtn"
                  >
                    <i className="fa fa-comment"></i>Signout
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
                  <li onClick={updateHandler} className="user-setting">
                    Update
                  </li>
                  <li onClick={resetpasswordHandler} className="user-setting">
                    Reset Password
                  </li>
                  <li
                    onClick={() => setJobflag(!jobflag)}
                    className="user-setting"
                  >
                    Create Jobs
                  </li>
                  <li
                    onClick={() => setInternflag(!internflag)}
                    className="user-setting"
                  >
                    Create Internships
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
                          </div>
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default profile;
