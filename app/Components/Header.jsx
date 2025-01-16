import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

export default function Header() {
    return (
        <>
            <div className='flex flex-col items-center justify-center gap-4 w-11/12 max-w-3xl h-screen text-center mx-auto '>
                <div>
                    <Image src={assets.profile_img} alt='' className='rounded-full w-32 mt-7' />
                </div>
                <h3 className='flex items-end gap-2 font-Ovo mb-3 text-xl md:text-2xl '>Hi I'm Norhan Hamed <Image src={assets.hand_icon} alt='' className='w-6' /> </h3>
                <h1 className='text-3xl sm:text-6xl lg-text-[66px] font-Ovo '>frontend web developer based in Egypt</h1>
                <p className='mx-auto max-w-2xl font-ovo'>I am a frontend developer from Mansoura, Egypt with 1year of experience in frontend and still learning plus I know about wordpress,ui..</p>
                <div className='flex flex-col items-center sm:flex-row gap-4 mt-4'>
                    <a href="#contact" className='flex items-center gap-2 text-white bg-black border border-white px-10 py-3 rounded-full'>
                        Contact Me <Image src={assets.right_arrow_white} alt='' className='w-4' />
                    </a>
                    <a href="/Norhan-Hamed-CV.pdf" className='flex items-center gap-2 border border-gray-500 px-10 py-3 rounded-full'>
                        my resume <Image src={assets.download_icon} alt='' className='w-4' />
                    </a>
                </div>
            </div>
        </>
    )
}
