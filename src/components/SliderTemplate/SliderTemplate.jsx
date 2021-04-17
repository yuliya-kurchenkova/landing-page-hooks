import React, {useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Virtual, Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import classes from './SlideTemplate.module.scss'
import 'swiper/swiper-bundle.min.css';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-fade/effect-fade.scss';




SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Virtual, EffectFade]);
const SliderTemplate = (props) => {
    console.log(props)
    const [firstSwiper, setFirstSwiper] = useState(null);
    return (
        <Swiper
            effect="fade"
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            slidesPerGroup={3}
            loop={true}
            virtual

            onSwiper={setFirstSwiper} controller={{ control: firstSwiper }}
        >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i, el) => {
                return <SwiperSlide>Slide {el}</SwiperSlide>;
            })}
            {/*{props.sliderBlock.map((slideContent, index) => {*/}
            {/*    return (*/}
            {/*    <SwiperSlide key={index} virtualIndex={index} className='app__slider'>*/}
            {/*        <div className={classes.slideTemplate}>*/}
            {/*            <div className={classes['slideTemplate__wrap']}>*/}
            {/*                    <div className={classes['slideTemplate__container']}>*/}
            {/*                        <img*/}
            {/*                            src={slideContent.src}*/}
            {/*                            alt=""/>*/}
            {/*                            <div className={classes['slideTemplate__box']}>*/}
            {/*                                <h2 className={classes['slideTemplate__subtitle']}>{slideContent.name}</h2>*/}
            {/*                                <p className='app__small-text'>{slideContent.city}</p>*/}
            {/*                            </div>*/}
            {/*                    </div>*/}
            {/*                <p className={classes['slideTemplate__subtitle']}>{slideContent.grade}</p>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <p className='app__text'>{slideContent.text}</p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </SwiperSlide>*/}
            {/*)*/}
            {/*})}*/}
        </Swiper>
    )
}
export default SliderTemplate;
