import ArefinMetromax from '@/components/ArefinMetromax'
import SouthMetromaxComponent from '@/components/SouthMetromaxComponent'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="">
        <div className="hero image-full" style={{ backgroundImage: 'url(https://i.ibb.co/MRppB9t/Whats-App-Image-2023-12-25-at-16-11-44-34ab378f.jpg)', height: '520px' }}>
          <div className="hero-overlay bg-opacity-70"></div>
          <div className="hero-content w-full text-white">
            <div className="w-full mt-64">
              <h1 className="mb-5 text-5xl">South Breeze By Metromax</h1>
            </div>
          </div>
        </div>
      </div>
      <SouthMetromaxComponent />
    </div>
  )
}

export default page