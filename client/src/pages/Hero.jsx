import React from 'react'
import heroBCG from  '../assets/hero-bcg.jpeg'
import {  MaxWidthWrapper } from '../Componenets'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (

    
    <div >
        <MaxWidthWrapper>


    <div className=' grid grid-cols-1  lg:grid-cols-2 bg-white/50'>
    <div className=' mt-36 text-center lg:text-left'>
    <h1 className=' text-5xl font-bold leading-snug'>
        Design your <br/>
        Comfort Zone
    </h1>

    <p className=' leading-loose mt-10   text-xl text-zinc-700 mb-10 text-left'>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?
    </p>

 <Link to={'/products'} className= ' px-6 py-3 text-base bg-blue-400  hover:bg-blue-200  rounded text-gray-50 font-sm hover:text-black'>Shop Now</Link>

    </div>

    <div className='img-container mt-8 ml-6'>
    <img src={heroBCG} className='hero-img  w-full rounded object-cover relative  '/>
    </div>
    </div>
  
        </MaxWidthWrapper>
 
 {/* w-full rounded object-cover  */}
    </div>
  )
}

export default Hero