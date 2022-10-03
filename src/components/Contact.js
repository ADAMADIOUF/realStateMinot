import React from 'react'
import { motion } from 'framer-motion'
import contactHomeImg from '../images/contact-home.png'
import {
  AiFillTwitterSquare,
  AiFillYoutube,
  AiFillFacebook,
  AiFillLinkedin,
AiFillInstagram} from 'react-icons/ai'
const Contact = () => {
  return (
    <>
      <motion.div
        className='about'
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <section className='contact-banner-section'>
          <div className='contact-banner'>
            <div className='contact-banner-info '>
              <h3>
                our <span>contact</span>
              </h3>
              <div className='underline-about-banner'></div>
              <p>
                Loreadipisicing elit. Reprehenderit odio veniam optio, nihil
                asperiores atque dolor, nulla, veritatis eos consequatur saepe
                totam fugit tempore magnam?
              </p>
            </div>
          </div>
          <div className='map-contact'>
            <div className='map-contact-content'>
              <article className='maps contact-map'>
                <iframe
                  src='https://maps.google.com/maps?q=north%20dakota%20%20%20minot&t=&z=15&ie=UTF8&iwloc=&output=embed'
                  frameborder='0'
                  scrolling='no'
                  marginheight='0'
                  marginwidth='0'
                ></iframe>
              </article>
              <div className='contact-number'>
                <article className='contact-info-1'>
                  <h3>Phone Number</h3>
                  <span>+1 2345 6789</span>
                </article>
                <article className='contact-info-2'>
                  <h3>Email Address</h3>
                  <span>contact@brand-name.com</span>
                </article>
              </div>
            </div>
          </div>
          <div className='contact-getInTouch section-center'>
            <div className='contact-container-getIn'>
              <article className='contact-info-last'>
                <h3>
                  GET <span>IN TOUCH </span>{' '}
                </h3>
                <div className='underline-contact'></div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque a fugiat dolore praesentium rem quidem!
                </p>
                <ul className='link-contact'>
                  <li>
                    <a href='/about'>
                      <AiFillTwitterSquare />
                    </a>
                  </li>
                  <li>
                    <a href='/services'>
                      <AiFillFacebook />
                    </a>
                  </li>
                  <li>
                    <a href='/pricing'>
                      <AiFillInstagram />
                    </a>
                  </li>
                  <li>
                    <a href='/'>
                      <AiFillYoutube />
                    </a>
                  </li>
                  <li>
                    <a href='/'>
                      <AiFillLinkedin />
                    </a>
                  </li>
                </ul>
                <div className='img-contact'>
                  <img
                    src='https://image.cnbcfm.com/api/v1/image/106858321-1616537045249Aerial-7-jpg?v=1619111365&w=929&h=523'
                    alt=''
                  />
                </div>
              </article>
              <article className='form-contact'>
                <form className='form'>
                  <h3>name</h3>
                  <input
                    type='text'
                    className='input-form'
                    placeholder='name'
                  />
                  <h3>email</h3>
                  <input
                    type='email'
                    className='input-form'
                    placeholder='example@email.com'
                  />
                  <h3>subject</h3>
                  <input
                    type='text'
                    className='input-form'
                    placeholder='your subject message'
                  />
                  <h3>your message</h3>
                  <textarea
                    name='
            '
                    id=''
                    cols='30'
                    rows='10'
                    placeholder='your message here'
                    className='input-form'
                  ></textarea>
                  <button className='btn input-form btn-form-contact-home'>
                    send message
                  </button>
                </form>
              </article>
            </div>
          </div>
          <section className='get-started'>
            <div className='getStarted-info section-center'>
              <div className='container-getStated '>
                <article>
                  <h3>READY TO GET STARTED?</h3>
                  <div className='underline-started'></div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae nisi neque magnam porro error reprehenderit.
                  </p>
                  <button className='btn btn-started'>contact now</button>
                </article>
                <article className='getStarted-img'>
                  <img src={contactHomeImg} alt='' />
                </article>
              </div>
            </div>
          </section>
        </section>
      </motion.div>
    </>
  )
}

export default Contact