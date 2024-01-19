import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import { MaxWidthWrapper } from '../Componenets'

const Error = () => {

  const error=useRouteError()

  if(error.status === 404){
  
    return (
      <MaxWidthWrapper className={ 'grid place-items-center h-screen w-screen'}>
       <div className=' grid grid-rows-3  items-center justify-center  text-center'>
      
        <p className='text-9xl font-extrabold  text-black'>404</p>
       <p className='mt-6  leading-7 text-2xl'>Sorry, the page you tried cannot be found</p>
       <Link to={'/'} className=' p-3 bg-fuchsia-400 text-sm font-bold text-white hover:bg-fuchsia-200 hover:text-black rounded-md  '>Back Home</Link>
        </div>
      
      
       
     
      </MaxWidthWrapper>
    )
  }


  return (
    <div>Error</div>
  )
}

export default Error