import React from 'react'
import classes from './MainTemplate.module.scss'
import ButtonTemplate from "../ButtonTemlate/ButtonTemplate";

const MainTemplate = () => {

    return (
        <div className={classes.mainTemplate}>
            <h1 className='app__title app__title_pb'>Want anything to be easy with LaslesVPN.</h1>
            <p className={'app__text app__text_pb'}>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
            <ButtonTemplate
              buttonText={'Get Started'}
              className={'app__button app__button_primary'}
            />
        </div>
    )
}
export default MainTemplate;

// position: relative;
// bottom: 10px;