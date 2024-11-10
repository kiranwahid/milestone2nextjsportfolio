import React from 'react'
import Image from 'next/image'
import portfolio from '../public/portfolio.png'
import laugh from '../public/laughing.jpg'
import letters from '../public/letter.jpg'
import bulb from  '../public/bulb.png'
import stopwatch from '../public/stopwatch.png'
import tic_tac_toe from '../public/tic.jpg'



export default function Projectshow(){
    return (
<>
<div>
<h1 className='text-center font-semibold text-yellow-300  text-4xl p-8 tracking-[10px] capitalize mt-12'>Creative Works</h1>
<div className='w-full max-h-full  flex justify-center items-center gap-8 mb-[10rem] flex-wrap mt-12'>
<div className='flex flex-col w-[33rem] h-[38rem]  p-8 text-center rounded-xl border-[2px] border-yellow-100'>
  <div>
    <Image src={portfolio} alt='' className='w-full h-full rounded-lg border-yellow-50 border-[2px]'></Image>
  </div>
  <div className='p-[1rem]'>
    <h1 className='text-3xl font-semibold text-yellow-200' >
project1
    </h1>
    <p className='text-[1.3rem] text-justify text-gray-300 pt-2 tracking-[4px'>I’m thrilled to showcase my portfolio, built with HTML, CSS, and JavaScript. It highlights my skills as a web developer with a modern design and interactive elements.</p>
  </div>
  <div className='flex items-center gap-4'>
  <button className="px-8 py-3 text-2xl  bg-yellow-300 rounded-3xl  font-semibold  hover:bg-transparent hover:border-yellow-300 hover:text-white duration-300 hover:border border border-transparent "><a href="https://github.com/kiranwahid/html-portfolio.git">Github</a></button>
  <button  className=" py-3 px-4 text-2xl  rounded-3xl  font-normal  bg-transparent border-yellow-300 text-white duration-300 border  border-transparent hover:bg-yellow-300 hover:text-black"><a href="https://simple-portfolio-one-alpha.vercel.app/">Live Demo</a></button>
  </div>
</div>
<div className='flex flex-col w-[33rem] h-[38rem]  p-8 text-center rounded-xl border-[2px] border-yellow-100'>
  <div>
    <Image src={laugh} alt='' className='w-full h-full rounded-lg border-yellow-50 border-[2px]'></Image>
  </div>
  <div className='p-[1rem]'>
    <h1 className='text-3xl font-semibold text-yellow-200' >
project02
    </h1>
    <p className='text-[1.3rem] text-justify text-gray-300 pt-2 tracking-tighter'>I created a Random Joke Generator using HTML, CSS, and JavaScript that updates jokes with each button click, highlighting my skills in DOM manipulation and API integration..

</p>
  </div>
  <div className='flex items-center gap-4'>
  <button className="px-8 py-3 text-2xl  bg-yellow-300 rounded-3xl  font-semibold  hover:bg-transparent hover:border-yellow-300 hover:text-white duration-300 hover:border border border-transparent "><a href="https://github.com/kiranwahid/random-jokes.git">Github</a></button>
  <button  className=" py-3 px-4 text-2xl  rounded-3xl  font-normal  bg-transparent border-yellow-300 text-white duration-300 border  border-transparent hover:bg-yellow-300 hover:text-black"><a href="https://random-jokes-dun.vercel.app/">Live Demo</a></button>
  </div>
</div>

<div className='flex flex-col w-[33rem] h-[38rem]  p-8 text-center rounded-xl border-[2px] border-yellow-100'>
  <div>
    <Image src={letters} alt='' className='w-full h-full rounded-lg border-yellow-50 border-[2px]'></Image>
  </div>
  <div className='p-[1rem]'>
    <h1 className='text-3xl font-semibold text-yellow-200' >
    project03

    </h1>
    <p className='text-[1.3rem] text-justify text-gray-300 pt-2 tracking-tight '>I just created a fun and interactive alphabet book using HTML and CSS! This project showcases my web development skills while making learning enjoyable for kids. </p>
  </div>
  <div className='flex items-center gap-4'>
  <button className="px-8 py-3 text-2xl  bg-yellow-300 rounded-3xl  font-semibold  hover:bg-transparent hover:border-yellow-300 hover:text-white duration-300 hover:border border border-transparent "><a href="https://github.com/kiranwahid/kidbook.git">Github</a></button>
  <button  className=" py-3 px-4 text-2xl  rounded-3xl  font-normal  bg-transparent border-yellow-300 text-white duration-300 border  border-transparent hover:bg-yellow-300 hover:text-black"><a href="https://kidbook-eight.vercel.app/">Live Demo</a></button>
  </div>
</div>


<div className='flex flex-col w-[33rem] h-[38rem]  p-8 text-center rounded-xl border-[0.2rem] border-yellow-100'>
  <div>
    <Image src={bulb} alt='' className='w-full h-full rounded-lg border-yellow-50 border-[2px]'></Image>
  </div>
  <div className='p-[1rem]'>
    <h1 className='text-3xl font-semibold text-yellow-200' >
project04
    </h1>
    <p className='text-[1.3rem] text-justify text-gray-300 pt-2 tracking-tighter'>I developed a simple interactive Bulb On/Off project using HTML, CSS, and JavaScript. Users can toggle the bulb with a button click, demonstrating my skills in DOM manipulation and event handling."</p>
  </div>
  <div className='flex items-center gap-4'>
  <button className="px-8 py-3 text-2xl  bg-yellow-300 rounded-3xl  font-semibold  hover:bg-transparent hover:border-yellow-300 hover:text-white duration-300 hover:border border border-transparent "><a href="https://github.com/kiranwahid/bulb_mini_project.git">Github</a></button>
  <button  className=" py-3 px-4 text-2xl  rounded-3xl  font-normal  bg-transparent border-yellow-300 text-white duration-300 border  border-transparent hover:bg-yellow-300 hover:text-black"><a href="https://bulb-mini-project-coral.vercel.app/">Live Demo</a></button>
  </div>
</div>


<div className='flex flex-col w-[33rem] h-[38rem]  p-8 text-center rounded-xl border-[2px] border-yellow-100'>
  <div>
    <Image src={stopwatch} alt='' className='w-full h-full rounded-lg border-yellow-50 border-[2px]'></Image>
  </div>
  <div className='p-[1rem]'>
    <h1 className='text-3xl font-semibold text-yellow-200' >
project05
    </h1>
    <p className='text-[1.3rem] text-justify text-gray-300 pt-2 tracking-tighter'>I created a stopwatch with HTML, CSS, and JavaScript, featuring start, stop, and reset functions. This project enhanced my skills in DOM manipulation and time-based functions. </p>
  </div>
  <div className='flex items-center gap-4'>
  <button className="px-8 py-3 text-2xl  bg-yellow-300 rounded-3xl  font-semibold  hover:bg-transparent hover:border-yellow-300 hover:text-white duration-300 hover:border border border-transparent "><a href="https://github.com/kiranwahid/stop_watch.git">Github</a></button>
  <button  className=" py-3 px-4 text-2xl  rounded-3xl  font-normal  bg-transparent border-yellow-300 text-white duration-300 border  border-transparent hover:bg-yellow-300 hover:text-black"><a href="https://stop-watch-henna-eight.vercel.app/">Live Demo</a></button>
  </div>
</div>

<div className='flex flex-col w-[33rem] h-[38rem]  p-8 text-center rounded-xl border-[2px] border-yellow-100'>
  <div>
    <Image src={tic_tac_toe} alt='' className='w-full h-full rounded-lg border-yellow-50 border-[2px]'></Image>
  </div>
  <div className='p-[1rem]'>
    <h1 className='text-3xl font-semibold text-yellow-200' >
project06
    </h1>
    <p className='text-[1.2rem] text-justify text-gray-300 pt-2 tracking-tight'>I developed a Tic-Tac-Toe game using HTML, CSS, and JavaScript, demonstrating my ability to implement game logic, handle DOM manipulation, and create a responsive user experience. </p>
  </div>
  <div className='flex items-center gap-4'>
  <button className="px-8 py-3 text-2xl  bg-yellow-300 rounded-3xl  font-semibold  hover:bg-transparent hover:border-yellow-300 hover:text-white duration-300 hover:border border border-transparent "><a href="https://github.com/kiranwahid/tic-tac-toe-game.git">Github</a></button>
  <button  className=" py-3 px-4 text-2xl  rounded-3xl  font-normal  bg-transparent border-yellow-300 text-white duration-300 border  border-transparent hover:bg-yellow-300 hover:text-black"><a href="https://tic-tac-toe-game-six-jade.vercel.app/">Live Demo</a></button>
  </div>
</div>
</div>

</div>
</>
    )
  }