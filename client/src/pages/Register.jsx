import React from 'react'

import { Form, redirect, Link } from 'react-router-dom';
import {FormInput, SubmitBtn} from '../Componenets'
import { customFetch } from '../utils'
import { toast } from 'react-toastify';

export const action=async({request})=>{

  const formData=await request.formData()
  const data=Object.fromEntries(formData)

  try {
    const response = await customFetch.post('/auth/local/register', data);
    toast.success('account created successfully');
    return redirect('/login');
  } catch (error) {
    const errorMessage =
    error?.response?.data?.error?.message ||
    'please double check your credentials';

  toast.error(errorMessage);
  return null;
  }
}
const Register = () => {


  return (
  <section className='h-screen grid place-items-center'>
<Form className="card w-96 bg-base-100 shadow-xl" method='post'>
  <div className="card-body">
  <h4 className='text-center text-3xl font-bold'>Register</h4>
        <FormInput type='text' label='username' name='username' />
        <FormInput type='email' label='email' name='email' />
        <FormInput type='password' label='password' name='password' /> 
    <div className="card-actions  mt-5">
     <SubmitBtn text={'Register'}/>
    </div>
  </div>
</Form>
  </section>
  )
}

export default Register