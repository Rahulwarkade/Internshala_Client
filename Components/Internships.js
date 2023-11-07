import React, { useEffect, useState, useRef } from "react";
import style from "./internships.module.scss";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { allinternships } from "@/store/Actions/internships_jobsAction.js";
import InfiniteScroll from "react-infinite-scroll-component";
import { ColorRing } from "react-loader-spinner";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { GrLocation } from "react-icons/gr";
import { BsCalendar2Date } from "react-icons/bs";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
const Internships = () => {
  const dispatch = useDispatch();
  const { internships } = useSelector(
    (state) => state.internships_jobsReducers
  );

  useEffect(() => {
    dispatch(allinternships());
  }, []);

  var intern = (
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

  if (internships) {
    intern = internships.map((intern, index) => {
      return (
        <>
          <div className={style.card} key={intern._id}>
            <div className={style.internship}>
              <h3>{intern.title}</h3>
              <p>{intern.organizationname}</p>
              <div className={style.line}></div>
            </div>
            <div className={style.details}>
              <div className={style.span}>
                <GrLocation className="mt-1" />
                <p>{intern.location}</p>
              </div>
              <div className={style.span}>
                <LiaMoneyBillSolid className="mt-1" />
                <p>{intern.stipend}INR</p>
              </div>
              <div className={style.span}>
                <BsCalendar2Date className="mt-1" />
                <p>{intern.duration}</p>
              </div>
            </div>
            <div className={style.more}>
              <Link
                className={style.link}
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
    });
  }
  return (
    <>
      <div className={style.internships}>
        <div className={style.nav}>
          <h1>
            Latest internships on <span> jobzz24 </span>
          </h1>
        </div>
        <div className={style.cards}>{intern}</div>
      </div>
    </>
  );
};

export default Internships;
