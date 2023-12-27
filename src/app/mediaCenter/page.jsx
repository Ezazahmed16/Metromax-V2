import CommingSoon from '@/components/CommingSoon'
import React from 'react'

const page = () => {
    return (
        <div>
            <div className="hero h-96 image-full" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2020/03/21/20/03/real-estate-4955087_640.jpg)' }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content w-full text-white">
                    <div className="w-full mt-64">
                        <h1 className="mb-5 text-5xl">Media Center</h1>
                    </div>
                </div>
            </div>
            <div className="">
                <CommingSoon />
            </div>
        </div>
    )
}

export default page