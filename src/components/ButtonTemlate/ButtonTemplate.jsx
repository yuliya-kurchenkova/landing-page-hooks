import React from 'react'


function  ButtonTemplate (props) {
    let modalType = ''
    if (props.modalEffect) {
        modalType = props.buttonText === 'Sign Up' ? 'signup' : 'signin';
    }
    return (
        <>
            <button className={props.className}
                    onClick={() => props.onClick(true, modalType)}
            >
                {props.buttonText}
            </button>
        </>
    )
}
export default ButtonTemplate;