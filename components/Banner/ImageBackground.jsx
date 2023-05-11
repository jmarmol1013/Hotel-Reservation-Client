import Image from 'next/image'
import React from 'react'

export const ImageBackground = () => {
  return (
    <>
        <Image 
            src='https://images.unsplash.com/photo-1506059612708-99d6c258160e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2969&q=80'
            height={1000}
            width={1600}
            className='absolute'
        />
    </>
  )
}
