import React from 'react'

const HeroSlider = () => {
    return (
        <div className='min-w-full mx-auto'>
            <div className="carousel w-full">

                <div id="slide1" className="carousel-item relative w-full">
                    <div className="w-full">
                        <div className="hero min-h-screen w-full" style={{ backgroundImage: 'url(https://i.ibb.co/s5cv4j7/Whats-App-Image-2023-12-25-at-16-11-42-9a0d028e.jpg)' }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-left text-neutral-content w-screen">
                                <div className="max-w-md bg-black/20 p-5 rounded-lg">
                                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    <button className='btn btn-outline bg-black/40 text-white'>Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <div className="w-full">
                        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/ZBCt9tt/Whats-App-Image-2023-12-25-at-16-11-47-6fb152ea.jpg)' }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-left text-neutral-content w-screen">
                                <div className="max-w-md bg-black/20 p-5 rounded-lg">
                                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    <button className='btn btn-outline bg-black/40 text-white'>Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default HeroSlider