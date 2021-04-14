import React from 'react'
import ButtonTemplate from "../ButtonTemlate/ButtonTemplate";
import classes from './Subscribe.module.scss'

const Subscribe = () => (
    <div className={classes.subscribe}>
        <div className={classes['subscribe__box']}>
            <h2 className='app__subtitle app__subtitle_pb'>Subscribe Now for Get Special Features!</h2>
            <p className='app__text'>Let's subscribe with us and find the fun.</p>
        </div>
        <ButtonTemplate
            buttonText={'Subscribe Now'}
            className={'app__button app__button_primary'}
        />
    </div>
)
export default Subscribe;