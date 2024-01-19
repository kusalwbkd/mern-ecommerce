import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavButton = ({text,classname}) => {
  return (
    <NavLink className= {`btn btn-outline w-24 border-2 rounded-3xl ${classname} capitalize`}
   
    to={`/${text}`}
    >{text}
    
    </NavLink>
  )
}

export default NavButton