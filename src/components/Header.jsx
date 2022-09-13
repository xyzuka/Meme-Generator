import React from 'react';
import logo from '../../public/assets/troll-face.png'

export default function Header() {
  return (
      <nav className="header">
        <div className='logo-container'>
          <img src={logo} alt="troll-face-logo" className="logo" />
          <p className='header-title'>Meme Generator</p>
        </div>

        <div className='header-sub-title'>
          React Course - Project 3
        </div>
      </nav>
  )
}

