import React from 'react'
import { motion } from 'framer-motion'
import ProgreBar from '../ProgreBar'
import {FaQuoteLeft} from "react-icons/fa"


const About = () => {
  return (
    <>
      <motion.div
        className='about'
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <section className='about-banner-section'>
          <div className='about-banner'>
            <div className='about-banner-info '>
              <h3>
                about <span>us</span>
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
          <div className='about-helping section-center'>
            <div className='container-about-help'>
              <article className='img-help'>
                <img
                  src='https://c0.wallpaperflare.com/preview/358/1019/781/living-room-apartment-room-interior.jpg'
                  alt=''
                />
              </article>
              <article className='about-help-info'>
                <h3>we help you to</h3>
                <h2>build your dream</h2>
                <div className='underline-about-banner-info'></div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  ipsam maxime et quo inventore neque ullam veniam sapiente,
                  repellendus pariatur laudantium earum harum vel sequi eligendi
                  culpa nemo ea fugit.
                </p>
              </article>
            </div>
          </div>
          <div className='about-percentage section-center'>
            <div className='about-percentage-img'></div>
            <ProgreBar />
          </div>
          <div className='new-idea section-center'>
            <div className='new-idea-title'>
              <h3>
                we bring
                <span> new ideas to you</span>
              </h3>
              <div className='underline-new-ideas'></div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              eius repellat, cum voluptatibus expedita voluptatem nostrum,
              excepturi commodi accusamus quia non porro repellendus. Cumque,
              praesentium ipsum iure animi ipsa inventore!
            </p>
          </div>
          <div className='last-about section-center'>
            <div className='last-about-info'>
              <article className='last-about-img'>
                <img
                  src='https://images.freeimages.com/images/previews/e6f/real-estate-agent-1-1241393.jpg'
                  alt=''
                />
              </article>
              <article className='last-about-details'>
                <div className='info-last-about'>
                  <h3>
                    "When You're Talking About Building a House, You're Talking
                    About Dreams"
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo labore et
                  </p>
                  <h5>Robert Gregorian</h5>
                  <div className='span-last-about'>
                    <span className='ceo'>CEO</span>
                    <span className='icon-about'>
                      <FaQuoteLeft />
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </div>
         
        </section>
      </motion.div>
    </>
  )
}

export default About