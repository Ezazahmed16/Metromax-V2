import React from 'react';

const OurMission = () => {
  return (
    <div>
      <div style={{ backgroundColor: '#8b2e47' }}>

        <div className="grid md:grid-cols-2 justify-center items-start max-w-7xl mx-auto">
          <div className=" mx-auto text-white p-10">
            <h1 style={{ borderLeft: '4px solid #ffffff' }} className='text-5xl mb-5 pl-5'>
              Our Mission
            </h1>
            <p className='text-justify'>
              We want to change how we live by making special and creative buildings that last a really long time. We&apos;re the first ones doing this and we&lsquo;re focused on building neighborhoods that not only improve how people live but also make new and exciting ways to enjoy really nice living.
            </p>
          </div>

          <div className=" mx-auto text-white p-10">
            <h1 style={{ borderLeft: '4px solid #ffffff' }} className='text-5xl mb-5 pl-5'>Our Vision</h1>
            <p className='text-justify'>
              Our vision at MetroMax is to set the benchmark in crafting spaces that
              are innovative, sustainable, and visually stunning. We are dedicated to
              meeting the practical needs of our clients while enriching their lives
              through our unique designs. Our goal is to continually push the
              boundaries of what&apos;s possible in the construction and real estate
              industry, delivering superior value to our customers and positively
              impacting the communities we serve.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OurMission;
