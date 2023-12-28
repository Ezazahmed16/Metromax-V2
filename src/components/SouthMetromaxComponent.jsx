import React from 'react'

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
            <h1 style={{ borderLeft: '4px solid #4E0D38' }} className='text-xl md:text-3xl border-l-8 pl-5 text-justify'>
              INTERIOR</h1>

            <div className="">
              
            </div>
          </div>

          <div className="">
            <h1 style={{ borderLeft: '4px solid #4E0D38' }} className='text-xl md:text-3xl border-l-8 pl-5 text-justify'>
              EXTERIOR</h1>

              <div className="">
                
              </div>
          </div>
        </div>

      </div>
    </div >
  )
}

export default SouthMetromaxComponent