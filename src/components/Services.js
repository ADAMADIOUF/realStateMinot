import React,{useState} from 'react'
import { motion } from 'framer-motion'
import real1 from "../images/real-1.png"
import realBg from '../images/real-bg1.png'
import {FaLinkedinIn,FaFacebookF,FaInstagramSquare,FaTwitter} from "react-icons/fa"
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import contactHomeImg from '../images/contact-home.png'

const Services = () => {
  const [count, setCount] = useState(false)
  return (
    <>
      <motion.div
        className='about'
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <section className='services-banner-section'>
          <div className='services-banner'>
            <div className='services-banner-info '>
              <h3>
                our <span>services</span>
              </h3>
              <div className='underline-about-banner'></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit odio veniam optio, nihil asperiores atque dolor,
                nulla, veritatis eos consequatur saepe totam fugit tempore
                magnam?
              </p>
            </div>
          </div>
          <div className=' services section-center'>
            <div className='services-help'>
              <h3>
                we help you to <span>build your dream</span>
              </h3>
              <div className='underline-services-help'></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                illo maiores beatae debitis laborum repellendus commodi nemo
                officia deserunt sunt!
              </p>
            </div>
            <div className='help-services-content'>
              <div className='help-services-container'>
                <article className='services'>
                  <div className='services-img'>
                    <img src={realBg} alt='' />
                    <img
                      src='https://static.photocdn.pt/images/articles/2019/12/24/How_to_Take_Gorgeous_Interior_Real_Estate_Photos.jpg'
                      alt=''
                      className='img-bg'
                    />
                  </div>
                  <div className='services-bg-details'>
                    <img src={real1} alt='' />
                    <h3>architecture</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequatur, incidunt?
                    </p>
                  </div>
                </article>
                <article className='services'>
                  <div className='services-img'>
                    <img src={realBg} alt='' />
                    <img
                      src='https://static.photocdn.pt/images/articles/2019/12/24/How_to_Take_Gorgeous_Interior_Real_Estate_Photos.jpg'
                      alt=''
                      className='img-bg'
                    />
                  </div>
                  <div className='services-bg-details'>
                    <img src={real1} alt='' />
                    <h3>interior</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequatur, incidunt?
                    </p>
                  </div>
                </article>
                <article className='services'>
                  <div className='services-img'>
                    <img src={realBg} alt='' />
                    <img
                      src='https://static.photocdn.pt/images/articles/2019/12/24/How_to_Take_Gorgeous_Interior_Real_Estate_Photos.jpg'
                      alt=''
                      className='img-bg'
                    />
                  </div>
                  <div className='services-bg-details'>
                    <img src={real1} alt='' />
                    <h3>interior</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequatur, incidunt?
                    </p>
                  </div>
                </article>
                <article className='services'>
                  <div className='services-img'>
                    <img src={realBg} alt='' />
                    <img
                      src='https://static.photocdn.pt/images/articles/2019/12/24/How_to_Take_Gorgeous_Interior_Real_Estate_Photos.jpg'
                      alt=''
                      className='img-bg'
                    />
                  </div>
                  <div className='services-bg-details'>
                    <img src={real1} alt='' />
                    <h3>interior</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequatur, incidunt?
                    </p>
                  </div>
                </article>
                <article className='services'>
                  <div className='services-img'>
                    <img src={realBg} alt='' />
                    <img
                      src='https://static.photocdn.pt/images/articles/2019/12/24/How_to_Take_Gorgeous_Interior_Real_Estate_Photos.jpg'
                      alt=''
                      className='img-bg'
                    />
                  </div>
                  <div className='services-bg-details'>
                    <img src={real1} alt='' />
                    <h3>interior</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequatur, incidunt?
                    </p>
                  </div>
                </article>
                <article className='services'>
                  <div className='services-img'>
                    <img src={realBg} alt='' />
                    <img
                      src='https://static.photocdn.pt/images/articles/2019/12/24/How_to_Take_Gorgeous_Interior_Real_Estate_Photos.jpg'
                      alt=''
                      className='img-bg'
                    />
                  </div>
                  <div className='services-bg-details'>
                    <img src={real1} alt='' />
                    <h3>interior</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequatur, incidunt?
                    </p>
                  </div>
                </article>
              </div>
            </div>
            <div className='services-our-team'>
              <div className='team-services-container'>
                <article className='team-details-services'>
                  <h3>
                    meet our <span>excellent team</span>
                  </h3>
                  <div className='team-services-underline'></div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum quidem quos, atque commodi nisi magnam iste natus
                    accusamus ad fugit.
                  </p>
                  <button className='btn btn-services-team'>view more</button>
                </article>
                <article className='team-services-img'>
                  <img
                    src='https://media.istockphoto.com/photos/portrait-of-smiling-saleswoman-with-file-at-home-picture-id1315341891?b=1&k=20&m=1315341891&s=170667a&w=0&h=wrA4az3AaToGOft1dv2D8VVFANNNshPjQSVTCIvHz-4='
                    alt=''
                  />
                  <div className='services-team-details'>
                    <h3>ETHAN ZUER</h3>
                    <p>Senior Architect</p>

                    <ul className='team-services-link'>
                      <li>
                        <a href='/'>
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a href='/'>
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a href='/'>
                          <FaInstagramSquare />
                        </a>
                      </li>
                      <li>
                        <a href='/'>
                          <FaLinkedinIn />
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
                <article className='team-services-img'>
                  <img
                    src='https://media.istockphoto.com/photos/portrait-of-smiling-saleswoman-with-file-at-home-picture-id1315341891?b=1&k=20&m=1315341891&s=170667a&w=0&h=wrA4az3AaToGOft1dv2D8VVFANNNshPjQSVTCIvHz-4='
                    alt=''
                  />
                  <div className='services-team-details'>
                    <h3>ETHAN ZUER</h3>
                    <p>Senior Architect</p>
                    <ul className='team-services-link'>
                      <li>
                        <a href='/'>
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a href='/'>
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a href='/'>
                          <FaInstagramSquare />
                        </a>
                      </li>
                      <li>
                        <a href='/'>
                          <FaLinkedinIn />
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className='services-progress section-center'>
            <ScrollTrigger
              onEnter={() => setCount(true)}
              onExit={() => setCount(false)}
            >
              <div className='progress-bar'>
                <div className='progress progress-services'>
                  <h1>
                    {count && (
                      <CountUp start={0} end={28} duration={2} delay={0} />
                    )}
                    +
                  </h1>
                  <span>Years Of Experience</span>
                </div>
                <div className='progress progress-services'>
                  <h1>
                    {count && (
                      <CountUp start={0} end={520} duration={2} delay={0} />
                    )}
                    +
                  </h1>
                  <span>Happy Clients</span>
                </div>
                <div className='progress progress-services'>
                  <h1>
                    {count && (
                      <CountUp start={0} end={720} duration={2} delay={0} />
                    )}
                    +
                  </h1>
                  <span>Projects Completed</span>
                </div>
                <div className='progress progress-services'>
                  <h1>
                    {count && (
                      <CountUp start={0} end={28} duration={2} delay={0} />
                    )}
                    +
                  </h1>
                  <span>Years Of Experience</span>
                </div>
              </div>
            </ScrollTrigger>
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

export default Services