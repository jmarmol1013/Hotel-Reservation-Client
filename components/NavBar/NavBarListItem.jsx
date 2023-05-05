import Link from 'next/link'
import React from 'react'

export const NavBarListItem = ({item,closeNav,pathName}) => {
  return (
    <Link href={item.link} className={`${ item.link == pathName ? `text-fourth font-bold` : `text-white`} 
                                          block my-2 hover:text-fourth lg:inline-block lg:my-0  mr-4`} onClick={closeNav} >
        <p className='text-base'>{item.title}</p>
    </Link>
  )
}
