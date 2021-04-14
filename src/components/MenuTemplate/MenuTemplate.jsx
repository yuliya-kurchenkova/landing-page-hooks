import React from 'react'
import { slide as Menu } from 'react-burger-menu'


const MenuTemplate = () => {
   return (
       <Menu
           right
           isOpen={ false }
           noOverlay
       >
           <a id="home" className="menu-item" href="/">Home</a>
           <a id="about" className="menu-item" href="/about">About</a>
           <a id="contact" className="menu-item" href="/contact">Contact</a>
       </Menu>
   )

}
export default MenuTemplate;