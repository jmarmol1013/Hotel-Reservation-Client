import Link from 'next/link'
import React from 'react'
import { NavBarListItem } from './NavBarListItem'

export const NavBarList = ({items,closeNav,pathName,user}) => {
  return (
    <div className="lg:flex-grow flex-row justify-start items-center lg:flex lg:justify-end ml-4">
        <div className='divide-y-2 lg:divide-y-0'>
            { items ? 
                items.map((item,index) => 
                    <NavBarListItem 
                        key={index}
                        item={item}
                        closeNav={closeNav}
                        pathName={pathName}
                    />)
                :
                null
            }
        </div>
        {
            user ? 
            <div className='flex flex-col items-center lg:flex-row lg:items-center text-center'>
                <Link href='/my-bookings' className={`${ pathName == 'my-bookings' ? `text-fourth font-bold` : `text-white`} 
                                    hover:text-fourth lg:ml-3 w-[50%] lg:mr-4 mb-2 lg:mb-0`}>  
                    <p className='text-base'>My bookings</p>
                </Link>
                <button className='bg-[#D9D9D9] rounded-md text-primary w-[95%] lg:rounded-none lg:w-[50%] py-2 mb-4 lg:mb-0 lg:py-9 lg:px-8 hover:text-fourth'>
                    <p className='w-full'>Log Out</p>
                </button>
            </div>
            :
            <button className='bg-[#D9D9D9] rounded-md text-primary w-[95%] lg:rounded-none lg:w-full py-2 mb-4 lg:mb-0 lg:py-9 lg:px-8 hover:text-fourth'>Log In</button>
        }
    </div>
    
  )
}
