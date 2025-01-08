import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <div className="mt-10">
        <div className="text-center">
          <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2' />
          <div className=" flex items-center gap-2 mx-auto w-max">
            <Image src={assets.mail_icon} alt='' className='w-6' />
            norhanhamed07@gmail.com
          </div>
          <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 ">
            <p> 2025 Norhan Hamed. All rights reserved.</p>
            <ul className='flex items-center justify-center gap-10 mt-4 sm:mt-0'>
              <li className='hover:-translate-y-1 duration-500 hover:text-blue-600'><a href="https://www.facebook.com/profile.php?id=100021433473127" target='_blank'> Facebook </a></li>
              <li className='hover:-translate-y-1 duration-500 hover:text-gray-800'><a href="https://github.com/norhanhamed" target='_blank'> Github </a></li>
              <li className='hover:-translate-y-1 duration-500 hover:text-blue-600'><a href="https://www.linkedin.com/in/nourhan-hamed-2295432a4/" target='_blank'> LinkedIn </a></li>


            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
