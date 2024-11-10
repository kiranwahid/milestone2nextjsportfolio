import React from 'react'
import Image from 'next/image'
import pic2 from '../public/pic2.jpg';
import html from '../public/html.png'
import css from '../public/css.png'
import js from '../public/javas.png'
import tal from '../public/tailwind.png';
import ts from '../public/typescript.png'
import nextjs from '../public/nextjs.png';

export default function Skill(){
    return (
<>
<div>

    <h1 className='text-center font-semibold text-yellow-300  text-4xl mb-8 pb-8 tracking-[10px] capitalize mt-4'>my toolbox</h1>
    <div className='flex justify-center items-center w-full h-[50rem] mt-4'>
      <div className="box w-[90%]  h-full flex justify-center items-center gap-8 flex-wrap">
<div className='box1  w-[30rem] h-[25rem]  shadow-md shadow-gray-900 flex justify-center flex-col transform-[0.5s] items-center p-4 hover:scale-[1.1]  hover:bg-gradient-to-r from-[#F7971E] to-[#FFD200]  hover:shadow-gray-900 hover:rounded-md hover:cursor-pointer'>

<div>
  <Image src={html} alt=''className='w-[6rem] '></Image>
</div>
<div className='flex items-center flex-col'>
<h1 className='text-3xl text-yellow-600 p-[5px]'>html</h1>
<p className='text-[1.3rem] font-semibold text-gray-400 text-justify leading-normal p-4 hover:text-gray-600 '>HTML (Hypertext Markup Language) is the basic language for creating and structuring web pages. It organizes content using elements like headings, paragraphs, and images, forming the foundation of website.</p>
</div>

</div>
<div className='w-[30rem] h-[25rem]  shadow-md shadow-gray-900 flex justify-center flex-col transform-[0.5s] items-center p-4 hover:scale-[1.1] hover:bg-gradient-to-r from-[#F7971E] to-[#FFD200]  hover:text-black  hover:shadow-gray-900 hover:rounded-md hover:cursor-pointer '>

<div>
  <Image src={css} alt=''className='w-[6rem] '></Image>
</div>
<div className='flex items-center flex-col'>
<h1 className='text-3xl text-yellow-600 p-[5px]'>CSS</h1>
<p className='text-[1.3rem] font-semibold text-gray-400 text-justify leading-normal p-4 hover:text-gray-600'>
CSS (Cascading Style Sheets) is essential in creating responsive, visually appealing web designs. I use modern techniques like Flexbox, Grid, animations, and media queries to craft dynamic layouts that adapt to various devices, ensuring a seamless user experie

</p>
</div>
</div>
<div className='w-[30rem] h-[25rem]  shadow-md shadow-gray-900 flex justify-center flex-col transform-[0.5s] items-center p-4 hover:scale-[1.1]  hover:bg-gradient-to-r from-[#F7971E] to-[#FFD200]  hover:text-black  hover:shadow-gray-900 hover:rounded-md hover:cursor-pointer '>

<div>
  <Image src={tal} alt=''className='w-[6rem] '></Image>
</div>
<div className='flex items-center flex-col'>
<h1 className='text-3xl text-yellow-600 p-[5px]'>TALWIND CSS</h1>
<p className='text-[1.3rem] font-semibold text-gray-400 text-justify leading-normal p-4 hover:text-gray-600'>I use Tailwind CSS for its utility-first approach, enabling fast and efficient custom design with minimal CSS. It helps me create responsive and modern UIs while streamlining the development process.

</p>
</div>


</div>
<div className='w-[30rem] h-[25rem]  shadow-md shadow-gray-900 flex justify-center flex-col transform-[0.5s] items-center p-4 hover:scale-[1.1] hover:bg-gradient-to-r from-[#F7971E] to-[#FFD200]   hover:text-black  hover:shadow-gray-900 hover:rounded-md hover:cursor-pointer '>

<div>
  <Image src={js} alt=''className='w-[6rem] '></Image>
</div>
<div className='flex items-center flex-col'>
<h1 className='text-3xl text-yellow-600 p-[5px]'>JAVASCRIPT</h1>
<p className='text-[1.3rem] font-semibold text-gray-400 text-justify leading-normal p-4 hover:text-gray-600'>I use JavaScript to add interactivity and dynamic functionality to web applications, creating responsive and engaging user experiences.






</p>
</div>

</div>
<div className='w-[30rem] h-[25rem]  shadow-md shadow-gray-900 flex justify-center flex-col transform-[0.5s] items-center p-4 hover:scale-[1.1] hover:bg-gradient-to-r from-[#F7971E] to-[#FFD200]  hover:text-black  hover:shadow-gray-900 hover:rounded-md hover:cursor-pointer '>

<div>
  <Image src={ts} alt=''className='w-[6rem] '></Image>
</div>
<div className='flex items-center flex-col'>
<h1 className='text-3xl text-yellow-600 p-[5px]'>TYPESCRIPT</h1>
<p className='text-[1.3rem] font-semibold text-gray-400 text-justify leading-normal p-4 hover:text-gray-600'>I leverage TypeScript's strong typing and error checking to write clean, scalable, and reliable code for web applications.</p>
</div>

</div>
<div className='w-[30rem] h-[25rem]  shadow-md shadow-gray-900 flex justify-center flex-col transform-[0.5s] items-center p-4 hover:scale-[1.1]  hover:bg-gradient-to-r from-[#F7971E] to-[#FFD200]  hover:text-black  hover:shadow-gray-900 hover:rounded-md hover:cursor-pointer '>

<div>
  <Image src={nextjs} alt=''className='w-[6rem] '></Image>
</div>
<div className='flex items-center flex-col'>
<h1 className='text-3xl text-yellow-600 p-[5px]'>NEXT.JS</h1>
<p className='text-[1.3rem] font-semibold text-gray-400 text-justify leading-normal p-4 hover:text-gray-600'>
Next.js is a React framework that enhances performance and SEO with server-side rendering and static site generation. I've used it to build fast, responsive web applications.</p>
</div>

</div>
</div>


    </div>
  </div>   


</>
    )
  }
  
