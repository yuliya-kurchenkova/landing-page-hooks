import React from 'react'
import map from '../../assets/img/map.png'
import classes from './MapTemplate.module.scss'


const MapTemplate = () => {
    return (
        <div className={classes.mapTemplate}>
            <div className={classes['mapTemplate-box__subtitle']}>
                <h2 className='app__subtitle app__subtitle_pb'>Huge Global Network of Fast VPN</h2>
            </div>
            <div className={classes['mapTemplate-box__text']}>
                <p className='app__text'>See LaslesVPN everywhere to make it easier for you when you move locations.</p>
            </div>
            <img
                src={map}
                alt=""
            />
        </div>
    )
}
export default MapTemplate;