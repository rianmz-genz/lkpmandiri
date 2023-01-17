import Link, { LinkProps } from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
interface Props {
  href: string
  value: string
  canActive?: boolean
}
const NavLink = ({ href, value, canActive = false }: Props) => {
  const router = useRouter()
  return (
      <Link href={href} passHref>
        <p
          className={`text-base font-semibold ${
            router.pathname == href && canActive
              ? 'font-bold'
              : 'text-opacity-80'
          } cursor-pointer`}
        >
          {value}
        </p>
      </Link>
  )
}

export default NavLink
