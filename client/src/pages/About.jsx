import React from 'react'
import { MaxWidthWrapper } from '../Componenets'
import aboutImg from '../assets/hero-bcg.jpeg'
const About = () => {
  return (
    <MaxWidthWrapper>
      <div className=' grid grid-cols-1 lg:grid-cols-2 justify-center '>
      <img src={aboutImg} alt='about' className=' object-cover relative mt-12 ' style={{height:'500px', width:'500px'}}/>
      <div className='mt-12 grid place-content-center'>
       <h1 className='text-4xl font-extrabold font-mono text-left'>About us</h1>
       <p className=' mt-9 leading-8 max-w-2xl text-lg text-zinc-500'>

        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.
          </p>
      </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default About