'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

export default function Navbar() {
    const sideMenueRef = useRef()
    const openMenue = () => {
        sideMenueRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenue = () => {
        sideMenueRef.current.style.transform = 'translateX(16rem)'
    }

    // scroll
    const [isScroll, setIsScroll] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    }, [])
    return (
        <>

            <nav className={`fixed w-full flex items-center justify-between z-50 px-5 lg-px-8 xl-px-[8%] py-4 ${isScroll ? "bg-white text-darkTheme bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
                <a href="#top" >  {/* logo */}
                    {isScroll ? (
                        <Image src={assets.logo_dark} className='w-28 cursor-pointer mr-14 ' alt='' />
                    ) :
                        (
                            <Image src={assets.logo} className='w-28 cursor-pointer mr-14 ' alt='' />
                        )
                    }
                </a>
                <ul className='hidden md:flex items-center gap-6 lg-gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50' >{/* nav */}
                    <li><a className='font-Ovo' href="#top">Home</a></li>
                    <li><a className='font-Ovo' href="#about">About me</a></li>
                    <li><a className='font-Ovo' href="#services">Services</a></li>
                    <li><a className='font-Ovo' href="#work">My Work</a></li>
                    <li><a className='font-Ovo' href="#contact">Contact me</a></li>
                </ul>
                <div className=' flex items-center gap-4 '>{/*  --- contact  --- menueicon  */}
                    <a href="#contact" className={`hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gary-500 rounded-full ml-4 font-Ovo ${isScroll ? "bg-darkTheme text-white " : " bg-white text-darkTheme "}`}>{/* contact-boutton */}
                        Contact 
                        {
                            isScroll ? 
                            (<Image src={assets.arrow_icon_dark} alt='' className='w-3' />)
                            :
                            (<Image src={assets.arrow_icon} alt='' className='w-3' />)
                        }
                    </a>

                    <button className='md:hidden ml-3' onClick={openMenue}> {/* menuIcon */}
                        <Image src={assets.menu_white} alt='' className='w-6' />
                    </button>
                </div>
                {/*----------------- mobile-menue -------------------  */}
                <ul ref={sideMenueRef} className=' md:hidden flex flex-col gap-4 lg-gap-8 px-10 py-20 fixed -right-64 top-0 bootom-0 w-64 z-50 h-screen bg-rose transition duration-500' >
                    <div className='absolute right-6 top-6' onClick={closeMenue}>
                        <Image src={assets.close_white} alt='' className='w-6' />
                    </div>
                    <li><a className='font-Ovo' onClick={closeMenue} href="#top">Home</a></li>
                    <li><a className='font-Ovo' onClick={closeMenue} href="#about">About me</a></li>
                    <li><a className='font-Ovo' onClick={closeMenue} href="#services">Services</a></li>
                    <li><a className='font-Ovo' onClick={closeMenue} href="#work">My Work</a></li>
                    <li><a className='font-Ovo' onClick={closeMenue} href="#contact">Contact me</a></li>
                </ul>
            </nav>
        </>
    )
}
