import React from "react";

import { Swiper, SwiperSlide} from 'swiper/react'
import { FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';

import { ProductCard } from "./component/Card";
import { Card } from "react-bootstrap";

export const ProductSlider = () => {
    return(
        <div className="container py-4 px-4 justify-content-center">
            <Swiper
                freeMode={true}
                grabCursor={true}
                modules={[FreeMode]}
                className="mySwiper"
                slidesPerView={5}
                spaceBetween={30}
            >
                <SwiperSlide>
                    <Card data={{imgSrc: "", price: '' }}/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
