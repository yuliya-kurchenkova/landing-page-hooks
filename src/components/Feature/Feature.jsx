import React from 'react'
import feature from '../../assets/img/features.png'
import check from '../../assets/img/check.png'
import classes from './Feature.module.scss'

const Feature = () => (

    <div  className={classes.feature}>
        <div className={classes['feature__img']}>
            <img
                src={feature}
                alt=""
            />
        </div>
        <div className={classes['feature__box']}>
            <h2 className='app__subtitle app__subtitle_pb'>We Provide Many Features You Can Use</h2>
            <p className='app__text app__text_pb'>You can explore the features that we provide with fun and have their own functions each feature.</p>
            <div className={classes['feature__list']}>
                <div className={classes['feature__item']}>
                    <img
                        src={check}
                        alt=""
                    />
                    <p className='app__small-text app__small-text_ml'>Powerfull online protection.</p>
                </div>
                    <div className={classes['feature__item']}>
                    <img
                        src={check}
                        alt=""
                    />
                    <p className='app__small-text app__small-text_ml'>Internet without borders.</p>
                    </div>
                <div className={classes['feature__item']}>
                    <img
                        src={check}
                        alt=""
                    />
                    <p className='app__small-text app__small-text_ml'>Supercharged VPN</p>
                </div>
                    <div className={classes['feature__item']}>
                    <img
                        src={check}
                        alt=""
                    />
                    <p className='app__small-text app__small-text_ml'>No specific time limits.</p>
                </div>
            </div>
        </div>

    </div>

)
export default Feature;