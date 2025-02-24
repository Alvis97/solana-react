import React from 'react'
import navStyle from '../styles/Navbar.module.scss';
import { useState } from 'react';

function Navbar() {

   const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={navStyle.parent}>
       <p>Solana With React</p>

       <button className={navStyle.hamburger} onClick={() => setIsOpen(!isOpen)}>
       <div className={`${navStyle.bar} ${isOpen ? navStyle.barOpen : ''}`}></div>
        <div className={`${navStyle.bar} ${isOpen ? navStyle.barOpen : ''}`}></div>
        <div className={`${navStyle.bar} ${isOpen ? navStyle.barOpen : ''}`}></div>
       </button>
  
      <ul className={`${navStyle.menu} ${isOpen ? navStyle.open : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/Basics">What is Crypto?</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      
    </div>
  )
}

export default Navbar;
