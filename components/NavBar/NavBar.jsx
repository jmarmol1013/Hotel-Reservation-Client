import { useRouter } from 'next/router';
import React, { useState } from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import { NavBarList } from './NavBarList';

export const NavBar = () => {
    const [isExpanded, toggleExpansion] = useState(false);
    const [user,setUser] = useState(true)

    const closeNav = () => {
        toggleExpansion(false);
    }

    const router = useRouter();

    const items = [{
        title:'Home',
        link:'/',
    },{
        title:'Rooms',
        link:'/rooms',
    },{
        title:'Booking',
        link:'/booking',
    },{
        title:'Contact',
        link:'/contact',
    }];

    return (
        <nav className='flex items-center justify-between flex-wrap text-[#FFFFFF] bg-primary w-full'>
            <div className="flex-row justify-start text-center flex-shrink-0 ml-6 max-w-[45%] py-2">
                <h1 className='lg:text-4xl text-xl'>Lakeside House</h1>
                <p className='lg:text-xl text-base'>Luxury Hotel</p>
            </div>
            <div className="block mr-4 lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:border-fourth" 
                onClick={() => toggleExpansion(!isExpanded) } >
                <RxHamburgerMenu className='h-4'/>
                </button>
            </div>
            <div className={`${
                        isExpanded ? `block text-left` : `hidden text-right`
                    } w-full flex-grow lg:flex lg:items-center lg:w-auto`}>
                    <NavBarList 
                        items={items}
                        closeNav={closeNav}
                        pathName={router.pathname}
                        user={user}
                    />
            </div>
        </nav>
    )
}
