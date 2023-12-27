import React from 'react'
import AnimationWrapper from './AnimationWrapper'
import { FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image';
import Link from 'next/link';

const LatestProjects = () => {
    return (
        <div>
            <AnimationWrapper>
                <div className='max-w-7xl mx-auto my-10'>
                    <div className="py-10">
                        <div className="">
                            <h1 style={{ borderLeft: '8px solid #4E0D38' }} className='text-xl md:text-3xl font-semibold border-l-8 pl-5 text-justify'>
                                LATEST PROPERTIES
                            </h1>
                        </div>
                        <div className="">
                            <div className="py-6">
                                <div className="container flex flex-col justify-center p-4 mx-auto">
                                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">

                                        <div className="group h-fit relative">
                                            <Image
                                                src="/projects/p1.jpg"
                                                className='object-cover w-full aspect-square rounded-lg'
                                                width={300}
                                                height={100}
                                                alt="Picture of the author"
                                            />

                                            <div className="absolute inset-0 bg-black/70 flex items-end justify-around opacity-0 transition-all duration-300 group-hover:opacity-100 text-white">
                                                <h1 className='pb-6'>
                                                    Metromax south Breeze
                                                </h1>
                                                <Link href='/properties/SouthMetromax'>
                                                    <button className='btn btn-accent btn-outline mb-3'>
                                                        More Info <FaArrowRightLong />
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="group h-fit relative">
                                            <Image
                                                src="/projects/p2-1.jpg"
                                                className='object-cover w-full aspect-square rounded-lg'
                                                width={300}
                                                height={100}
                                                alt="Picture of the author"
                                            />
                                            <div className="absolute inset-0 bg-black/70 flex items-end justify-around opacity-0 transition-all duration-300 group-hover:opacity-100 text-white">
                                                <h1 className='pb-6'>
                                                    Metromax Arefin&rsquo;s Elysium
                                                </h1>
                                                <Link href='/properties/ArefinMetromax'>
                                                    <button className='btn btn-accent btn-outline mb-3'>
                                                        More Info <FaArrowRightLong />
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="group h-fit relative">
                                            <img className="object-cover w-full aspect-square rounded-lg" src="https://img.freepik.com/premium-photo/high-buildings-with-cloudy-blue-sky_341545-530.jpg?size=626&ext=jpg&ga=GA1.1.1389451345.1700558843&semt=sph" alt='' />

                                            <div className="absolute inset-0 bg-black/70 flex items-end justify-around opacity-0 transition-all duration-300 group-hover:opacity-100 text-white">
                                                <h1 className='pb-6'>
                                                    Comming Soon
                                                </h1>
                                                <button className='btn btn-accent btn-outline mb-3'>
                                                    More Info <FaArrowRightLong />
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimationWrapper>
        </div>
    )
}

export default LatestProjects