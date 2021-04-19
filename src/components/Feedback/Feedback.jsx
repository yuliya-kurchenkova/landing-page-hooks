import React from 'react'
import classes from "./Feedback.module.scss"
import SliderTemplate from "../SliderTemplate/SliderTemplate";



const Feedback = (props) => {
    return (
        <div className={classes.feedback}>
            <div className={classes['feedback__subtitle']}>
                <h2 className='app__subtitle app__subtitle_pb'>Huge Global Network of Fast VPN</h2>
            </div>
            <div className={classes['feedback__text']}>
                <p className='app__text'>See LaslesVPN everywhere to make it easier for you when you move locations.</p>
            </div>
            <div className={classes['feedback__slider']}>
                <SliderTemplate
                    sliderBlock={props.sliderBlock}
                />
            </div>
        </div>
    )
}

export default Feedback;