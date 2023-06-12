import React from 'react';
import "./About.css";
import Me from "../../assets/me-about.jpg";
import {FaAward} from "react-icons/fa";

const about = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>

        <div className="about__content">

          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1 Year Working</small>
            </article>

          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Rem expedita est consequatur hic, voluptatibus vel dolorem facilis quia ab provident odio 
            libero sapiente qui, suscipit a nisi laudantium nulla exercitationem.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default about;
