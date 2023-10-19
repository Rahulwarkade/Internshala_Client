import React from 'react'
import style from './Welcome.module.scss'
const Welcome = () => {
  return (
    <>
    <div className={style.center}>
        <div className={style.left}>
          <h1>Find the best job </h1>
          <h4>Search from 1500+ Jobs </h4>
          <div id={style.search}>
              <input
                type="text"
                placeholder="Search here..."
              />
              <i className="ri-search-line"></i>       
            </div>
        </div>
        <div className={style.right}>
            <img src="https://www.qservicesit.com/wp-content/uploads/2022/08/girl-with-background.webp" alt="" />
        </div>
    </div>
    </>
  )
}

export default Welcome