'use client'
import { assets, infoList, serviceData, toolsData, workData } from '@/assets/assets'
import React, { useState } from 'react'
import Image from 'next/image'


export default function Contact() {
//    dinamic form api from 'web3forms site' 
const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "801610a3-b962-47fe-87ad-b3b937f16868");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    return (
        <>
            <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20'>
                <h4 className='text-center text-lg font-Ovo mb-2'> Contact with Me </h4>
                <h2 className='text-center text-5xl font-Ovo'> Get in touch </h2>
                <p className='max-w-2xl mb-10 font-Ovo mx-auto text-center'>
                    I'd love to hear form you! if you have any question , comments, or feedback. please use the form below..
                </p>
                <form onSubmit={onSubmit}
                className='max-w-2xl mx-auto'>
                    <div className='grid grid-cols-auto gap-5 my-10 '>
                        <input type="text" name='name' placeholder='Enter your name' required className=' outline-none p-3 border-[0.5px] border-gray-400 rounded-md bg-white' />
                        <input type="email" name='email' placeholder='Enter your Emaile' required className=' outline-none p-3 border-[0.5px] border-gray-400 rounded-md bg-white' />
                    </div>
                    <textarea rows={6} name='message' placeholder='Enter yor Message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'></textarea>
                    <button type='submit' className='flex items-center justify-between gap-2 py-2 px-3  bg-white text-darkTheme rounded-full mx-auto hover:bg-black duration-500'
                    >Submit now
                        <Image alt='' src={assets.right_arrow} className='w-4' />
                    </button>
                    <p className='mt-4'>{result}</p>
                </form>
            </div>

        </>
    )
}
