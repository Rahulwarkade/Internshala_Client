import React from 'react'
import style from './internships.module.scss';
import Link from 'next/link';
const Internships = () => {

  return (
    <>
    <div className={style.internships}>
      <div className={style.nav}>
        <h1>Latest internships on Jobs24 </h1>
      </div>
      <div className={style.cards}>
     <div className={style.card}>
            <div className={style.internship}>
              <h3>software engineer</h3>
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
     <div className={style.card}>
            <div className={style.internship}>
              <h3>software engineer</h3>
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
     <div className={style.card}>
            <div className={style.internship}>
              <h3>software engineer</h3>
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
     <div className={style.card}>
            <div className={style.internship}>
              <h3>software engineer</h3>
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
     <div className={style.card}>
            <div className={style.internship}>
              <h3>software engineer</h3>
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
      </div>
    </div>  
    </>
  )
}

export default Internships