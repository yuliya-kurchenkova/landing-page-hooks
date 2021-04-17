import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import ButtonTemplate from "../ButtonTemlate/ButtonTemplate";
import classes from './MenuTemplate.module.scss'


const MenuTemplate = () => {
   return (
       <Menu
           right
           isOpen={ false }
           noOverlay
       >
           <a id="home" className="menu-item" href="/">About</a>
           <a id="about" className="menu-item" href="/">Features</a>
           <a id="contact" className="menu-item" href="/">Pricing</a>
           <a id="contact" className="menu-item" href="/">Testimonials</a>
           <a id="contact" className="menu-item" href="/">Help</a>
       <div className={classes.menuTemplate}>
           <ButtonTemplate
               buttonText={'Sign In'}
               className={'app__button'}
           />
           <ButtonTemplate
               buttonText={'Sign Up'}
               className={'app__button app__button_border'}
           />
       </div>
       </Menu>
   )

}
export default MenuTemplate;