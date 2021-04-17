import React from 'react'
import free from '../../assets/img/free.png'
import vector from '../../assets/img/vector.png'
import ButtonTemplate from "../ButtonTemlate/ButtonTemplate";
import classes from './PriceTemplate.module.scss'

const PriceTemplate = () => {
    return (
        <div className={classes.priceTemplate}>
            <div className={classes['priceTemplate-box__subtitle']}>
                <h2 className='app__subtitle app__subtitle_pb'>Choose Your Plan</h2>
            </div>
            <div className={classes['priceTemplate-box__text']}>
                <p className='app__text'>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
            </div>
            <div className={classes['priceTemplate__container']}>
                <div className={classes['priceTemplate__box']}>
                    <div>
                        <img
                            src={free}
                            alt=""
                            className={classes['priceTemplate__img']}
                        />
                        <h4 className={classes['priceTemplate__subtitle']}>Free Plan</h4>
                    </div>
                    <div className={classes['priceTemplate-box__item']}>
                        <div className={classes['priceTemplate__item']}>
                            <img
                                src={vector}
                                alt=""
                            />
                            <p className='app__small-text app__small-text_marLeft'>Unlimited Bandwitch</p>
                        </div>
                        <div className={classes['priceTemplate__item']}>
                            <img
                                src={vector}
                                alt=""
                            />
                            <p className='app__small-text app__small-text_marLeft'>Encrypted Connection</p>
                        </div>
                        <div className={classes['priceTemplate__item']}>
                            <img
                                src={vector}
                                alt=""
                            />
                            <p className='app__small-text app__small-text_marLeft'>No Traffic Logs</p>
                        </div>
                        <div className={classes['priceTemplate__item']}>
                            <img
                                src={vector}
                                alt=""
                            />
                            <p className='app__small-text app__small-text_marLeft'>Works on All Devices</p>
                        </div>
                    </div>
                        <div>
                            <h3 className={classes['priceTemplate__subtitle-text']}>Free</h3>
                            <ButtonTemplate
                                buttonText={'Select'}
                                className={'app__button app__button_border'}
                            />
                        </div>
                </div>
            <div className={classes['priceTemplate__box']}>
                <div>
                    <img
                        src={free}
                        alt=""
                        className={classes['priceTemplate__img']}
                    />
                    <h4 className={classes['priceTemplate__subtitle']}>Standard Plan</h4>
                </div>
                <div className={classes['priceTemplate-box__item']}>
                    <div className={classes['priceTemplate__item']}>
                        <img
                            src={vector}
                            alt=""
                        />
                        <p className='app__small-text app__small-text_marLeft'>Unlimited Bandwitch</p>
                    </div>
                    <div className={classes['priceTemplate__item']}>
                        <img
                            src={vector}
                            alt=""
                        />
                        <p className='app__small-text app__small-text_marLeft'>Encrypted Connection</p>
                    </div>
                    <div className={classes['priceTemplate__item']}>
                        <img
                            src={vector}
                            alt=""
                        />
                        <p className='app__small-text app__small-text_marLeft'>Yes Traffic Logs</p>
                    </div>
                    <div className={classes['priceTemplate__item']}>
                        <img
                            src={vector}
                            alt=""
                        />
                        <p className='app__small-text app__small-text_marLeft'>Works on All Devices</p>
                    </div>
                    <div className={classes['priceTemplate__item']}>
                        <img
                            src={vector}
                            alt=""
                        />
                        <p className='app__small-text app__small-text_marLeft'>Connect Anyware</p>
                    </div>
                </div>
                    <div>
                        <h3 className={classes['priceTemplate__subtitle-text']}>$9 / mo</h3>
                        <ButtonTemplate
                            buttonText={'Select'}
                            className={'app__button app__button_border'}
                        />
                    </div>
            </div>
            <div className={classes['priceTemplate__box']}>
                <div>
                    <img
                        src={free}
                        alt=""
                        className={classes['priceTemplate__img']}
                    />
                    <h4 className={classes['priceTemplate__subtitle']}>Free Plan</h4>
                </div>
                <div className={classes['priceTemplate-box__item']}>
                    <div className={classes['priceTemplate__item']}>
                        <img
                            src={vector}
                            alt=""
                        />
                        <p className='app__small-text app__small-text_marLeft'>Unlimited Bandwitch</p>
                    </div>
                    <div className={classes['priceTemplate__item']}>
                        <img
                            src={vector}
                            alt=""
                        />
                        <p className='app__small-text app__small-text_marLeft'>Encrypted Connection</p>
                    </div>
                    <div className={classes['priceTemplate__item']}>
                        <img
                            src={vector}
                            alt=""
                        />
                        <p className='app__small-text app__small-text_marLeft'>No Traffic Logs</p>
                    </div>
                    <div className={classes['priceTemplate__item']}>
                        <img
                            src={vector}
                            alt=""
                        />
                        <p className='app__small-text app__small-text_marLeft'>Works on All Devices</p>
                    </div>
                </div>
                    <div>
                            <h3 className={classes['priceTemplate__subtitle-text']}>$12 / mo</h3>
                        <ButtonTemplate
                            buttonText={'Select'}
                            className={'app__button app__button_border-success'}
                        />
                    </div>

            </div>
            </div>
        </div>
    )
}
export default PriceTemplate;