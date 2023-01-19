import Image from 'next/image'
import React from 'react'
import Text from '../atoms/Text'
interface LogoProps{
    imageSrc: string
    logoName: string
}
const LogoPartner = ({imageSrc, logoName}: LogoProps) => {
  return (
    <div className='flex lg:space-x-4 space-x-2 justify-center items-center'>
        <Image 
            src={imageSrc}
            className='lg:w-3/12 w-8/12'
            width={70}
            height={70}
            alt='Company Brand'
        />
        <Text 
            textStyle='CompanyName'
            value={logoName}
        />
    </div>
  )
}

export default LogoPartner
export type  {LogoProps}