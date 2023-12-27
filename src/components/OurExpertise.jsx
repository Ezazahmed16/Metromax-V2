import React from 'react'
import { MdOutlineDeveloperBoard, MdOutlineSettingsBackupRestore } from "react-icons/md";
import { SiPolymerproject } from "react-icons/si";


const OurExpertise = () => {
    return (
        <div style={{ backgroundColor: '#8C2452' }}>
            <div className="max-w-7xl mx-auto p-5">
                <h1 style={{ borderLeft: '4px solid #ffffff' }} className='text-4xl text-white mb-5 pl-5'>OUR EXPERTISE</h1>
                <div className="mt-5 text-white grid md:grid-cols-3 grid-cols-1 gap-5">

                    <div className="flex justify-center items-start gap-3 p-5 border-2 border-accent shadow-2xl rounded-lg">
                        <div className="">
                            <MdOutlineSettingsBackupRestore className='w-16 h-16' />
                        </div>
                        <div className="">
                            <h1>PROJECT DEVELOPMENT CONSULTANCY
                            </h1>
                            <p className='text-xs text-justify mt-3'>
                                Our expert team is on hand to help provide you with guidance and support as required through strategic consultancy, no matter the size of the development. Our highly experienced team has worked across some of the leading Residential, Commercial and Industrial Projects in the UAE and has extensive knowledge in real estate development, planning, financing, construction, contracting and sales and marketing.
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center items-start gap-3 p-5 border-2 border-accent shadow-2xl rounded-lg">
                        <div className="">
                            <MdOutlineDeveloperBoard className='w-16 h-16' />
                        </div>
                        <div className="">
                            <h1>ASSET MANAGEMENT & HOSPITALITY
                            </h1>
                            <p className='text-xs text-justify mt-3'>
                                Our expert team is on hand to help provide you with guidance and support as required through strategic consultancy, no matter the size of the development. Our highly experienced team has worked across some of the leading Residential, Commercial and Industrial Projects in the UAE and has extensive knowledge in real estate development, planning, financing, construction, contracting and sales and marketing.
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center items-start gap-3 p-5 border-2 border-accent shadow-2xl rounded-lg">
                        <div className="">
                            <SiPolymerproject className='w-16 h-16' />
                        </div>
                        <div className="">
                            <h1>PROJECT MANAGEMENT
                            </h1>
                            <p className='text-xs text-justify mt-3'>
                                Our expert team is on hand to help provide you with guidance and support as required through strategic consultancy, no matter the size of the development. Our highly experienced team has worked across some of the leading Residential, Commercial and Industrial Projects in the UAE and has extensive knowledge in real estate development, planning, financing, construction, contracting and sales and marketing.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OurExpertise