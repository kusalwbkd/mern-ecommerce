import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsCart3 } from 'react-icons/bs';
import MaxWidthWrapper from './MaxWidthWrapper';
import NavButton from './NavButton';

const Sidebar = ({sideBarOpen,setSideBarOpen}) => {

    const links=[
        { id: 1, url: '/', text: 'home' },
        { id: 2, url: 'about', text: 'about' },
        { id: 3, url: 'products', text: 'products' },
        { id: 4, url: 'cart', text: 'cart' },
        { id: 5, url: 'orders', text: 'orders' },
       
    ]
  return (

        <div className= ' bg-red-50  lg:hidden grid grid-rows-2 justify-center items-center fixed  w-full h-full z-10 '>

<div className='grid justify-center items-center gap-y-8'>
       {links.map((link)=>{
const{id,url,text}=link


return (
  
    <li key={id} className=' list-none'>
<NavLink className={'capitalize font-bold hover:font-extrabold hover:text-gray-500'} to={url}  onClick={()=>setSideBarOpen(!sideBarOpen)}>
    {text}
</NavLink>
    </li>
)


  })}

</div>

<div className=' grid grid-row-3 justify-center items-center gap-y-2 mt-0 mb-6'>
  
  <NavButton  text={"Register"}    onClick={()=>setSideBarOpen(!sideBarOpen)}/>

  <NavButton  text={"Login"}   onClick={()=>setSideBarOpen(!sideBarOpen)}/>

  

   <NavLink to='cart' className='btn btn-ghost btn-circle btn-md ml-4'
    onClick={()=>setSideBarOpen(!sideBarOpen)}>
            <div className='indicator'>
              <BsCart3 className='h-6 w-6' />
              <span className='badge badge-sm badge-primary indicator-item'>
                8
              </span>
            </div>
          </NavLink>
</div>
   
    
        </div>
  )
}

export default Sidebar