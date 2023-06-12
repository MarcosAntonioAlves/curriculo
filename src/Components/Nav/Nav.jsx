import React from 'react';
import "./Nav.css";
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {BiBookAlt} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";
import {BiMessageSquareDetail} from "react-icons/bi";
import { useState } from 'react';

const Navs = () => {
  const [activeNave, setActiveNave] = useState("#");
  return (
    <nav>
      <a href="#" onClick={() => setActiveNave("#")} className={activeNave === "#" ? "active" : ""}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNave("#about")} className={activeNave === "#about" ? "active" : ""}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNave("#experience")} className={activeNave === "#experience" ? "active" : ""}><BiBookAlt/></a>
      <a href="#contact" onClick={() => setActiveNave("#contact")} className={activeNave === "#contact" ? "active" : ""}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Navs
