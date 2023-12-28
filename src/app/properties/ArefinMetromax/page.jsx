import ArefinMetromax from '@/components/ArefinMetromax'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="">
        <div className="hero image-full" style={{ backgroundImage: 'url(https://i.ibb.co/vQmYz59/Whats-App-Image-2023-12-25-at-16-12-30-c26a6ae3.jpg)',height: '520px'  }}>
          <div className="hero-overlay bg-opacity-70"></div>
          <div className="hero-content w-full text-white">
            <div className="w-full mt-64">
              <h1 className="mb-5 text-5xl">Arefin&rsquo;s Elysium By Metromax</h1>
            </div>
          </div>
        </div>
      </div>
      <ArefinMetromax />
    </div>
  )
}

export default page