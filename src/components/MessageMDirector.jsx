import Image from 'next/image';
import React from 'react';

const MessageMDirector = () => {
    return (
        <div>
            <div className="bg-base-200 py-10">
                <div className="hero min-h-screen max-w-7xl mx-auto">
                    <div className="hero-content grid md:grid-cols-2 grid-cols-1 gap-10">
                        <div className="mx-auto">
                            <Image
                                src="/assets/arefine1.jpg"
                                alt="MANAGING DIRECTOR"
                                width={400}
                                height={200}
                                className="rounded-xl shadow-2xl"
                            />
                        </div>
                        <div>
                            <h1 className="text-5xl font-bold">MESSAGE FROM <br />
                                <span style={{ backgroundColor: '#810E41' }} className='text-white'>MANAGING DIRECTOR</span>
                            </h1>
                            <p className="py-6">
                                A Vision of Transformative Development and Enduring Value
                                <br />
                                Welcome to MetroMax Design and Development Limited. As the Managing Director, it&apos;s my privilege to lead a team that is fervently dedicated to reshaping the landscape of construction and real estate development. Our ethos centers around delivering projects that are not just architecturally profound but also serve as benchmarks in operational excellence and strategic asset stewardship.
                                <br />
                                We take pride in our meticulous approach to managing each venture, ensuring that every aspect of construction is carried out with the utmost precision and innovation. Our commitment extends beyond mere construction; we focus on creating enduring assets that stand as testimonies to our dedication and expertise. It is this commitment that propels us forward, as we continue to contribute to the creation of vibrant communities and sustainable futures.

                                <br />
                                <br />
                                Warm Regards, <br />
                                <br />
                                <span className='font-semibold'>Md. Shamsul Arefin</span>
                                <br />
                                <span style={{ color: '#8B2E47' }}>Managing Director</span>
                                <br />
                                <span>Metromax Design and Development Limited</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageMDirector;
