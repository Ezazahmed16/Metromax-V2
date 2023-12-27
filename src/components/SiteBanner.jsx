'use client'
import React from 'react'
import style from '../style/SiteBanner.css'

const SiteBanner = () => {
  return (
    <div>
      <main className='main'>
        <div className='contents'>
{/* 
          <h1>Metromax</h1>
          <p>design and development limited </p>

          <div className='buttons'>
            <button>our work</button>
            <button>our story</button>
          </div> */}
        </div>
        <video
          src={require("../../public/assets/banner_bg_1.mp4")}
          autoPlay
          muted
          loop
          className='video'
        />
      </main>
    </div>
  )
}

export default SiteBanner