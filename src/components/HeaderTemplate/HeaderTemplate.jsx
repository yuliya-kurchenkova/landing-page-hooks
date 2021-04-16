import React from 'react'
import classes from './HeaderTemplate.module.scss'
import NavTemplate from "../NavTemplate/NavTemplate";
import logo from '../../assets/img/logo.png'
import ButtonTemplate from '../ButtonTemlate/ButtonTemplate'

const HeaderTemplate = (props) => {

    return (

        <div className={classes.headerTemplate}>
            <div className={classes['headerTemplate__box']}>
                <a
                    href='/'
                    className={'app__logo'}
                >
                    <img
                        src={logo}
                        alt={''}
                        className={classes['headerTemplate__img']}
                    />
                    <span className={classes['headerTemplate__logo-text']}>LaslesVPN</span>
                </a>
            </div>
            <NavTemplate/>
            <div className={classes['headerTemplate__box']}>
                <ButtonTemplate
                    buttonText={'Sign In'}
                    className={'app__button'}
                    onClick={props.modalAction}
                    modalEffect={true}
                />
                <ButtonTemplate
                    buttonText={'Sign Up'}
                    className={'app__button app__button_border'}
                    onClick={props.modalAction}
                    modalEffect={true}
                />
            </div>
        </div>
    )
}
export default HeaderTemplate;
