import React from 'react'
import { Form,Link,Navigate,redirect, useNavigate } from 'react-router-dom'
import {FormInput, SubmitBtn} from '../Componenets'
import { customFetch } from '../utils'
import { toast } from 'react-toastify';
import { loginUser } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';

export const action=(store)=>async({request})=>{
  const formData=await request.formData()
  const data=Object.fromEntries(formData)

  try {
    const response = await customFetch.post('/auth/local/', data);
    

    store.dispatch(loginUser(response.data))
    toast.success('logged in succesfully!');
    return redirect('/');
   
  } catch (error) {
    const errorMessage =
    error?.response?.data?.error?.message ||
    'please double check your credentials';

  toast.error(errorMessage);
  return null;
  }
}
const Login = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()


  const loginAsGuestUser=async()=>{
    try {
      const response = await customFetch.post('/auth/local/', {

        identifier: 'test@test.com',
        password: 'secret',

      });
      
      dispatch(loginUser(response.data));
      toast.success('welcome guest user');
      navigate('/');
     
    } catch (error) {
      console.log(error);
      toast.error('guest user login error.please try later.');
    return null;
    }
  }
  return (
    <section className='h-screen grid place-items-center'>
    <Form className="card w-96 bg-base-100 shadow-xl" method='post'>
  <div className="card-body">
  <h4 className='text-center text-3xl font-bold'>Login</h4>
       
        <FormInput type='email' label='email' name='identifier' />
        <FormInput type='password' label='password' name='password' /> 
    <div className="card-actions  mt-5">
     <SubmitBtn text={'Login'}/>
    </div>
    <div className="card-actions  mt-5">
    <button
  type='button'
  className='btn btn-secondary btn-block'
  onClick={loginAsGuestUser}
>
  guest user
</button>
    </div>

    <p className='text-center'>
          Not a member yet?
          <Link
            to='/register'
            className='ml-2 link link-hover link-primary capitalize'
          >
            register
          </Link>
        </p>
  </div>
</Form>
</section>
  )
}

export default Login