import React, { useState } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { NavLink,Link, useNavigate } from 'react-router-dom'
import Navlinks from './Navlinks'
import { BsCart3 } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import Sidebar from './Sidebar';
import NavButton from './NavButton';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';
import { logoutUser } from '../features/user/userSlice';
import { useQueryClient } from '@tanstack/react-query';


const Navbar = ({sideBarOpen,setSideBarOpen}) => {

  const user=useSelector((state)=>state.userState.user)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const queryClient=useQueryClient()
const numItemsInCart=useSelector((state)=>state.cartState.numItemsInCart)

const handleLogout=()=>{
  navigate('/')
  dispatch(clearCart());
  dispatch(logoutUser())
  queryClient.removeQueries()

}
  return (


    <nav className=" sticky h-14 inset-x-0  z-30  w-full  border-b  border-gray-200  bg-base-200 backdrop-blur:lg  transition-all">
         
   <MaxWidthWrapper >
    <div className=' flex justify-between items-center h-14 border-b border-zinc-200'>
    <NavLink to={'/'} className=' text-2xl lg:text-3xl font-extrabold text-blue-400 text-nowrap'>
      E-Commerce
    </NavLink>
    <div className='sm:hidden '>
   <FaBarsStaggered className='h-6 w-6' onClick={()=>setSideBarOpen(!sideBarOpen)}/>
   </div>

    <Navlinks/>

  

    <div className=' sm:flex items-center justify-between sm:gap-x-2 lg:gap-x-4 hidden '>
  
    
{user? (
  <>
   <p className='text-xs sm:text-sm font-medium'>Hello, {user.username}</p>
   <Link onClick={handleLogout}>Logout</Link>  
  </>

):(
  <>
  <Link onClick={handleLogout} to={'/login'}>Login</Link> 
<Link to={'/register'}>Register</Link>
  </>

)}



   <NavLink to='cart' className='btn btn-ghost btn-circle btn-md  lg:ml-4'>
            <div className='indicator'>
              <BsCart3 className='h-6 w-6' />
              <span className='badge badge-sm badge-primary indicator-item'>
              {numItemsInCart}
              </span>
            </div>
          </NavLink>
    </div>

    

    </div>
 
   
   </MaxWidthWrapper>
  </nav>
    
  )
}

export default Navbar