import React from 'react'

const Banner = () => {
    return (
        <section className='container mx-auto px-2 sm:px-16 sm:bg-[#f99f1c] h-auto rounded-3xl flex justify-between items-center my-10'>
            <div className="hidden sm:block">
                <h1 className='text-3xl text-white font-bold'>Deliver Food To Your Door Staple</h1>
                <p className='text-white'>Authentic Food, Quick Service, Fast Delivery</p>
            </div>
            <div className="bg-[#fd9460] sm:bg-transparent rounded-3xl mt-20 sm:mt-0">
                <img
                    className='-mt-24 sm:mt-0'
                    src="/banner-image.png"
                    alt="man-image"
                />
            </div>
        </section>
    );
};

export default Banner;