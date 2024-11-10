import React from 'react'
import Image from 'next/image'
import Pic1 from '../public/pic1.jpg'




export default function About(){
  return (
    <>
<div>
  <div>
    <h1 className='text-center font-semibold text-yellow-300 text-4xl p-8 mt-16 tracking-[10px]'>About me</h1>
  </div> 
  <div className='flex  justify-center items-center w-full h-screen px-10 gap-16'>
  <div className='w-[30%] h-[70%] bg-slate-300 mb-56 flex justify-center items-center rounded shadow-sm shadow-slate-500'>
<Image src={Pic1} alt='' className='h-full w-full rounded shadow-sm relative border-yellow-300 border-2 '></Image>

  </div>

  <div className='w-[45%]  h-3/5 mb-56 p-4 '>
  <h1 className='text-4xl text-yellow-300 leading-normal'>Hi <br />I'm kiran wahid</h1>
    <p className='text-[18px] text-gray-300 leading-loose'>I’m a front-end developer skilled in HTML, CSS, JavaScript, and modern frameworks. I create responsive, user-friendly websites with clean, efficient code, focusing on enhancing user experience. Continuously learning new technologies like TypeScript, Next.js, and React, I’m passionate about building innovative and intuitive web applications.

</p>

<div className='flex  items-center gap-4'>
<button className="mt-8 px-6 py-3 text-3xl  bg-yellow-300 rounded-md  font-semibold  hover:bg-transparent hover:border-yellow-300 hover:text-white duration-300 hover:border border border-transparent">Hire me</button>
<a href="https://simple-portfolio-one-alpha.vercel.app/"><button className="mt-8 px-8 py-3  text-3xl  rounded-md  font-semibold  bg-transparent border-yellow-300 text-white duration-300 border  border-transparent hover:bg-yellow-300 hover:text-black">Portfolio</button></a>

</div>
  </div>
</div>
  </div>
    </>
  )
}

