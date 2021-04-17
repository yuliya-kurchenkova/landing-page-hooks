import React from 'react'
import netflix from '../../assets/img/icon/netflix.png'
import reddit from '../../assets/img/icon/reddit.png'
import amazon from '../../assets/img/icon/amazon.png'
import discord from '../../assets/img/icon/discord.png'
import spotify from '../../assets/img/icon/spotify.png'
import classes from './Sponsors.module.scss'


const Sponsors = () => (
    <div className={classes.sponsors}>
            <div>
                <img
                    src={netflix}
                    alt=""
                    className={classes['sponsors__img']}
                />
            </div>
        <img
            src={reddit}
            alt=""
            className={classes['sponsors__img']}
        />
        <img
            src={amazon}
            alt=""
            className={classes['sponsors__img']}
        />
        <img
            src={discord}
            alt=""
            className={classes['sponsors__img']}
        />
        <img
            src={spotify}
            alt=""
            className={classes['sponsors__img']}
        />
    </div>
)

export default Sponsors;