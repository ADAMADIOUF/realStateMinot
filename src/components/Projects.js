import React from 'react'
import { motion } from 'framer-motion'
import ProjectCategory from './ProjectCategory'
import contactHomeImg from '../images/contact-home.png'
import { useGlobalContext } from '../context'
const Projects = () => {
   const { closeSubmenu } = useGlobalContext()
  return (
    <>
      <motion.div
        className='about'
        onMouseOver={closeSubmenu}
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <section className='projects-banner-section'>
          <div className='projects-banner'>
            <div className='projects-banner-info '>
              <h3>
                our <span>projects</span>
              </h3>
              <div className='underline-about-banner'></div>
              <p>
                Loreadipisicing elit. Reprehenderit odio veniam optio, nihil
                asperiores atque dolor, nulla, veritatis eos consequatur saepe
                totam fugit tempore magnam?
              </p>
            </div>
          </div>
          <div className='projects section-projects'>
            <ProjectCategory />
          </div>
          <div className='project-official section-center'>
            <div className='project-official-container'>
              <article className='official'>
                <h3>
                  our <span>official partner</span>
                </h3>
                <div className='underline-official'></div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, sapiente.
                </p>
              </article>
              <article className='official-box'>
                <div className='container-box'>
                  <article>
                    <img
                      src='https://templatekit.hellokuro.com/arzeo/wp-content/uploads/2022/01/1-kunikaa-2-logo.png'
                      alt=''
                    />
                  </article>
                  <article>
                    <img
                      src='https://templatekit.hellokuro.com/arzeo/wp-content/uploads/2022/01/2-nikicivi-5-logo.png'
                      alt=''
                    />
                  </article>
                  <article>
                    <img
                      src='https://templatekit.hellokuro.com/arzeo/wp-content/uploads/2022/01/3-the-quebec-logo-W6MS4M.png'
                      alt=''
                    />
                  </article>
                  <article>
                    <img
                      src='https://templatekit.hellokuro.com/arzeo/wp-content/uploads/2022/01/4-new-york-logo-W6MS4M.png'
                      alt=''
                    />
                  </article>
                </div>
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

export default Projects