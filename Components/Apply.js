'use client'
import React, {useEffect, useState} from 'react'
import './apply.scss';
import '@/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector} from "react-redux";
import {useRouter} from 'next/navigation';
import Link from "next/link";

const Apply = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const {student,isAuthenticated,internship} = useSelector(state=>state.studentReducer);

    console.log(student);
    // useEffect(()=>{
    //     if(!isAuthenticated) router.push("/student")
    //   },[student])

    return (
        <>
            <div className='contain'>
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
                    {internship && (!internship.students.includes(student?._id))?<button className="btn btn-primary">Apply</button>:<button className="btn btn-success">Applied</button>}
                </div>
            </div>
        </>
    )
}

export default Apply