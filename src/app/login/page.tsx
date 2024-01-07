'use client'
import { useAppSelector } from '@/redux/hooks/hooks';
import React from 'react'

const Login = () => {
  // redux
  const { isAuthenticate } = useAppSelector(state => state.globalReducer);

  
  return (
    <div className='container mx-auto h-[80vh] flex justify-center items-center'>
      <img src="https://themewagon.com/wp-content/uploads/2021/06/3.gif" alt="login image" />
    </div>
  )
}

export default Login