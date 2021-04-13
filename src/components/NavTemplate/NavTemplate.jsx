import React from 'react'
import classes from './NavTemplate.module.scss'
import navList from "../../constants/Navigation";


const NavTemplate = () => {

    return (
        <nav className={classes.navTemplate}>
            <ul className={classes['navTemplate__list']}>
                {
                    navList.map((link, i) => {
                        return (
                            <li
                               key={i}
                               className={classes['navTemplate__item']}
                            >
                                <a
                                   href={link.route}
                                   className={classes['navTemplate__link']}
                                >
                                    {link.text}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default NavTemplate