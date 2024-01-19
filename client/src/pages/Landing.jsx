import React from 'react'
import Hero from './Hero'
import { customFetch } from '../utils'
import { FeaturedProducts, NewArrivals, SpecialOffers } from '../Componenets';
const url = '/products?featured=true';


const featuredProductsQuery = {

 
    queryKey: ['featuredProducts'],
    queryFn: () => customFetch(url),
  

};


export const loader=(queryClient)=>async()=>{
  const response=await queryClient.ensureQueryData(featuredProductsQuery)
 
  const products = response.data.data;
  return { products };
}
const Landing = () => {

  return (
    <>
     <Hero/>
    <FeaturedProducts/>
    <SpecialOffers/>
    <NewArrivals/>
    </>
  
   
    
  )
}

export default Landing