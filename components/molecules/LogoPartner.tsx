import Image from 'next/image'
import React from 'react'
import Text from '../atoms/Text'
interface LogoProps{
    imageSrc: string
    logoName: string
}
const LogoPartner = ({imageSrc, logoName}: LogoProps) => {
  return (
    <div className='flex space-x-4 items-center'>
        <Image 
            src={imageSrc}
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