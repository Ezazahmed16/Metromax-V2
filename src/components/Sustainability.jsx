import React from 'react';

const Sustainability = () => {
  return (
    <div className="">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 max-w-7xl mx-auto py-10 justify-center items-center">
        <div className="">
          <h1 style={{ borderLeft: '4px solid #4E0D38' }} className='text-xl md:text-3xl border-l-8 pl-5 text-justify'>
            SUSTAINABILITY
          </h1>
          <p className="mt-5 text-xl text-justify">
            MetroMax is committed to eco-friendly
            construction practices. We focus on reducing
            our carbon footprint and ensuring minimal
            environmental impact by incorporating
            energy-efficient technologies and green
            building materials.
          </p>
        </div>
        <div className="mx-auto">
          {/* <img src="" alt="" /> */}
          <video autoPlay loop style={{ width: '500px', height: '500px' }}>
            <source src="https://media.istockphoto.com/id/1424958606/video/salesman-offer-house-for-investment.mp4?s=mp4-640x640-is&k=20&c=jRlPXhZZy8z7WpoYLWpK9pGLRIAt5WjcrJuj7TpLX_I=" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
