import React from 'react'

const FormInput = ({label,type,name,size,defaultValue}) => {
  return (
    <label className="form-control w-full max-w-xs">
  <div className="label">
  <span className='label-text capitalize  font-semibold'>{label}</span>
  </div>
  <input 
  type={type}
  name={name}
   placeholder={`Type your ${name} here`}
   defaultValue={defaultValue}
   className={`input input-bordered ${size}`}/>
   
  
</label>
  )
}

export default FormInput