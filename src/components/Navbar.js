import React from 'react'
import navStyle from '../styles/Navbar.module.scss';
import { useState } from 'react';

function Navbar() {

   const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={navStyle.parent}>
       <p>Learn My Crypto</p>

       {/* <button className={navStyle.hamburger} onClick={() => setIsOpen(!isOpen)}>
       <div className={`${navStyle.bar} ${isOpen ? navStyle.barOpen : ''}`}></div>
        <div className={`${navStyle.bar} ${isOpen ? navStyle.barOpen : ''}`}></div>
        <div className={`${navStyle.bar} ${isOpen ? navStyle.barOpen : ''}`}></div>
       </button>
  
      <ul className={`${navStyle.menu} ${isOpen ? navStyle.open : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/code">Solana Code</a></li>
      </ul> */}
      <div className={navStyle.DeskMenu}>
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/">Visuals/Learn By Doing</a>
      </div>
      
    </div>
  )
}

export default Navbar;
