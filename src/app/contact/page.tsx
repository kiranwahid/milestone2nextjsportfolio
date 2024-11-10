import Link from "next/link";
import { GrLinkedinOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

import React from 'react'

const Contact = () => {
  return (
    <>
     <div> 
    <h1 className='text-center font-semibold text-yellow-300 p-3 text-3xl tracking-[10px] capitalize '>Get in Touch</h1>
<div className='w-full flex justify-center items-center '>

<form action="" className=' form w-[60rem] h-full flex items-center flex-col rounded-lg'>
<div className='flex'>
  
<input type="text" placeholder='enter name' className=' input p-4 w-[20rem] m-8 text-[1.5rem] capitalize border-[1.5px] outline-none border-yellow-300 rounded-md' />
<input type= "number" placeholder='enter cnic'  className=' input p-4 w-[20rem] m-8 text-[1.5rem] capitalize border-[1.5px] outline-none border-yellow-300 rounded-md'/>

</div>
<div className='flex'>
<input type="email" placeholder=' Enter email' className=' input p-4 w-[20rem] m-8 text-[1.5rem] capitalize border-[1.5px] outline-none border-yellow-300 rounded-md'/>
<input type= "number" placeholder='enter number'  className=' input p-4 w-[20rem] m-8 text-[1.5rem] capitalize border-[1.5px] outline-none border-yellow-300 rounded-md' />

</div>

<div>
  <textarea name="" id="" placeholder='your review...'  className=' input p-4 w-[40rem] h-[15rem] m-8 text-[1.5rem] capitalize border-[1.5px] outline-none border-yellow-300 rounded-md' ></textarea>
</div>
<button  className=" py-3 px-8 text-2xl  rounded  font-normal  bg-transparent border-yellow-300 text-white duration-300 border  border-transparent hover:bg-yellow-300 hover:text-black"><a href="">Send</a></button>
</form>
</div>

</div>
  


  <footer className='w-full h-[20rem] p-4 flex justify-center items-center flex-col gap-8'>
    <div className="icons flex gap-8 text-3xl cursor-pointer text-white transition-[0.3s ease]">
      <a href="https://www.linkedin.com/in/kiran-wahid-536b78234/">    <GrLinkedinOption  className=" text-[1.3rem] w-[4rem] p-2 h-[4rem]  font-light border border-yellow-300 rounded-[50%] hover:bg-yellow-300 hover:text-gray-600"/></a>
<a href="https://www.instagram.com/ayatnoor2468/">    <FaInstagram  className=" text-[1.5rem] w-[4rem] p-2 h-[4rem]   border border-yellow-300 rounded-[50%]  hover:bg-yellow-300 hover:text-gray-600"/></a>
<a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl&pli=1#inbox">    <MdOutlineAttachEmail className=" text-[1.5rem] w-[4rem] p-2 h-[4rem]   border border-yellow-300 rounded-[50%]  hover:bg-yellow-300 hover:text-gray-600"/></a>
<a href="https://github.com/kiranwahid">    <FaGithub className=" text-[1.5rem] w-[4rem] p-2 h-[4rem]   border border-yellow-300 rounded-[50%]  hover:bg-yellow-300 hover:text-gray-600" /></a>


    </div>
    <div className="links">
    <Link href={"./"} className=" text-2xl mx-4 text-white hover:text-yellow-30  hover:text-yellow-300 ">Home</Link>
        <Link href={"./about"} className=" text-2xl mx-4 text-white  hover:text-yellow-300">About</Link>
        <Link href={"./skill"} className=" text-2xl mx-4 text-white  hover:text-yellow-300">Skilll</Link>
        <Link href={"./projectshoow"} className=" text-2xl mx-4 text-white  hover:text-yellow-300">Project</Link>
        <Link href={"./contact"} className=" text-2xl mx-4 text-white  hover:text-yellow-300">contact</Link>
    </div>
<a href=""><p className="flex items-center justify-center ml-3 text-[1.5rem] text-gray-400"><FaRegCopyright  className=""/>Copyright 2024 all right reserved  </p></a>
  </footer>
    </>
  )
}

export default Contact