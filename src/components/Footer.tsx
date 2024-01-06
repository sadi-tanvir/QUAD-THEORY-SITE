import React from 'react'
import { GoogleIcon, InstagramIcon, LongRightArrowIcon, TwitterIcon } from '@/components/shared/Icon'
import { Days_One } from 'next/font/google'

const daysFont = Days_One({ subsets: ['latin'], weight: '400' })

const Footer = () => {
    return (
        <div className='w-screen bg-[#f99f1c] sm:pb-16'>
            <div className='container mx-auto flex justify-center sm:justify-between items-center h-auto py-10 sm:py-0'>
                {/* search box */}
                <div className='flex flex-col justify-center items-center sm:items-start px-4 sm:px-0'>
                    <div className='flex justify-center items-center bg-white rounded-lg sm:rounded-2xl px-5 py-1 sm:mr-5 w-full'>
                        <input
                            placeholder='Enter Your Email'
                            className='bg-transparent outline-none px-3 w-full'
                            type="text"
                        />
                        <button className='sm:bg-primary text-primary font-bold sm:text-white px-6 py-[7px] rounded-xl flex justify-center items-center'>
                            Subscribe
                            <LongRightArrowIcon className='ml-2' />
                        </button>
                    </div>
                    <div className='w-full flex flex-col-reverse sm:flex-row justify-between items-center sm:items-end mt-8 sm:mt-20'>
                        <div className=''>
                            <h1 className={`${daysFont.className} text-3xl text-center sm:text-start mb-8 sm:mb-0`}>pti <span className='text-primary -ml-1'>.</span></h1>
                            <span className='font-semibold'>Copyright ©Tripp.All Right Reserved</span>
                        </div>
                        <div className='flex space-x-3 mb-8 sm:mb-0'>
                            <GoogleIcon className='text-[#fdd2a1] sm:text-primary bg-primary sm:bg-[#fdd2a1] rounded-full p-2 h-8 w-8' />
                            <TwitterIcon className='text-[#fdd2a1] sm:text-primary bg-primary sm:bg-[#fdd2a1] rounded-full p-2 h-8 w-8' />
                            <InstagramIcon className='text-[#fdd2a1] sm:text-primary bg-primary sm:bg-[#fdd2a1] rounded-full p-2 h-8 w-8' />
                        </div>
                    </div>
                </div>
                <div className='hidden sm:block'>
                    <img className='h-80' src="/footer-image.png" alt="footer-image" />
                </div>
            </div>
        </div>
    );
};

export default Footer;