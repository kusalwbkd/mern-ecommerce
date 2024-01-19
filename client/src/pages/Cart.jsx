import React from 'react'
import { useSelector } from 'react-redux'
import { CartItemsList, CartTotals, MaxWidthWrapper, SectionTitle } from '../Componenets'
import { Link } from 'react-router-dom';

const Cart = () => {

  const user = useSelector((state)=>state.userState.user);
  const numItemsInCart=useSelector((state)=>state.cartState.numItemsInCart)
  if(numItemsInCart === 0){
  return (
  <MaxWidthWrapper className={'flex justify-start mt-16 items-start'}>
  <SectionTitle text={'Your cart is empty'}/>
  </MaxWidthWrapper>
     
    
      
    
   
  )
  }
  return (
    <MaxWidthWrapper  >
    <div className=' mt-12'>
    <SectionTitle text={'Your Cart'}/>
    </div>
   <div className='mt-8 grid  gap-8 lg: grid-cols-12'>
    <div className='lg: col-span-8'>
    <CartItemsList/>
    </div>
    <div className='lg: col-span-4 lg:pl-4'>
    <CartTotals/>
    {user ? (
    <Link to='/checkout' className='btn btn-primary btn-block mt-8'>
    Proceed to checkout
  </Link>
    ):(
      <Link to='/login' className='btn btn-primary btn-block mt-8'>
              please login
            </Link>
    )}
    </div>
   

   </div>
    
    </MaxWidthWrapper>
  )
}

export default Cart