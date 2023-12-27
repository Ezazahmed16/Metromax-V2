import React from 'react';

const MessageDirector = () => {
    return (
        <div>
            <div className="bg-base-200 py-10">
                <div className="hero min-h-screen max-w-7xl mx-auto">
                    <div className="hero-content grid md:grid-cols-2 grid-cols-1 gap-10">
                        <div>
                            <h1 className="text-5xl font-bold">
                                MESSAGE FROM <br />
                                <span style={{ backgroundColor: '#818284' }} className='text-white'>DIRECTOR</span>
                            </h1>
                            <p className="py-6">
                                Commitment to Financial Integrity and Client Confidence
                                <br />
                                In my role as the Director of Finance at MetroMax Design and Development Limited, my primary focus is on the financial integrity and the assurance of value in each of our projects. We understand the importance of not just fulfilling but exceeding the expectations of our clients and investors in every endeavor.
                                <br />
                                Our financial strategy is crafted to ensure seamless project execution, aligning with our commitment to deliver each project with the highest standards of quality and within the stipulated time frame. This approach is the cornerstone of our financial philosophy, ensuring that every investment entrusted to us is managed with the utmost responsibility and foresight. We stand firm in our promise to maintain financial resilience and reliability, fostering enduring relationships based on trust and mutual success.
                                <br />
                                <br />
                                Warm Regards,
                                <br />
                                <br />
                                <span className='font-semibold'>Mizanur Rahman</span>
                                <br />
                                <span style={{ color: '#8B2E47' }}>Director</span>
                                <br />
                                <span>Metromax Design and Development Limited</span>
                            </p>
                        </div>
                        <div className="mx-auto">
                            <img src="https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg?size=626&ext=jpg&ga=GA1.2.579468515.1702963902&semt=sph" className="rounded-xl shadow-2xl" alt='MANAGING DIRECTOR'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageDirector;
