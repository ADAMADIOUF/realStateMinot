import React from 'react'
import {MdLocationOn} from "react-icons/md"
import { BsFillTelephoneFill, BsFillEnvelopeOpenFill } from 'react-icons/bs'
const Footer = () => {
  return (
    <section className='footer'>
      <div className='section-center footer-center'>
        <div className='footer-container'>
          <article className='footer-location'>
            <h3>logo</h3>
            <h5>
              <span>
                <MdLocationOn />
              </span>
              <h4>Jl. Sulawesi 0404 KA, Kanigoro, Blitar 4567</h4>
            </h5>
            <h5>
              <span>
                <BsFillTelephoneFill />{' '}
              </span>
              <h4>Ph: +1 2345 6789</h4>
            </h5>
            <h5>
              <span>
                <BsFillEnvelopeOpenFill />
              </span>
              <h4>contact@brand-name.com</h4>
            </h5>
          </article>
          <div className='footer-link-container'>
            <article className='footer-nav'>
              <h3>pages</h3>
              <ul>
                <li>
                  <a href='/about'>about us</a>
                </li>
                <li>
                  <a href='/services'>services</a>
                </li>
                <li>
                  <a href='/pricing'>pricing</a>
                </li>
                <li>
                  <a href='/'>our team</a>
                </li>
                <li>
                  <a href='/'>map direction</a>
                </li>
              </ul>
            </article>
            <article className='footer-nav-socials'>
              <h3>follow us</h3>
              <ul>
                <li>
                  <a href='/about'>twitter</a>
                </li>
                <li>
                  <a href='/services'>instagram</a>
                </li>
                <li>
                  <a href='/pricing'>facebook</a>
                </li>
                <li>
                  <a href='/'>linkedin</a>
                </li>
                <li>
                  <a href='/'>youtube</a>
                </li>
              </ul>
            </article>
          </div>
          <article className='our-project-footer'>
            <h3>our projects</h3>
            <div className='our-project-footer-img'>
              <article>
                <img
                  src='https://camechs.com/wp-content/uploads/2022/03/Best-Lenses-for-Real-Estate-Photography-4.jpg'
                  alt=''
                />
              </article>
              <article>
                <img
                  src='https://camechs.com/wp-content/uploads/2022/03/Best-Lenses-for-Real-Estate-Photography-4.jpg'
                  alt=''
                />
              </article>
              <article>
                <img
                  src='https://camechs.com/wp-content/uploads/2022/03/Best-Lenses-for-Real-Estate-Photography-4.jpg'
                  alt=''
                />
              </article>
              <article>
                <img
                  src='https://camechs.com/wp-content/uploads/2022/03/Best-Lenses-for-Real-Estate-Photography-4.jpg'
                  alt=''
                />
              </article>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Footer