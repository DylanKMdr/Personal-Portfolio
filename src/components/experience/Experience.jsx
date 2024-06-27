import React from 'react'
import './experience.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
  return (
    <section id='experience'>
      <h2 className="text-primary">My Experience</h2>

      <div className="container experience_container text-white">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className= 'experience_details'>
            <FontAwesomeIcon className='experience details_icon' icon= {faCircleCheck} size="lg" style={{color: "#ffffff",}} />
            <div>
              <h4>HTML</h4>
              <small className='text-light'>2 years</small>
            </div>
            </article>
            <article className= 'experience_details'>
            <FontAwesomeIcon className='experience details_icon' icon= {faCircleCheck} size="lg" style={{color: "#ffffff",}} />
            <div>
              <h4>CSS</h4>
              <small className='text-light'>2 years</small>
            </div>
            </article><article className= 'experience_details'>
            <FontAwesomeIcon className='experience details_icon' icon= {faCircleCheck} size="lg" style={{color: "#ffffff",}} />
            <div>
              <h4>JavaScript</h4>
              <small className='text-light'>2 years</small>
            </div>
            </article><article className= 'experience_details'>
            <FontAwesomeIcon className='experience details_icon' icon= {faCircleCheck} size="lg" style={{color: "#ffffff",}} />
            <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>1 year</small>
            </div>
            </article><article className= 'experience_details'>
            <FontAwesomeIcon icon={faCircleCheck} size="lg" style={{color: "#ffffff",}} />
            <div>
              <h4>React</h4>
              <small className='text-light'>2 years</small>
            </div>
            </article>
          </div>
        </div>
        {/*END OF FRONTEND*/}
        <div className="experience_backend">
        <h3>Backend Development</h3>
          <div className="experience_content">
            <article className= 'experience_details'>
            <FontAwesomeIcon className='experience details_icon' icon= {faCircleCheck} size="lg" style={{color: "#ffffff",}} />
            <div>
              <h4>Python</h4>
              <small className='text-light'>4 years</small>
            </div>
            </article><article className= 'experience_details'>
            <FontAwesomeIcon className='experience details_icon' icon= {faCircleCheck} size="lg" style={{color: "#ffffff",}} />
            <div>
              <h4>Django</h4>
              <small className='text-light'>3 years</small>
            </div>
            </article><article className= 'experience_details'>
            <FontAwesomeIcon className='experience details_icon' icon= {faCircleCheck} size="lg" style={{color: "#ffffff",}} />
            <div>
              <h4>Java</h4>
              <small className='text-light'>2 years</small>
            </div>
            </article><article className= 'experience_details'>
            <FontAwesomeIcon className='experience details_icon' icon= {faCircleCheck} size="lg" style={{color: "#ffffff",}} />
            <div>
              <h4>Node JS</h4>
              <small className='text-light'>1 year</small>
            </div>
            </article>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Experience