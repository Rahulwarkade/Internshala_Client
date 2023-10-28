'use client'
import React from 'react';
import './EmployeProfile.scss';
import { useEffect, useRef, useState } from 'react';
import ReactDOM from "react-dom/client";
import { asynccurrentemploye, asyncemployeavatar, asyncsignoutemploye } from "@/store/Actions/employeAction.js"
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/navigation';
import 'remixicon/fonts/remixicon.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar.js";
import Link from "next/link";

const profile = () => {
  const [title, setTitle] = useState("");
  const [skill, setSkill] = useState("");
  const [jobtype, setJobtype] = useState("Hibrid");
  const [openings,setOpenings] = useState();
  const [discription,setDiscription] = useState("");
  const [preference,setPreference] = useState("");
  const [salary,setSalary] = useState();
  const [perks,setPerks] = useState("");
  const [assesments,setAssesment] = useState("");

  const [flag, setFlag] = useState(true);
  const { employe, isAuthenticated } = useSelector(state => state.employeReducer);
  const jobs = employe?.jobs;
  const internships = employe?.internships;

  const inputpic = useRef();
  const pic = useRef();
  const submit = useRef();
  const dispatch = useDispatch();
  const router = useRouter();


  const inputpicHandler = () => {
    inputpic.current.click();
  }

  const submitHandler = () => {
    submit.current.click();
  }
  const signoutHandler = () => {
    dispatch(asyncsignoutemploye());
    router.push('/');
  }

  const updateHandler = () => {
    router.push('/employe/profile/profileupdate')
  }

  const avatarHandler = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    formdata.set("avatar", e.target.avatar.files[0]);
    dispatch(asyncemployeavatar(formdata));
  }

  const resetpasswordHandler = () => {
    router.push('/employe/profile/resetpassword')
  }

  const jobHandler = () => {

  }
  const internshipHandler = () => {

  }

  useEffect(() => {
    if (!isAuthenticated) router.push("/employe")
  }, [employe])

  return <>
    <div className="joblayout">
      <div className="createjob">
      <form onSubmit={submitHandler}>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            className="form-control mt-5"
            placeholder="Title"
          />
          <input
            onChange={(e) => setSkill(e.target.value)}
            value={skill}
            type="text"
            className="form-control mt-5"
            placeholder="Skills"
          />
                    <select
            className="form-control  mt-3"
            onChange={(e) => setJobtype(e.target.value)}
            value={jobtype}
          >
            <option value="In office">In office</option>
            <option value="Remote">Remote</option>
            <option value="Hibrid">Hibrid</option>
          </select>
          <input
            onChange={(e) => setOpenings(e.target.value)}
            value={openings}
            type="number"
            className="form-control mt-5"
            placeholder="Openings"
          />
          <textarea
            onChange={(e) => setDiscription(e.target.value)}
            value={discription}
            name="task"
            id="task"
            placeholder="discription here ....."
            className="form-control mt-3 "
          ></textarea>
                    <input
            onChange={(e) => setSalary(e.target.value)}
            value={salary}
            type="number"
            className="form-control mt-5"
            placeholder="Skills"
          />
                    <input
            onChange={(e) => setPreference(e.target.value)}
            value={preference}
            type="text"
            className="form-control mt-5"
            placeholder="Preference"
          />
                    <input
            onChange={(e) => setPerks(e.target.value)}
            value={perks}
            type="text"
            className="form-control mt-5"
            placeholder="Perks"
          />
                    <input
            onChange={(e) => setAssesments(e.target.value)}
            value={assesments}
            type="text"
            className="form-control mt-5"
            placeholder="Assesments"
          />
          <button type="submit" className="btn btn-primary mt-3">
            Post Job
          </button>
        </form>
      </div>
    </div>
    <div className="container">
      <div className="profile-header">
        <div className="profile-img">
          {(!employe) ? <img onClick={inputpicHandler} src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJHtLNj7M2GqTtcijfgVGjSK5BWMLlI1Q8pPYNc6G6ZYMQyXUiPWQhK19MtmGh6A6POM&usqp=CAU`} width="200" alt="Profile Image" /> : <img onClick={inputpicHandler} src={employe.avatar.url} width="200" alt="Profile Image" />}
          <form onSubmit={avatarHandler} id="hidden" encType="multipart/form-data">
            <input ref={inputpic} onChange={submitHandler} type="file" name="avatar" />
            <button ref={submit} type="submit" > submit </button>
          </form>
        </div>
        <div className="profile-nav-info">
          {(!employe) ? <h3 className="user-name">Firstname Lastname</h3> : <h3 className="user-name">{employe?.firstname + " " + employe?.lastname}</h3>}
          <div className="address">
            {(!employe) ? <p id="state" className="state">City,</p> : <p id="state" className="state">{employe.city},</p>}
            <span id="country" className="country">IDNIA.</span>
          </div>

        </div>
        <div className="profile-option">
          <div className="notification">
            {/* <i className="fa fa-bell"></i> */}
            <Link className="link" href='/'>Home</Link>
            {/* <span className="alert-message">3</span> */}
          </div>
        </div>
      </div>

      <div className="main-bd">
        <div className="left-side">
          <div className="profile-side">
            {(!employe) ? <p className="mobile-no"><i className="fa fa-phone"></i> +91470xxxxx700</p> : <p className="mobile-no"><i className="fa fa-phone"></i>{employe.contact}</p>}
            {(!employe) ? <p className="user-mail"><i className="fa fa-envelope"></i>example@gmail.com</p> : <p className="user-mail"><i className="fa fa-envelope"></i>{employe.email}</p>}
            <div className="user-bio">
              <h3>Bio</h3>
              <p className="bio">
                Lorem ipsum dolor sit amet, hello how consectetur adipisicing elit. Sint consectetur provident magni yohoho consequuntur, voluptatibus ghdfff exercitationem at quis similique. Optio, amet!
              </p>
            </div>
            <div className="profile-btn">
              <button onClick={signoutHandler} className="chatbtn" id="chatBtn"><i className="fa fa-comment"></i>Signout</button>
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
              <li onClick={() => { setFlag(true) }} className="user-post active">Jobs</li>
              <li onClick={() => { setFlag(false) }} className="user-review">Internships</li>
              <li onClick={updateHandler} className="user-setting">Update</li>
              <li onClick={resetpasswordHandler} className="user-setting">Reset Password</li>
              <li onClick={jobHandler} className="user-setting">Create Jobs</li>
              <li onClick={internshipHandler} className="user-setting">Create Internships</li>
            </ul>
          </div>

          <div className={(flag) ? "cards" : "hid"}>
            {jobs && jobs.map((job) => {
              return (
                <>
                  <div className="card">
                    <div className="internship">
                      <h3>{job.title}</h3>
                      <p>microsoft</p>
                      <div className="line"></div>
                    </div>
                    <div className="details">
                      <p>gurgaon</p>
                      <p>3,00,000 - 7,00,000/year</p>
                    </div>
                    <div className="more">
                      <Link href="#">View details</Link>
                    </div>
                  </div>
                </>)
            })}
          </div>
          <div className={(!flag) ? "cards" : "hid"}>
            {internships && internships.map((intern) => {
              return (
                <>
                  <div className="card">
                    <div className="internship">
                      <h3>{intern.profile}</h3>
                      <p>microsoft</p>
                      <div className="line"></div>
                    </div>
                    <div className="details">
                      <p>gurgaon</p>
                      <p>3,00,000 - 7,00,000/year</p>
                    </div>
                    <div className="more">
                      <Link href="#">View details</Link>
                    </div>
                  </div>
                </>)
            })}
          </div>

        </div>
      </div>
    </div>

  </>
}

export default profile;