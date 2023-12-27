import React from 'react'

const ContactComponent = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/8ny4bTq/Whats-App-Image-2023-12-25-at-16-11-34-d7020cd4.jpg)' }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-neutral-content">
                    <div className="grid md:grid-cols-2 gap-10 justify-center items-center">
                        <div className="bg-black/40 p-5 rounded-lg text-white">
                            <h1 className="text-4xl font-bold">Get in touch</h1>
                            <p className="pt-2 pb-4">We value your thoughts and welcome any questions, feedback, or greetings. Please reach out to us using the provided contact information or our contact form. Our team is ready to assist and looks forward to connecting with you.</p>
                        </div>
                        <div className="">
                            <form className="card-body text-white">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Full Name</span>
                                    </label>
                                    <input type="name" placeholder="name" className="input input-bordered text-white bg-black/20" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered text-white bg-black/20" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Number</span>
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="Number"
                                        className="input input-bordered text-white bg-black/20"
                                        required
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Country</span>
                                    </label>
                                    <select
                                        className="select select-bordered text-white bg-black/20"
                                        required
                                    >
                                        <option className='bg-black' value="" disabled selected>
                                            Select a country
                                        </option>
                                        <option className='bg-black/90' value="usa">USA</option>
                                        <option className='bg-black/90' value="canada">Canada</option>
                                        <option className='bg-black/90' value="uk">UK</option>
                                        <option className='bg-black/90' value="bd">Bangladesh</option>
                                        <option className='bg-black/90' value="ind">India</option>
                                    </select>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Message</span>
                                    </label>
                                    <textarea type="message" placeholder="message" className="textarea textarea-bordered text-white bg-black/20" required />
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-accent btn-outline">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactComponent