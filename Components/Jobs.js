import React,{useEffect} from 'react'
import style from './Jobs.module.scss';
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import { alljobs } from "@/store/Actions/internships_jobsAction.js";

const Jobs = () => {
  const dispatch = useDispatch();
  const { jobs } = useSelector(
    (state) => state.internships_jobsReducers
  );
  useEffect(() => {
    dispatch(alljobs());
  }, []);
  return (
    <>
    <div className={style.jobs}>
      <div className={style.nav}>
        <h1>Latest Jobs on Jobs24 </h1>
      </div>
      <div className={style.cards}>
          {jobs && jobs.map((job)=>{
            return <> 
                         <div key = {job._id} className={style.card}>
            <div className={style.job}>
              <h3>{job.title}</h3>
              <p>microsoft</p>
              <div className={style.line}>
              </div>
            </div>
          <div className={style.details}>
            <p>gurgaon</p>
            <p>3,00,000 - 7,00,000/year</p>
          </div>
          <div className={style.more}>
            <Link href="#">View details</Link>
          </div>
       </div>

            </>
          })}
      </div>
    </div>  
    </>
  )
}

export default Jobs