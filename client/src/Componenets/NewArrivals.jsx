import React from 'react'
import ProductsGrid from './ProductsGrid';
import SectionTitle from './SectionTitle';
const NewArrivals = () => {
  return (
    <div className='pt-24 '>
    <SectionTitle text='new arrivals' />
    <ProductsGrid />
  </div>
  )
}

export default NewArrivals