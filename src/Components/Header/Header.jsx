import React from 'react';
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/me-imag.png";
import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Marcos Antônio</h1>
        <h5 className="text-aling">Front End</h5>
        <CTA/>
        <HeaderSocial/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        
        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;
