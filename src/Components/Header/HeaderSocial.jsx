import React from 'react';
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from"react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="https://www.linkedin.com/in/marcos-ant%C3%B4nio-alves-413939242/" target="__blanca"><BsLinkedin/></a>
        <a href="https://github.com/MarcosAntonioAlves" target="__blanca"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocial;
