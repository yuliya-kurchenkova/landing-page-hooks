import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import ButtonTemplate from "../ButtonTemlate/ButtonTemplate";


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
           <ButtonTemplate
               buttonText={'Sign In'}
               className={'app__button'}
           />
           <ButtonTemplate
               buttonText={'Sign Up'}
               className={'app__button app__button_border'}
           />
       </Menu>
   )

}
export default MenuTemplate;