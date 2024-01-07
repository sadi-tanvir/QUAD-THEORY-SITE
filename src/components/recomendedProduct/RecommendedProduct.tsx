/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
'use client'
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from "swiper/modules";
import Modal from "../shared/Modal";
import { productSchema } from "@/schemas";
import { useFormik } from "formik";
import BtnSlider from "./BtnSlider";

interface ProductsType {
    Id: string;
    Name: string;
    Price: number;
    ImageUrl: string;
    IsPopular: boolean;
    IsRecommended: boolean;
}


const initialValues = {
    id: "",
    name: "",
    price: "",
    image: ""
}

export default function RecommendedProducts() {
    const [photos, setPhotos] = useState<ProductsType[]>([])

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: productSchema,
        onSubmit: (values, action) => {
            setPhotos([{
                Id: values.id,
                Name: values.name,
                Price: Number(values.price),
                ImageUrl: values.image,
                IsPopular: true,
                IsRecommended: false
            }, ...photos])

            action.resetForm();
        }
    })


    useEffect(() => {
        (async () => {
            const res = await fetch("http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10")
            const data = await res.json()
            setPhotos(data.Items)
        })()
    }, [])

    return (
        <section className="container mx-auto flex justify-center items-center px-2 sm:px-0 mb-10">
            <Modal
                id="addRecommendedProductModal"
                title="Add Recommended Product"
                values={values}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                handleBlur={handleBlur}
                touched={touched}
                errors={errors}
            />

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