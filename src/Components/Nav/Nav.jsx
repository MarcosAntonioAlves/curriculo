import React from 'react';
import "./Nav.css";
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {BiBookAlt} from "react-icons/bi";
import {BiMessageSquareDetail} from "react-icons/bi";
import { useState } from 'react';

const Navs = () => {
  const [activeNave, setActiveNav] = useState("#");
  return (
    <nav>
      <a href="#active" onClick={() => setActiveNav("#active")} className={activeNave === "#" ? "active" : ""}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNave === "#about" ? "active" : ""}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNave === "#experience" ? "active" : ""}><BiBookAlt/></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNave === "#contact" ? "active" : ""}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Navs 
