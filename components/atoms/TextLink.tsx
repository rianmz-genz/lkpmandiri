import Link from 'next/link'
import React from 'react'
import Text from './Text'
interface TextLink{
    href: string
    value:string
}
const TextLink = ({href, value}: TextLink) => {
  return (
    <Link href={href}>
        <Text textStyle="Description" value={value} />
    </Link>
  )
}

export default TextLink