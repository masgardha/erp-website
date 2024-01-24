import React from 'react';

function Header() {
  return (
    <header>
    <div class="container menu-container">
      <div class="left-menu">
        <a href="#" className='home-page'>Home</a>
      
      </div>
      <div class="right-menu">
        <a href="#about-id">About</a>
        <a href="#pricing-id">Pricing</a>
        <a href="#contact-id">Contact</a>
        <a href='/login' className="login-button">Login</a>
      </div>
    </div>
  </header>
  );
}

export default Header;
