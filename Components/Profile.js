'use client'
import React from 'react';
import './Profile.scss';
import { useEffect } from 'react';
import {asyncsignoutstudent} from "@/store/Actions/studentAction.js"
import { useDispatch, useSelector} from "react-redux";
import {useRouter} from 'next/navigation';
import 'remixicon/fonts/remixicon.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar.js";
import Link from "next/link";

const profile = ()=>{
    const {student} = useSelector(state=>state.studentReducer);

    const dispatch = useDispatch();
    const router = useRouter();
    const signoutHandler = ()=>{
        dispatch(asyncsignoutstudent());
        router.push('/');
    }

    const updateHandler = ()=>{
      router.push('/student/auth/profileupdate')
    }

    useEffect(()=>{},[student])

    return <>
    <div className="container">
  <div className="profile-header">
    <div className="profile-img">
      {(!student)?<img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJHtLNj7M2GqTtcijfgVGjSK5BWMLlI1Q8pPYNc6G6ZYMQyXUiPWQhK19MtmGh6A6POM&usqp=CAU`} width="200" alt="Profile Image"/>:<img src={student.avatar.url} width="200" alt="Profile Image"/>}
    </div>
    <div className="profile-nav-info">
      {(!student)?<h3 className="user-name">Firstname Lastname</h3>:<h3 className="user-name">{student?.firstname +" "+ student?.lastname}</h3>}
      <div className="address">
        {(!student)?<p id="state" className="state">City,</p>:<p id="state" className="state">{student.city},</p>}
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
        {(!student)?<p className="mobile-no"><i className="fa fa-phone"></i> +91470xxxxx700</p>:<p className="mobile-no"><i className="fa fa-phone"></i>{student.contact}</p>}
        {(!student)?<p className="user-mail"><i className="fa fa-envelope"></i>example@gmail.com</p>:        <p className="user-mail"><i className="fa fa-envelope"></i>{student.email}</p>}
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
          <li  className="user-post active">Jobs</li>
          <li  className="user-review">Internships</li>
          <li onClick={updateHandler}  className="user-setting">Update</li>
        </ul>
      </div>
      <div className="profile-body">
        <div className="profile-posts tab">
          <h1>Your Post</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quia sunt itaque ut libero cupiditate ullam qui velit laborum placeat doloribus, non tempore nisi ratione error rem minima ducimus. Accusamus adipisci quasi at itaque repellat sed
            magni eius magnam repellendus. Quidem inventore repudiandae sunt odit. Aliquid facilis fugiat earum ex officia eveniet, nisi, similique ad ullam repudiandae molestias aspernatur qui autem, nam? Cupiditate ut quasi iste, eos perspiciatis maiores
            molestiae.</p>
        </div>
        <div className="profile-reviews tab">
          <h1>User reviews</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam pariatur officia, aperiam quidem quasi, tenetur molestiae. Architecto mollitia laborum possimus iste esse. Perferendis tempora consectetur, quae qui nihil voluptas. Maiores debitis
            repellendus excepturi quisquam temporibus quam nobis voluptatem, reiciendis distinctio deserunt vitae! Maxime provident, distinctio animi commodi nemo, eveniet fugit porro quos nesciunt quidem a, corporis nisi dolorum minus sit eaque error
            sequi ullam. Quidem ut fugiat, praesentium velit aliquam!</p>
        </div>
        <div className="profile-settings tab">
          <div className="account-setting">
            <h1>Acount Setting</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit omnis eaque, expedita nostrum, facere libero provident laudantium. Quis, hic doloribus! Laboriosam nemo tempora praesentium. Culpa quo velit omnis, debitis maxime, sequi
              animi dolores commodi odio placeat, magnam, cupiditate facilis impedit veniam? Soluta aliquam excepturi illum natus adipisci ipsum quo, voluptatem, nemo, commodi, molestiae doloribus magni et. Cum, saepe enim quam voluptatum vel debitis
              nihil, recusandae, omnis officiis tenetur, ullam rerum.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
}

export default profile;