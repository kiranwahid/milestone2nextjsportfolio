import React from 'react'

import Image from 'next/image'
import pic2 from '../public/pic2.jpg';

export default function Herosection(){
  return (
    <>
<div  className='m-auto flex justify-center items-center mt-12 flex-col'>
  <div>
    <Image src={pic2} alt='profile' className='w-96 h-96 rounded-full border-yellow-300 border-[2px] '></Image>
  </div>

  <div className='text-center p-8'>
    {/* <h3 className='text-4xl text-yellow-300 font-semibold font-mono '>Hello</h3> */}
    <h1 className='text-4xl p-2 leading-normal text-white font-medium'><span>Hello</span> I'm Kiran <br /> <span className='text-yellow-400  border-b-2 border-yellow-300'>A web developer</span></h1>
  </div>
  <div >
    <p className='text-gray-300  text-[18px] px-96 text-justify leading-[20px]  '>I'm a passionate web developer with a strong foundation in front-end technologies like HTML, CSS, and JavaScript. I specialize in creating clean, responsive, and user-friendly websites, with a focus on performance and functionality. With an eye for design and a knack for problem-solving, I enjoy bringing creative ideas to life on the web.</p>
  </div>
  <div className='m-8'>
  <button className="px-10 py-4 text-3xl  rounded-3xl  font-semibold  bg-transparent border-yellow-300 text-white duration-300 border  border-transparent hover:bg-yellow-300 hover:text-black">Hire Me</button>
  </div>
</div>

    </>
  )
}

