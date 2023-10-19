import React from 'react'
import style from './Jobs.module.scss';
const Jobs = () => {
  const jobs = [{img : 'https://th.bing.com/th/id/OIP.RW3UU9NmBvNfojWZkmgauQHaHa?pid=ImgDet&rs=1',title : "Designer",vacancee : "2"},{img : 'https://th.bing.com/th/id/OIP.3L49s352ig0Dtql7WQKXkwHaHa?pid=ImgDet&rs=1',title : "Educator",vacancee : "8"},{img : 'https://th.bing.com/th/id/OIP.sKhABqiowdabXHIYtxBV3gAAAA?pid=ImgDet&rs=1',title : "Health and Care",vacancee : "76"},{img : 'https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/4b/a6/d5/4ba6d520-d509-12ae-a6d5-84baed4b9be4/source/512x512bb.jpg',title : "Marketing",vacancee : "99"}]
  return (
    <>
    <div className={style.jobs}>
      {
        jobs.map(job=><div className={style.job}>
          <div className={style.pic}>
              <img src={job.img} alt="" />
          </div>
          <div className={style.details}>
              <h2>{job.title}</h2>
              <p>{job.vacancee} Opening</p>
          </div>
      </div>)
      }
    </div>
    </>
  )
}

export default Jobs