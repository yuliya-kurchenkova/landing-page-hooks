import React from 'react'
import logo from "../../assets/img/logo.png";
import classes from './FooterTemplate.module.scss'
import facebook from '../../assets/img/facebook.png'
import twitter from '../../assets/img/twitter.png'
import instagram from '../../assets/img/instagram.png'


const FooterTemplate = () => (
    <div className={classes.footerTemplate}>
        <div className={'app__wrapper'}>
            <div className={classes['footerTemplate__card']}>
                <div className={classes['footerTemplate__box']}>
                    <div className={classes['footerTemplate__container']}>
                        <a
                            href='/'
                            className='app__logo'
                        >
                            <img
                                src={logo}
                                alt=''
                                className={classes['footerTemplate__img']}
                            />
                            <span className={classes['footerTemplate__logo-text']}>LaslesVPN</span>
                        </a>
                    </div>
                        <div className={classes['footerTemplate-box__text']}>
                            <p className='app__text'>LaslesVPN is a private virtual network that has unique features and has high security.</p>
                        </div>
                    <div className={classes['footerTemplate__socials']}>
                        <div>
                            <img
                                src={facebook}
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                src={twitter}
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                src={instagram}
                                alt=""
                            />
                        </div>
                        </div>
                        <div className={classes['footerTemplate__copy']}>
                            <p className='app__text'>©2021LaslesVPN</p>
                        </div>
                    </div>
                <div className={classes['footerTemplate-box__link']}>
                    <h4 className={classes['footerTemplate__subtitle']}>Product</h4>
                    <ul>
                        <li className={classes['footerTemplate__item']}>
                            <a className='app__text' href="/">Download</a>
                        </li>
                        <li className={classes['footerTemplate__item']}>
                            <a className='app__text' href="/">Pricing</a><
                            /li>
                        <li className={classes['footerTemplate__item']}>
                            <a className='app__text' href="/">Locations</a
                            ></li>
                        <li className={classes['footerTemplate__item']}>
                            <a className='app__text' href="/">Server</a></
                            li>
                        <li className={classes['footerTemplate__item']}>
                            <a className='app__text' href="/">Countries</a
                            ></li>
                        <li className={classes['footerTemplate__item']}>
                            <a className='app__text' href="/">Blog</a></li
                        >
                    </ul>
                </div>
                <div className={classes['footerTemplate-box__link']}>
                    <h4 className={classes['footerTemplate__subtitle']}>Engage</h4>
                    <ul>
                        <li className={classes['footerTemplate__item']}>
                            <a className='app__text' href="/">LaslesVPN</a
                            ></li>
                        <li className={classes['footerTemplate__item']}>
                            <a className='app__text' href="/">FAQ</a></li>

                        <li className={classes['footerTemplate__item']}>
                            <a className='app__text' href="/">Tutorials</a
                            ></li>
                        <li className={classes['footerTemplate__item']}>
                            <a className='app__text' href="/">About Us</a>
                        </li>
                        <li className={classes['footerTemplate__item']}>
                            <a className='app__text' href="/">Privacy Poli
                                cy</a></li>
                        <li className={classes['footerTemplate__item']}>
                            <a className='app__text' href="/">Terms of Ser
                                vice</a></li>
                    </ul>
                </div>
                <div className={classes['footerTemplate-box__link']}>
                    <h4 className={classes['footerTemplate__subtitle']}>Earn Money</h4>
                    <ul>
                        <li className={classes['footerTemplate__item']}>
                            <a className='app__text' href="/">Affiliate</a
                            ></li>
                        <li className={classes['footerTemplate__item']}>
                            <a className='app__text' href="/">Become Partner</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)
export default FooterTemplate;