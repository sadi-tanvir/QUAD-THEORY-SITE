/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
'use client'
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from "swiper/modules";
import BtnSlider from "@/components/popularProduct/BtnSlider";

interface ProductsType {
    Id: string;
    Name: string;
    Price: number;
    ImageUrl: string;
    IsPopular: boolean;
    IsRecommended: boolean;
}

export default function PopularProducts() {
    const [photos, setPhotos] = useState<ProductsType[]>([])

    useEffect(() => {
        (async () => {
            const res = await fetch("http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10")
            const data = await res.json()
            setPhotos(data.Items)
        })()
    }, [])

    return (
        <section className="container mx-auto flex justify-center items-center px-2 sm:px-0 mb-10">
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                navigation={{
                    nextEl: ".review-swiper-button-next",
                    prevEl: ".review-swiper-button-prev"
                }}
                breakpoints={{
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    }
                }}
                modules={[Navigation]}
                className="mySwiper"
            >
                <BtnSlider />
                {
                    photos.map((photo: ProductsType) => (
                        <SwiperSlide className="res-slide">
                            <div key={photo.Id} className="w-full h-auto">
                                <img
                                    className="w-full h-32 sm:h-48 md:h-56 lg:h-64 rounded-lg"
                                    key={photo.Id} src={photo.ImageUrl}
                                    alt={photo.Name}
                                />
                                <p className="text-[#6e7a87] text-sm sm:text-lg">{photo.Name}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    )
};