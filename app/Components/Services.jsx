import { assets, infoList, serviceData, toolsData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'


export default function Servicses() {
    return (
        <>
            <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
                <h3 className='text-center text-lg font-Ovo mb-2'>what I offer</h3>
                <h2 className='text-center text-5xl font-Ovo'>My Services </h2>

                <div >
                    <p className='max-w-2xl mb-10 mt-2 font-Ovo mx-auto text-center'>
                        I can help tou to build your site with ReactJS plus I know about wordpress & UI and still learning more and more .....                </p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                        {serviceData.map(({ icon, link, title, description }, index) => (
                            <div key={index} className='cursor-pointer p-6 border-[0.5px] border-gray-400 rounded-xl hover:bg-lightHover hover:text-gray-600 hover:-translate-y-1 duration:500 hover:shadow-black' >
                                <Image src={icon} alt='title' className='w-10' />
                                <h3 className='my-4 font-semibold text-gray-700   '>{title}</h3>
                                <p className='text-gray-600 text-sm '>{description}</p>
                                <a href={link} >
                                    Read More <Image src={assets.right_arrow} className='w-4' alt=''/> 
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}
