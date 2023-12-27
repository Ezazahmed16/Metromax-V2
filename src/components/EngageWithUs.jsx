import React from 'react'
import AnimationWrapper from './AnimationWrapper'
import { PiClockCountdownBold } from "react-icons/pi";
import { FaVideo } from 'react-icons/fa6';
import { TfiWrite } from "react-icons/tfi";

const EngageWithUs = () => {
    return (
        <div>
            <AnimationWrapper>
                <div className='max-w-7xl mx-auto my-10'>
                    <div className="py-10">
                        <div className="md:flex gap-5 items-center justify-center">
                            <h1 style={{ borderLeft: '8px solid #4E0D38' }} className='text-xl md:text-3xl font-semibold border-l-8 pl-5 text-justify'>
                                EXPLORE, CONNECT AND <br /> ENGAGE WITH US
                            </h1>
                            <div className="md:flex gap-5">
                                <div className="">
                                    <button>
                                        <PiClockCountdownBold className='w-20 h-20 mx-auto' />
                                        <h1 className='font-semibold'>BOOK A VIEWING</h1>
                                        Schedule a visit to our show apartment
                                    </button>
                                </div>
                                <div className="">
                                    <button>
                                        <FaVideo  className='w-20 h-20 mx-auto' />
                                        <h1 className='font-semibold'>SALES VIDEO CALL</h1>
                                        Talk to one of our sales expert                                    </button>
                                </div>
                                <div className="">
                                    <button>
                                        <TfiWrite  className='w-20 h-20 mx-auto' />
                                        <h1 className='font-semibold'>REGISTER YOUR INTEREST</h1>
                                        Register your interest in our properties
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimationWrapper>

        </div>
    )
}

export default EngageWithUs