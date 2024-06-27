import React from 'react'
import './portfolio.css'
import project_1 from '../../assets/computer.jpeg';

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item-image"></div>
            <img src={project_1} alt="" />
          <h3 className='text-white'>Portfolio Item title</h3>
          <div className='btn-container'>
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn ' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image"></div>
            <img src={project_1} alt="" />
          <h3 className='text-white'>Portfolio Item title</h3>
          <div className='btn-container'>
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn ' target='_blank'>Live Demo</a>
          </div>
        </article><article className='portfolio_item'>
          <div className="portfolio_item-image"></div>
            <img src={project_1} alt="" />
          <h3 className='text-white'>Portfolio Item title</h3>
          <div className='btn-container'>
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn ' target='_blank'>Live Demo</a>
          </div>
        </article><article className='portfolio_item'>
          <div className="portfolio_item-image"></div>
            <img src={project_1} alt="" />
          <h3 className='text-white'>Portfolio Item title</h3>
          <div className='btn-container'>
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn ' target='_blank'>Live Demo</a>
          </div>
        </article><article className='portfolio_item'>
          <div className="portfolio_item-image"></div>
            <img src={project_1} alt="" />
          <h3 className='text-white'>Portfolio Item title</h3>
          <div className='btn-container'>
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn ' target='_blank'>Live Demo</a>
          </div>
        </article><article className='portfolio_item'>
          <div className="portfolio_item-image"></div>
            <img src={project_1} alt="" />
          <h3 className='text-white'>Portfolio Item title</h3>
          <div className='btn-container'>
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn ' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>

  )
}

export default portfolio