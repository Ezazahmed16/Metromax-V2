'use client'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const SouthMetromaxComponent = () => {

  return (
    <div>
      <div className="max-w-7xl mx-auto py-10">

        <div className="">
          <div className='max-w-7xl mx-auto my-10'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-around min-h-screen">
              <div className="">
                <h1 style={{ borderLeft: '4px solid #4E0D38' }} className='text-xl md:text-3xl border-l-8 pl-5 text-justify'>
                  ABOUT THE PROJECT</h1>
                <p className="mt-5 text-xl">
                  Building height : G+5 <br />
                  Project status : Ongoing <br />
                  Project starts from : 01/04/2021 <br />
                  Project tentative F.time : 01/04/2024

                </p>
              </div>
              <div className="">
                <img src='https://i.ibb.co/HNYYypM/Whats-App-Image-2023-12-17-at-16-48-42-8deb12d8.jpg' alt="" className="w-screen md:w-full h-screen rounded-xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid  grid-cols-1 md:grid-cols-2 gap-5 h-screen">
          <div className="">
            <h1 style={{ borderLeft: '4px solid #4E0D38' }} className='text-xl md:text-3xl border-l-8 pl-5 text-justify mb-10'>
              INTERIOR</h1>

            <div className="">
              <AwesomeSlider>
                <div>
                  <img src='https://i.ibb.co/HNYYypM/Whats-App-Image-2023-12-17-at-16-48-42-8deb12d8.jpg' alt="" className="w-screen md:w-full h-96 rounded-xl" />
                </div>
                <div>
                  <img src='https://i.ibb.co/F4t9KWV/Whats-App-Image-2023-12-17-at-16-48-56-23f57237.jpg' alt="" className="w-screen md:w-full h-96 rounded-xl" />
                </div>
                <div>
                  <img src='https://i.ibb.co/F4t9KWV/Whats-App-Image-2023-12-17-at-16-48-56-23f57237.jpg' alt="" className="w-screen md:w-full h-96 rounded-xl" />
                </div>
                <div>
                  <img src='https://i.ibb.co/J2HK0x6/Whats-App-Image-2023-12-17-at-16-48-43-85bce390.jpg' alt="" className="w-screen md:w-full h-96 rounded-xl" />
                </div>
              </AwesomeSlider>
            </div>
          </div>

          <div className="">
            <h1 style={{ borderLeft: '4px solid #4E0D38' }} className='text-xl md:text-3xl border-l-8 pl-5 text-justify mb-10'>
              EXTERIOR</h1>

            <div className="">
              <AwesomeSlider>
                <div className=''>
                  <img src='https://i.ibb.co/GvhpcKB/1.jpg' alt="" className="w-screen md:w-full h-96 rounded-xl" />
                </div>
                <div>
                  <img src='https://i.ibb.co/cN3M2m5/2.jpg' alt="" className="w-screen md:w-full h-96 rounded-xl" />
                </div>
                <div>
                  <img src='https://i.ibb.co/n8WbTLn/4.jpg' alt="" className="w-screen md:w-full h-96 rounded-xl" />
                </div>
                <div>
                  <img src='https://i.ibb.co/4SBCfWN/3.jpg' alt="" className="w-screen md:w-full h-96 rounded-xl" />
                </div>
                <div>
                  <img src='https://i.ibb.co/1qMCDDF/5.jpg' alt="" className="w-screen md:w-full h-96 rounded-xl" />
                </div>
                <div>
                  <img src='https://i.ibb.co/KsbzRQg/6.jpg' alt="" className="w-screen md:w-full h-96 rounded-xl" />
                </div>
              </AwesomeSlider>
            </div>
          </div>
        </div>

        <div className="">
          <h1 style={{ borderLeft: '4px solid #4E0D38' }} className='text-xl md:text-3xl border-l-8 pl-5 text-justify'>
            AMENITIES</h1>

          <div className="">
            <div className="">

              {/* <figure className="flex-all rounded mb-15 m-side-auto">
                <img alt="" src="https://imtiaz.ae/uploads/facility/3/Fully-Furnished.svg" />
              </figure> */}

            </div>
          </div>
        </div>

      </div>
    </div >
  )
}

export default SouthMetromaxComponent