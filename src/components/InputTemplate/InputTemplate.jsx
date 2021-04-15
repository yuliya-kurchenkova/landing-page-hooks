import React from 'react'
import classes from './InputTemplate.module.scss'

const InputTemplate = props => {

    return (
        <div className={classes.inputTemplate}>
            <input
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
                className={classes['inputTemplate__input']}
            />
        </div>
    )
}
export default InputTemplate;