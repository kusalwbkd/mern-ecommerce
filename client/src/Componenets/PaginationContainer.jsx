import React from 'react'
import { useLoaderData, useLocation ,useNavigate} from 'react-router-dom'

const PaginationContainer = () => {
  const {meta}=useLoaderData()

  const { pageCount, page } = meta.pagination;

const{search,pathname}=useLocation()
const navigate = useNavigate();

const pages=Array.from({length:pageCount},(_,index)=>{

  return index+1;

})

const handlePageChange=(pageNumber)=>{
const searchParams=new URLSearchParams(search)

searchParams.set('page',pageNumber)
navigate(`${pathname}?${searchParams.toString()}`);
}

if(pageCount < 2){
  return null
}
  return (
    <div className=' mt-16 flex justify-end'>
     <div className="join">
      <button className=' btn btn-xs bg-gray-400 sm:btn-md join-item'
      onClick={()=>{
        let PrevPage=page-1

        if(PrevPage < 1) PrevPage =pageCount
        handlePageChange(PrevPage)
      
      }}
      >
       Prev
      </button>

      {pages.map((pageNumber)=>{
        return <button
        key={pageNumber}
        className=   {`btn btn-xs sm:btn-md join-item ${pageNumber === page ?' bg-base-300 border border-base-300' :''}`} 
         onClick={()=>handlePageChange(pageNumber)}>{pageNumber}</button>
      })}
      <button className='  btn btn-xs bg-gray-400 sm:btn-md join-item'
      onClick={()=>{
        let nextPage=page+1

        if(nextPage > pageCount ){
         nextPage =1;
        }
        handlePageChange(nextPage)
        
      }}
      >
       Next
      </button>
     </div>
    </div>
  )
}

export default PaginationContainer