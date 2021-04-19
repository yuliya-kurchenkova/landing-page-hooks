import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Virtual, Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import classes from './SlideTemplate.module.scss'
import 'swiper/swiper-bundle.min.css';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import classesFeedback from "../Feedback/Feedback.module.scss"

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Virtual]);
const SliderTemplate = (props) => {

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            autoplay={true}
            navigation
            pagination={{ clickable: true }}
            loop={true}
        >
            {props.sliderBlock.map((slideContent, index) => {
                return <SwiperSlide className={classesFeedback['feedback__slider-item']} key={index}>
                    <div className={classes.slideTemplate}>
                        <div className={classes['slideTemplate__wrap']}>
                            <div className={classes['slideTemplate__container']}>
                                <img
                                    src={slideContent.src}
                                    alt=""/>
                                <div className={classes['slideTemplate__box']}>
                                    <h2 className={classes['slideTemplate__subtitle']}>{slideContent.name}</h2>
                                    <p className='app__small-text'>{slideContent.city}</p>
                                </div>
                            </div>
                            <p className={classes['slideTemplate__subtitle']}>{slideContent.grade}</p>
                        </div>
                        <div>
                            <p className='app__text'>{slideContent.text}</p>
                        </div>
                    </div>
                </SwiperSlide>;
            })}
        </Swiper>
    )
}
export default SliderTemplate;
