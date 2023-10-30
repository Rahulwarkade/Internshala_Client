import React, { useEffect } from "react";
import style from "./Jobs.module.scss";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { alljobs } from "@/store/Actions/internships_jobsAction.js";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { GrLocation } from "react-icons/gr";
import { BsCalendar2Date } from "react-icons/bs";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { ColorRing } from "react-loader-spinner";

const Jobs = () => {
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.internships_jobsReducers);
  useEffect(() => {
    dispatch(alljobs());
  }, []);
  var job = (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{ position: "absolute", left: "50%", top: "-90%" }}
      wrapperClass="blocks-wrapper"
      colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
    />
  );
  if (jobs) {
    job = jobs.map((job) => {
      return (
        <>
          <div key={job._id} className={style.card}>
            <div className={style.job}>
              <h3>{job.title}</h3>
              <p>{job.organizationname}</p>
              <div className={style.line}></div>
            </div>
            <div className={style.details}>
              <div className={style.span}>
                <GrLocation className="mt-1" />
                <p>{job.location}</p>
              </div>
              <div className={style.span}>
                <LiaMoneyBillSolid className="mt-1" />
                <p>{job.slary}INR</p>
              </div>
              <div className={style.span}>
                <BsCalendar2Date className="mt-1" />
                <p>{job.duration}</p>
              </div>
            </div>
            <div className={style.more}>
              <Link className={style.link} href={`/student/apply/${job._id}`}>
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
    });
  }
  return (
    <>
      <div className={style.jobs}>
        <div className={style.nav}>
          <h1>
            Latest Jobs on <span> Jobzz24</span>{" "}
          </h1>
        </div>
        <div className={style.cards}>{job}</div>
      </div>
    </>
  );
};

export default Jobs;
