import AnimationWrapper from "./AnimationWrapper"
import { RiDoubleQuotesL } from "react-icons/ri";
import project01 from '/public/projects/p2-1.jpg';

const KeyLine = () => {
    return (
        <AnimationWrapper>
            <div className='max-w-7xl mx-auto my-10'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between min-h-screen">
                    <div className="">
                        <h1 style={{ borderLeft: '8px solid #4E0D38' }} className='text-xl md:text-3xl font-semibold border-l-8 pl-5 text-justify'>
                            <RiDoubleQuotesL className="w-16 h-16" />
                            A strong commitment <br /> to excellence and a passion <br /> for creating exceptional <br /> living and working spaces</h1>
                        <p className="mt-5 text-xl">
                            {/* MetroMax Design and Development Limited is a leading name in the world of construction and real estate Development. With a strong commitment to excellence and a passion for creating exceptional living and working spaces, we have been at the forefront of transforming visions into reality. */}
                        </p>
                    </div>
                    <div className="">
                        <div className="grid md:grid-cols-5 gap-2">
                            <div className="md:col-span-3">
                                <img src='https://img.freepik.com/premium-photo/modern-corporate-architecture-can-be-seen-cityscape-office-buildings_410516-276.jpg?size=626&ext=jpg&ga=GA1.1.1389451345.1700558843&semt=sph' alt="" className="w-screen md:w-full h-80 rounded-xl" />
                            </div>
                            <div className="md:col-span-2">
                                <img src='https://i.ibb.co/3mFrPb6/p1.jpg' alt="" className="w-full md:w-full h-80 rounded-xl" />
                            </div>
                            <div className="md:col-span-2">
                                <img src='https://i.ibb.co/VW5kLh7/p2-2.jpg' alt="" className="w-screen md:w-full h-80 rounded-xl" />
                            </div>
                            <div className="md:col-span-3">
                                <img src='https://i.ibb.co/2d3rj37/Whats-App-Image-2023-12-25-at-16-11-38-a3085693.jpg' alt="" className="w-screen md:w-full h-80 rounded-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimationWrapper>
    )
}

export default KeyLine