import React, { useState } from 'react'
import { useSwiper } from 'swiper/react'
import { LeftArrowIcon, RightArrowIcon } from '@/components/shared/Icon';

const BtnSlider = () => {
    // state
    const [activeStatus, setActiveStatus] = useState(0)

    // swiper hook
    const swiper = useSwiper();

    // handle previous slide
    const handlePrevSlide = () => {
        swiper.slidePrev()
        setActiveStatus(swiper.activeIndex)
    }

    // handle previous slide
    const handleNextSlide = () => {
        swiper.slideNext()
        setActiveStatus(swiper.activeIndex)
    }

    return (
        <div className='-order-2 flex flex-row justify-between pb-3'>
            {/* The button to open modal */}

            <p className='text-md sm:text-xl text-[#221314]'>Popular</p>

            <label htmlFor="addPopularProductModal" className='text-primary ml-auto mr-2 hidden sm:block cursor-pointer'>
                AddMore
            </label>
            <div>
                <button className={``} onClick={handlePrevSlide}>
                    <LeftArrowIcon activeStatus={activeStatus} />
                </button>
                <button className={``} onClick={handleNextSlide}>
                    <RightArrowIcon />
                </button>
            </div>
        </div>
    )
}

export default BtnSlider