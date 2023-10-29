import React, { useEffect, useState, useRef } from "react";
import style from "./internships.module.scss";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { allinternships } from "@/store/Actions/internships_jobsAction.js";
import InfiniteScroll from "react-infinite-scroll-component";

const Internships = () => {
  const dispatch = useDispatch();
  // const [internshiparr, setInternshiparr] = useState([]);
  // const [value, setValue] = useState(1.2);
  // const [more, setMore] = useState(true);
  const { internships } = useSelector(
    (state) => state.internships_jobsReducers
  );
  // dispatch(allinternships(internshiparr.length));

  // const getInternships = async ()=>{
  //   dispatch(allinternships(internshiparr.length));

  //   internships?.length!=0 && setInternshiparr([...internshiparr, ...internships]);
  //   internships?.length < 4 && setMore(false);
  // }
  // console.log(internships);
  useEffect(() => {
    dispatch(allinternships());
  }, []);

  return (
    <>
      <div className={style.internships}>
        <div className={style.nav}>
          <h1>Latest internships on Jobs24 </h1>
        </div>
        {/* <InfiniteScroll
                  dataLength={internshiparr.length}
                  next={getInternships}
                  loader = {(value===0.8)?<h4 style={{ textAlign: "center" }}> Internships are loading... </h4>:""}
                  hasMore={more}
                  endMessage={
                    <p style={{ textAlign: "center" }}>
                      <b>Yay! You have seen it all</b>
                    </p>
                  }
                  scrollThreshold={value}
      > */}
        <div className={style.cards}>
          {internships &&
            internships.map((intern, index) => {
              return (
                <>
                  <div className={style.card} key={intern._id}>
                    <div className={style.internship}>
                      <h3>{intern.profile}</h3>
                      <p>microsoft</p>
                      <div className={style.line}></div>
                    </div>
                    <div className={style.details}>
                      <p>gurgaon</p>
                      <p>3,00,000 - 7,00,000/year</p>
                    </div>
                    <div className={style.more}>
                      <Link href={`/student/apply/${intern._id}`}>View details</Link>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
        {/* </InfiniteScroll> */}
      </div>
    </>
  );
};

export default Internships;
