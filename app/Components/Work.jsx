'use client'
import { assets, infoList, serviceData, toolsData, workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'


export default function Work() {
    return (
        <>
            <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
                <h4 className='text-center text-lg font-Ovo mb-2'> My Portfolio</h4>
                <h2 className='text-center text-5xl font-Ovo'>My Latest Work </h2>
                    <p className='max-w-2xl mb-10 mt-2 font-Ovo mx-auto text-center'>
                        Welcome to my development Portfolio ! Explore a collection of projects showcasing my expeience in frontend development field...
                    </p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10'>
                        {workData.map((project, index) => (
                            <div key={index}
                                style={{ backgroundImage: `url(${project.bgImage})` }}
                                className='relative aspect-square bg-no-repeat bg-cover bg-center rounded-lg  group cursor-pointer ' >
                                <div className='flex items-center justify-between duration-500 group-hover:bottom-7 absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5  bg-white w-10/12 rounded-md '>
                                    <div>
                                        <h2 className=' font-semibold text-gray-700'>{project.title}</h2>
                                        <p className='text-gray-600 text-sm '>({project.description})</p>
                                        <div className='flex items-center justify-between mt-4'>
                                        <a href={project.git_link} className='text-gray-600 text-md' target='_blank'>Github </a>
                                        <a href={project.demo_link} className='text-gray-600 text-md' target='_blank'> Demo</a>
                                        </div>
                                

                                    </div>
                                    <div className=' flex justify-center items-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition border border-black rounded-full aspect-square w-9 '>
                                        <Image src={assets.send_icon} alt='send-icon' className='w-5' />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

        </>
    )
}
