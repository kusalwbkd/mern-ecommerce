
import { Outlet, useNavigation } from 'react-router-dom';
import MaxWidthWrapper from '../Componenets/MaxWidthWrapper';
import Navbar from '../Componenets/Navbar';
import { Loading, Sidebar } from '../Componenets';
import React, { useState } from 'react'
import Hero from './Hero';

const HomeLayout = () => {
  const[sideBarOpen,setSideBarOpen]=useState(false)
  const navigation=useNavigation()
  const isPageLoading = navigation.state === 'loading';
  return (

    <>

   
   <Navbar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}/>
  {sideBarOpen && <Sidebar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}/>}

{isPageLoading ? (
<Loading/>
):(
  !sideBarOpen && <Outlet />


)}
 
    </>
   
  )
}

export default HomeLayout