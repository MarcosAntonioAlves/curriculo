import React from 'react';
import "./index.css";
import IMG1 from "../../assets/sistema.png";
import IMG2 from "../../assets/tempo.png";
import IMG3 from "../../assets/jogo.png";


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
           <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolioitem title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/MarcosAntonioAlves/expense-tracker.git" className='btn' target="_blank">Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
           <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolioitem title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/MarcosAntonioAlves/Previsao-de-Tempo.git" className='btn' target="_blank">Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
           <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolioitem title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/MarcosAntonioAlves/Jogo-da-Memoria.git" className='btn' target="_blank">Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}
 
export default Portfolio
