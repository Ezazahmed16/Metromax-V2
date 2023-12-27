import Image from 'next/image'
import Link from 'next/link';
import { FaMapLocationDot } from "react-icons/fa6";

const OurProperties = () => {
    return (
        <div className='max-w-7xl mx-auto py-10'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                <div className="card card-compact bg-base-100 shadow-2xl rounded-xl">
                    <figure style={{ height: '300px', width: '400px', margin: 'auto' }} className=''>
                        <Image src="/projects/p2.jpg" alt="Shoes" height={300} width={400} className='rounded-xl' loading="lazy" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">South Breeze By Metromax</h2>
                        <div className='flex gap-3 justify-center items-center'>
                            <FaMapLocationDot className='h-12 w-12' />
                            <p>House-63/64,Road no-04,Block-Ta,Section-06
                                Rupnagar,Mirpur,Dhaka-1216</p>
                        </div>
                        <div className="card-actions justify-start">
                            <Link href='/properties/SouthMetromax'>
                                <button className="btn btn-accent btn-outline">See More</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card card-compact bg-base-100 shadow-2xl rounded-xl">
                    <figure style={{ height: '300px', width: '400px', margin: 'auto' }}>
                        <Image src="/projects/p2-2.jpg" alt="Shoes" height={300} width={400} loading="lazy" className='rounded-xl' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Arefin&rsquo;s Elysium By Metromax </h2>
                        <div className='flex gap-3 justify-center items-center'>
                            <FaMapLocationDot className='h-12 w-12' />
                            <p>House no-49/50,Block-C,
                                Road no-06,Section-06,Pallabi,
                                Mirpur,Dhaka-1216</p>
                        </div>
                        <div className="card-actions justify-start">
                            <Link href='/properties/ArefinMetromax'>
                                <button className="btn btn-accent btn-outline">See More</button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* <div className="card card-compact bg-base-100 shadow-2xl rounded-xl">
                    <figure style={{ height: '300px', width: '300px' }}>
                        <Image src="/projects/p2.jpg" alt="Shoes" height={300} width={300} loading="lazy" className='rounded-xl'/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-accent btn-outline">See More</button>
                        </div>
                    </div>
                </div> */}

            </div>
        </div>
    )
}

export default OurProperties