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
import { useAppSelector } from "@/redux/hooks/hooks";

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
    // state
    const [allProducts, setAllProducts] = useState<ProductsType[]>([])

    // redux
    const { products } = useAppSelector(state => state.productReducer);


    // formik and yup validation
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: productSchema,
        onSubmit: (values, action) => {
            setAllProducts([{
                Id: values.id,
                Name: values.name,
                Price: Number(values.price),
                ImageUrl: values.image,
                IsPopular: true,
                IsRecommended: false
            }, ...allProducts])

            action.resetForm();
        }
    });


    // load redux store products to allProduct state
    useEffect(() => {
        if (products?.length) setAllProducts(products)
    }, [products]);

    return (
        <section className="container mx-auto flex justify-center items-center px-2 sm:px-0 mb-10">
            {/* product add modal */}
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

            {/* product display */}
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
                    allProducts.map((product: ProductsType) => (
                        <SwiperSlide className="res-slide">
                            <div key={product.Id} className="w-full h-auto">
                                <img
                                    className="w-full h-32 sm:h-48 md:h-56 lg:h-64 rounded-lg"
                                    key={product.Id} src={product.ImageUrl}
                                    alt={product.Name}
                                />
                                <p className="text-[#6e7a87] text-sm sm:text-lg">{product.Name}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    )
};