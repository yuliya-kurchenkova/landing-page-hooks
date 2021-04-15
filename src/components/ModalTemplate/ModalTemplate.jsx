import React, { useState } from 'react'
import InputTemplate from "../InputTemplate/InputTemplate";
import ButtonTemplate from "../ButtonTemlate/ButtonTemplate";

const ModalTemplate = (props) => {
    const [inputName, setInputName] = useState("");
    const [inputLogin, setInputLogin] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [inputEmail, setInputEmail] = useState("");

    const handlerName = e => {
        setInputName(e.target.value)
    }
    const handlerLogin = e => {
        setInputLogin(e.target.value)
    }
    const handlerPassword = e => {
        setInputPassword(e.target.value)
    }
    const handlerEmail = e => {
        setInputEmail(e.target.value)
    }

    return (
        <div className='app-modal'>
            <h2>{props.title}</h2>
            <InputTemplate
                placeholder={'name'}
                value={inputName}
                onChange={handlerName}
            />
            <InputTemplate
                placeholder={'login'}
                value={inputLogin}
                onChange={handlerLogin}
            />
            <InputTemplate
                placeholder={'password'}
                value={inputPassword}
                onChange={handlerPassword}
            />
            <InputTemplate
                placeholder={'e-mail'}
                value={inputEmail}
                onChange={handlerEmail}
            />

            <ButtonTemplate />
            {
                props.name ?
                    <input
                        type={props.name}
                    />
                    : null
            }
        </div>
    )
}
export default ModalTemplate;


//прокидывать пропс например строку 'signin' или 'signup'
// props.typeModal ? <button> sign up .../> : <button> sign in ..../>
//по факту модалка одна и та же так что можешь попробовать сделать так
//в зависимости от условия появится еще один инпут
//и методы разные при клике в зависимости от пропса