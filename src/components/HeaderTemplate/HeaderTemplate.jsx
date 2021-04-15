import React, {useState} from 'react'
import classes from './HeaderTemplate.module.scss'
import NavTemplate from "../NavTemplate/NavTemplate";
import logo from '../../assets/img/logo.png'
import ButtonTemplate from '../ButtonTemlate/ButtonTemplate'
import ModalTemplate from "../ModalTemplate/ModalTemplate";



const HeaderTemplate = () => {

    const [isVisibleModal, setIsVisibleModal] = useState(false)

    const signInModal = () => {
        setIsVisibleModal(!isVisibleModal);
    }
    function signUpModal() {
        setIsVisibleModal(!isVisibleModal);
    }

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
                    onClick={signInModal}
                />
                <ButtonTemplate
                    buttonText={'Sign Up'}
                    className={'app__button app__button_border'}
                    onClick={signUpModal}
                />
            </div>
            {
                isVisibleModal
                    ? <ModalTemplate
                        title={'Авторизация'}
                    />
                    : null
            }
        </div>
    )
}
export default HeaderTemplate;
// isModal useState(false)
// передаем в хеадер прпс ис модал, и метод который меняет пропс
// модалка-cоздание 1) имя. почта пароль (с типами, передать пропсы) кнопка(console.log(с данными))
// модалка-логин 2) 2 поля- логин и пароль кнопка(console.log(с данными))
//