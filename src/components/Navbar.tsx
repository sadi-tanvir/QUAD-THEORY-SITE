import React from 'react'
import { DownArrowIcon, SearchCircleIcon, UserCircleIcon } from '@/components/shared/Icon';
import { Days_One } from 'next/font/google'
import NavItem from './shared/NavItem';

const daysFont = Days_One({ subsets: ['latin'], weight: '400' })
const Navbar = () => {
    return (
        <nav className='w-screen py-8 px-2 sm:px-0'>
            <div className="container mx-auto flex flex-row justify-between">
                <div className={`mr-5 sm:mr-0 text-[#221314] ${daysFont.className} text-3xl`}>pti.</div>
                <div className='flex flex-row'>
                    {/* search box */}
                    <div className='flex justify-center items-center bg-white rounded-lg px-5 mr-5 w-full'>
                        <SearchCircleIcon className='text-primary' />
                        <input
                            placeholder='Search Audiobook'
                            className='bg-transparent outline-none px-3 w-full'
                            type="text"
                        />
                    </div>

                    {/* dropdown menu */}
                    <div className='group/dropdown bg-white flex flex-row justify-center items-center px-4 sm:px-8 py-1 relative rounded-lg text-[#221314]'>
                        MENU
                        <DownArrowIcon className='ml-8 text-primary' />
                        <ul className='group-hover/dropdown:block bg-white absolute top-8 sm:top-10 z-30 pt-2 border-t-4 rounded-lg hidden'>
                            <NavItem path='/'>Home</NavItem>
                            <NavItem path='/details'>Details</NavItem>
                            <NavItem path='/category'>Category</NavItem>
                            <NavItem path='/myFavorite'>My Favorites</NavItem>
                            <NavItem path='/profile'>Profile</NavItem>
                            <NavItem path='/login'>Login/Sign Up</NavItem>
                        </ul>
                    </div>

                </div>
                <div className="account hidden sm:block">
                    <UserCircleIcon className='w-10 h-10 text-red-500' />
                </div>
            </div>
        </nav>
    )
}

export default Navbar