import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const links=[
    { id: 1, url: '/', text: 'home' },
    { id: 2, url: 'about', text: 'about' },
    { id: 3, url: 'products', text: 'products' },
    { id: 4, url: 'orders', text: 'orders' },
    { id: 5, url: 'checkout', text: 'checkout' },
   
]

const Navlinks = () => {
  const user=useSelector((state)=>state.userState.user)
  return (
   <div className=' hidden sm:flex items-center justify-between sm:gap-x-4  lg:gap-x-20  '>
   
  {links.map((link)=>{
const{id,url,text}=link
if ((url === 'checkout' || url === 'orders') && !user) return null;
return (
  
    <li key={id} className=' list-none'>
<NavLink className={'capitalize font-bold hover:font-extrabold hover:text-gray-500'} to={url}>
    {text}
</NavLink>
    </li>
)
  })}
   </div>
  )
}

export default Navlinks