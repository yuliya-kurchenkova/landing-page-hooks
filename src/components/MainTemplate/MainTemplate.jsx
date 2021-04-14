import React from 'react'
import classes from './MainTemplate.module.scss'
import ButtonTemplate from "../../components/ButtonTemlate/ButtonTemplate";
import user from '../../assets/img/user.png'
import location from '../../assets/img/location.png'
import server from '../../assets/img/server.png'

const MainTemplate = () => {

    return (
        <div className={classes.mainTemplate}>
            <div className={classes['mainTemplate__wrap']}>
                <h1 className='app__title app__title_pb'>Want anything to be easy with LaslesVPN.</h1>
                <p className={'app__text app__text_pb'}>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                <ButtonTemplate
                  buttonText={'Get Started'}
                  className={'app__button app__button_primary'}
                />
            </div>
            <div className={classes['mainTemplate__container']}>
                <div className={classes['mainTemplate__box']}>
                    <div>
                        <img
                            src={user}
                            alt=""
                        />
                    </div>
                    <div className={classes['mainTemplate__card']}>
                        <h4 className={classes['mainTemplate__subtitle']}>90+</h4>
                        <p className={classes['mainTemplate__text']}>Users</p>
                    </div>
                </div>
                {/*<div className={'mainTemplate__line'}> </div>*/}
                <div className={classes['mainTemplate__box']}>
                    <div>
                        <img
                            src={location}
                            alt=""
                        />
                    </div>
                    <div className={classes['mainTemplate__card']}>
                        <h4 className={classes['mainTemplate__subtitle']}>50+</h4>
                        <p className={classes['mainTemplate__text']}>Locations</p>
                    </div>
                </div>
                <div className={classes['mainTemplate__box']}>
                    <div>
                        <img
                            src={server}
                            alt=""
                        />
                    </div>
                    <div className={classes['mainTemplate__card']}>
                        <h4 className={classes['mainTemplate__subtitle']}>90+</h4>
                        <p className={classes['mainTemplate__text']}>Servers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainTemplate;
