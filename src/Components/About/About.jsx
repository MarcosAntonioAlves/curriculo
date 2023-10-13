import React from 'react';
import "./About.css";
import Me from "../../assets/me-imag.png";
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
            I am a passionate front-end developer who thrives on turning creative ideas into interactive digital solutions. 
            With a year of experience in the field, I am constantly seeking to learn and explore the latest 
            technology trends to enhance my skills and create exceptional user experiences.
            <br/>
            I am a Front-End Developer with expertise in:
             HTML, CSS, JavaScript, Mongo DB, React JS, Node JS, TypeScript
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default about;
