import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Virtual } from 'swiper';
import 'swiper/swiper.scss';


SwiperCore.use([Virtual]);

const SliderTemplate = (props) => {
    console.log(props)
    return (
        <Swiper spaceBetween={50} slidesPerView={3} virtual>
            {props.sliderBlock.map((slideContent, index) => {
                return (
                <SwiperSlide key={index} virtualIndex={index}>
                    {slideContent.name}
                    {slideContent.city}
                    {slideContent.grade}
                    {slideContent.text}
                </SwiperSlide>
            )
            })}
        </Swiper>
    )
}
export default SliderTemplate;
