import OurProperties from '@/components/OurProperties'
import React from 'react'

const page = () => {
    return (
        <div>
            <div className="hero h-96 image-full" style={{ backgroundImage: 'url(https://i.ibb.co/QPQBYcr/pro.jpg)' }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content w-full text-white">
                    <div className="w-full mt-64">
                        <h1 className="mb-5 text-5xl">Our Properties</h1>
                    </div>
                </div>
            </div>
            <div className="">
                <OurProperties />
            </div>
        </div>
    )
}

export default page