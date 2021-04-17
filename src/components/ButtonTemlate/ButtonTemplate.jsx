import React from 'react'


function  ButtonTemplate (props) {
    let modalType = ''
    if (props.modalEffect) {
        modalType = props.buttonText === 'Sign Up' ? 'signup' : 'signin';
    }
    return (
        <>
            <button className={props.className}
                    disabled={props.disabled}
                    className={props.disabled ? 'buttonTemplate__btn buttonTemplate__btn_disabled' : 'buttonTemplate__btn'}
                    onClick={props.modalEffect ?  () => props.onClick(true, modalType) :  props.onClick}
            >
                {props.buttonText}
            </button>
        </>
    )
}
export default ButtonTemplate;