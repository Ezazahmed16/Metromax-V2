'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { MdDownload } from "react-icons/md";

const SiteNavbar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');
    const [logoSrc, setLogoSrc] = useState('/projects/logo-color.png');

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor('#ffffff');
                setTextColor('#000000');
                setLogoSrc('/projects/logo-color.png'); // Change to your scroll logo
            } else {
                setColor('transparent');
                setTextColor('#ffffff');
                setLogoSrc('/GIL/logo.png'); // Change to your default logo
            }
        };
        window.addEventListener('scroll', changeColor);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', changeColor);
        };
    }, []);

    return (
        <div
            style={{ backgroundColor: `${color}` }}
            className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
        >
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
                <div className="flex justify-between w-full items-center">

                    <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
                        <li className='p-4'>
                            <Link href='/about'>About</Link>
                        </li>
                        <li className='p-4'>
                            <Link href='/properties'>Properties</Link>
                        </li>
                    </ul>

                    <Link href='/'>
                        <Image src={logoSrc} alt="Metromax Logo" width={150} height={150} />
                    </Link>

                    <ul style={{ color: `${textColor}` }} className='hidden sm:flex items-center'>
                        <li className='p-4'>
                            <Link href='/mediaCenter'>Media Center</Link>
                        </li>
                        <li className='p-4'>
                            <Link href='/contact'>Contact Us</Link>
                        </li>
                        <button style={{ backgroundColor: '#8C2E47' }} className="btn btn-sm text-white border-1 border-black">
                            <p className='uppercase'>Brushier</p>
                            <MdDownload />
                        </button>
                    </ul>
                </div>

                <div onClick={handleNav} className='block sm:hidden z-10'>
                    {nav ? (
                        <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
                    ) : (
                        <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
                    )}
                </div>

                {/* Mobile Menu */}
                <div
                    className={
                        nav
                            ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                            : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                    }
                >
                    <ul>
                        <li className='p-4'>
                            <Link href='/about'>About</Link>
                        </li>
                        <li className='p-4'>
                            <Link href='/properties'>Properties</Link>
                        </li>
                        <li className='p-4'>
                            <Link href='/mediaCenter'>Media Center</Link>
                        </li>
                        <li className='p-4'>
                            <Link href='/contact'>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SiteNavbar;
