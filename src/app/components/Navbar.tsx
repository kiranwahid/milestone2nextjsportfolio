import React from 'react'
import Link from 'next/link'

export default async function Navbar() {

  return (
    <>
<div id='navbar' className="flex  h-36 justify-between items-center p-2 shadow-md px-10 sticky top-0  z-[1000] opacity-90">
    <div>
       <h1 className="text-5xl text-white "> Kiran <span className=" text-yellow-300 text-6xl">.</span></h1>
    </div>
    <div>
        <Link href={"./"} className=" text-3xl mx-4 text-white hover:text-yellow-300">Home</Link>
        <Link href={"./about"} className=" text-3xl mx-4 text-white  hover:text-yellow-300">About</Link>
        <Link href={"./skill"} className=" text-3xl mx-4 text-white  hover:text-yellow-300">Skilll</Link>
        <Link href={"./projectshoow"} className=" text-3xl mx-4 text-white  hover:text-yellow-300">Project</Link>
        
        <Link href={"./contact"} className=" text-3xl mx-4 text-white  hover:text-yellow-300">contact</Link>
    </div>
<a href="https://hackathonemilestone01.vercel.app/"><button className="px-6 py-4 text-2xl  bg-yellow-300 rounded-3xl  font-semibold  hover:bg-transparent hover:border-yellow-300 hover:text-white duration-300 hover:border border border-transparent ">Download cv</button></a>
</div>

    </>
  )
}

// 'use client'

// import React, { useState } from 'react';
// import Link from 'next/link';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <div
//       id="navbar"
//       className="flex justify-between items-center p-2 shadow-md px-10 sticky top-0 z-[1000] opacity-90 md:h-36 md:flex-col md:bg-slate-500"
//     >
//       <div className="flex justify-between w-full items-center">
//         <h1 className="text-5xl text-white">
//           Kiran <span className="text-yellow-300 text-6xl">.</span>
//         </h1>

//         {/* Hamburger Icon */}
//         <button
//           onClick={toggleMenu}
//           className="md:hidden text-white text-3xl"
//         >
//           {isOpen ? '×' : '☰'}
//         </button>
//       </div>

//       {/* Navbar Links - Hidden on mobile */}
//       <div
//         className={`${
//           isOpen ? 'block' : ''
//         } md:flex  md:flex-col flex justify-between items-center md:items-center w-full md:w-auto mt-4 md:mt-0`}
//       >
//         <Link href="/" className="text-3xl mx-4 text-white hover:text-yellow-300">
//           Home
//         </Link>
//         <Link href="/about" className="text-3xl mx-4 text-white hover:text-yellow-300">
//           About
//         </Link>
//         <Link href="/skills" className="text-3xl mx-4 text-white hover:text-yellow-300">
//           Skills
//         </Link>
//         <Link href="/projects" className="text-3xl mx-4 text-white hover:text-yellow-300">
//           Projects
//         </Link>
//         <Link href="/contact" className="text-3xl mx-4 text-white hover:text-yellow-300">
//           Contact
//         </Link>
//       </div>

//       {/* Download CV Button */}
//       <Link href="https://hackathonemilestone01.vercel.app/">
//         <button className="px-6 py-4 text-2xl bg-yellow-200 rounded-3xl font-semibold hover:bg-transparent hover:border-yellow-300 hover:text-white duration-300 hover:border border border-transparent">
//           Download CV
//         </button>
//       </Link>
//     </div>
//   );
// }
