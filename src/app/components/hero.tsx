import React from 'react'
import Image from 'next/image'


const Hero = () => {
  return (
    <div>
<section className=" body-font bg-[#180142] h-[800px] w-full">
  <div className=" flex justify-center space-x-20 items-center  sm:space-x-10 sm:pt-10 md:pt-10 ">
    
      <h1 className=" text-8xl font-bold text-[#7b2bbf] sm:text-3xl md:text-6xl xl:text-8xl">
        WEB <br />DEVELOPER
      </h1>
      
    
     
     
    
    <div className="">
      <div className='  bg-[#7b2bbf] rounded-full sm:h-[100px] sm:w-[100px] md:h-[300px] md:w-[300px]'></div>
    </div>
  </div>

<main className=' flex flex-wrap justify-center items-center relative md:bottom-48 xl:space-x-56 md:space-x-32'>
<div className='text-white text-xl '><h1>Hello Everyone</h1></div>
<div><Image alt='' src={require('../../../public/Assests/pic/ec2a2f83-5f34-442b-9c41-55f4851355d4-removebg-preview.png')}  
className=' md:h-[400px] md:w-[400px]'


/></div>
</main>
</section>


    </div>
  )
}

export default Hero