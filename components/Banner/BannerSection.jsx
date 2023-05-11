import React from 'react'
import { BannerInformation } from './BannerInformation'
import { ImageBackground } from './ImageBackground'

export const BannerSection = () => {
  return (
    <div className='w-full'>
      <ImageBackground />
      <BannerInformation/>
    </div>
  )
}
