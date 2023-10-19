import React from 'react'
import style from './NavBar.module.scss'
import Link from 'next/link'
const NavBar = () => {
  return (
    <>
      <div className={style.nav}>
        <div className={style.logo}>
          Logo
        </div>
        <div className={style.manu}>
          <Link className={style.link} href='/Home'>Home</Link>
          <Link className={style.link} href='/About'>About</Link>
          <Link className={style.link} href='/Candidate'>Candidate</Link>
          <Link className={style.link} href='/Employer'>Employer</Link>
        </div>
        <div className={style.authentication}>
        <i className="ri-user-add-fill"></i>
        <Link className={style.link} href='/Login'>Login</Link>
        <span>/</span>
        <Link className={style.link} href='/Register'>Register</Link>
        </div>

      </div>
    </>
  )
}

export default NavBar