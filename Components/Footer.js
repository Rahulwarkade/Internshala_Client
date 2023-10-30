import React from 'react'
import Link from 'next/link'
import {ImFacebook2} from 'react-icons/im';
import {ImTwitter} from 'react-icons/im';
import {ImLinkedin} from 'react-icons/im';
import {FaSquareInstagram} from 'react-icons/fa6';
const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="foot">
                <div className="foot-one">
                    <div className="logo">
                        <img src="#" alt="" />
                    </div>
                    <div className="social">
                        <h3>Connect with us</h3>
                        <div className="social-icons">
                                <div className="facebook">
                                    <ImFacebook2/>
                                </div>
                                <div className="insta">
                                    <FaSquareInstagram/>
                                </div>
                                <div className="tiw">
                                    <ImTwitter/>
                                </div>
                                <div className="linked">
                                    <ImLinkedin/>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="foot-two">
                    <Link href="#">About us</Link>
                    <Link href="#">Careers</Link>
                    <Link href="#">Employer home</Link>
                    <Link href="#">Sitemap</Link>
                </div>
                <div className="foot-three">
                <Link href="#">Help center</Link>
                    <Link href="#">Notices</Link>
                    <Link href="#">Grievances</Link>
                    <Link href="#">Report issue</Link>
                </div>
                <div className="foot-four">
                <Link href="#">Privacy policy</Link>
                    <Link href="#">Terms & conditions</Link>
                    <Link href="#">Fraud alert</Link>
                    <Link href="#">Trust & safety</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer