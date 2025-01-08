import { assets, infoList, toolsData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'


export default function About() {
    return (
        <>
            <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
                <h3 className='text-center text-lg font-Ovo mb-2'>Introduction</h3>
                <h2 className='text-center text-5xl font-Ovo'>About me</h2>
                <div className='flex flex-col w-full lg:flex-row items-center gap-20 my-20 '>
                    <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                        <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
                    </div>
                    <div className='flex-1'>
                        <p className='max-w-2xl mb-10 font-Ovo'>
                            I am a beginner front-end developer who is expanding my studies and I have many projects in React, JS and Next <br /> and I still learning more and more .....
                        </p>
                        <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                            {infoList.map(({ icon, iconDark, title, description }, index) => (
                                <li key={index} className='cursor-pointer p-6 border-[0.5px] border-gray-400 rounded-xl hover:bg-lightHover hover:-translate-y-1 duration:500 hover:shadow-black' >
                                    <Image src={icon} alt='title' className='w-7 mt-3' />
                                    <h3 className='my-4 font-semibold text-gray-700   '>{title}</h3>
                                    <p className='text-gray-600 text-sm '>{description}</p>
                                </li>
                            ))}
                        </ul>
                        <h3 className='my-6 font-Ovo text-center'>Tools I use</h3>
                        <ul className='flex items-center justify-center gap-3'>
                            {toolsData.map((tool, index) => (
                                <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1'>
                                    <Image src={tool} alt='tool' className='w-5 sm:w-7' />
                                </li>

                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}
