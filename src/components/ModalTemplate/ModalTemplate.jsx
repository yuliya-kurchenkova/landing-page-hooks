import React, { useState } from 'react'
import InputTemplate from "../InputTemplate/InputTemplate";
import ButtonTemplate from "../ButtonTemlate/ButtonTemplate";

const ModalTemplate = (props) => {
    const [inputName, setInputName] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [inputEmail, setInputEmail] = useState("");

    const handlerName = e => {
        setInputName(e.target.value)
    }
    const handlerPassword = e => {
        setInputPassword(e.target.value)
    }
    const handlerEmail = e => {
        setInputEmail(e.target.value)
    }

    return (
        <div className='app-modal'>
            <div className='app-modal__header'>
                <ButtonTemplate
                    buttonText={'x'}
                    onClick={props.toggleModal}
                    className='app__button app__button_back'
                />
                {
                    props.isModalType === 'signup' ?
                        <h2>Регистрация</h2>
                        : <h2>Aвторизация</h2>
                }
            </div>
            {/*<div className='app-modal__content'>*/}
                {
                    props.isModalType === 'signup' ?  <InputTemplate
                        placeholder={'name'}
                        value={inputName}
                        onChange={handlerName}
                    />
                   : null
                }
            {/*</div>*/}
                <InputTemplate
                    placeholder={'e-mail'}
                    value={inputEmail}
                    onChange={handlerEmail}
                />
                <InputTemplate
                    placeholder={'password'}
                    value={inputPassword}
                    onChange={handlerPassword}
                />
                <div className='app-modal__footer'>
                    {
                        props.isModalType === 'signup' ?  <ButtonTemplate
                            buttonText={'зарегистрироваться'}
                            className='app__button app__button_modal'
                        /> :  <ButtonTemplate
                            buttonText={'войти'}
                            className='app__button app__button_modal'
                        />
                    }
                </div>
        </div>
    )
}
export default ModalTemplate;

