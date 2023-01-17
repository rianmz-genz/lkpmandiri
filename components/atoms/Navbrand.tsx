import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface Props{
    logo: string
}
const Navbrand = ({logo}: Props) => {
  return (
    <div
    className={`select-none cursor-pointer`}
  >
    <Link href={'/'} passHref>
      <div className="w-fit h-fit">
        <Image src={`/images/${logo}.svg`} width={135} height={30} alt='company brand' loading='lazy' />
      </div>
    </Link>
  </div>
  )
}

export default Navbrand
