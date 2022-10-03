import React from 'react'
import contactHomeImg from "../images/contact-home.png"
import { useGlobalContext } from '../context'
import Slider from '../Slider'
import { motion } from 'framer-motion'
import {FaAngleDoubleLeft} from "react-icons/fa"
import a from "../../src/images/a.png"
import b from '../../src/images/b.png'
import c from '../../src/images/c.png'
import Gallery from '../Gallery'
import HomeTestimonial from '../HomeTestimonial'
import Map from '../Map'
import Footer from '../Footer'



const Home = () => {
   const {  closeSubmenu } = useGlobalContext()
  return (
    <>
      <motion.div
        className='div'
        onMouseOver={closeSubmenu}
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <Slider />
      </motion.div>
      <section className='section-center about-home'>
        <div className='about-home-container'>
          <article className='about-home-info'>
            <img
              src='https://paulamartinrealestate.com/wp-content/uploads/2021/04/selling-commercial-real-estate.jpg'
              alt=''
              className='about-home-first-img'
            />
          </article>
          <article className='about-home-info-info'>
            <h3>
              about <span>us</span>
            </h3>
            <div className='underline-about-home'></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              mollitia officia iure explicabo nihil cum suscipit vero
              praesentium commodi at!
            </p>
            <div className='about-home-angle'>
              <h5>
                <span>
                  <FaAngleDoubleLeft />
                </span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </h5>
              <h5>
                <span>
                  <FaAngleDoubleLeft />
                </span>
                <p> Commodo ullamcorper a lacus vestibulum Hac habitasse</p>
              </h5>
              <h5>
                <span>
                  <FaAngleDoubleLeft />
                </span>
                <p> Commodo ullamcorper a lacus vestibulum Hac habitasse</p>
              </h5>
              <h5>
                <span>
                  <FaAngleDoubleLeft />
                </span>
                <p>Commodo ullamcorper a lacus vestibulum Hac habitasse</p>
              </h5>
              <h5>
                <span>
                  <FaAngleDoubleLeft />
                </span>
                <p>Commodo ullamcorper a lacus vestibulum Hac habitasse</p>
              </h5>
            </div>
          </article>
          <article className='about-home-info-why'>
            <img
              src='https://costar.brightspotcdn.com/dims4/default/d6cadb9/2147483647/strip/true/crop/3500x1969+0+182/resize/1200x675!/quality/90/?url=http%3A%2F%2Fcostar-brightspot.s3.amazonaws.com%2F22%2F28%2F4d4e1d62487b87bf52a7b8e5e84e%2Fgettyimages-533443563.jpg'
              alt=''
            />
          </article>
          <article className='about-home-info-why'></article>
        </div>
      </section>
      <section className='home-services'>
        <div className='section-center'>
          <div className='home-services-title'>
            <h3>
              our <span>services</span>
            </h3>
            <div className='underline-services'></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              consectetur!
            </p>
          </div>
          <div className='container-home-services'>
            <article className='home-services-info'>
              <div className='home-services-img'>
                <div>
                  <img
                    src='https://www.clientlook.com/wp-content/uploads/Top-5-Traits-of-Successful-Commercial-Real-Estate-Brokers.jpeg'
                    alt=''
                    className='a-img'
                  />
                </div>
              </div>
            </article>
            <article className='home-services-info'>
              <div className='home-services-img'>
                <div>
                  <img
                    src='https://wompimages.azureedge.net/fetchimage?siteId=7736&url=https%3A%2F%2Fwww.realestateexpress.com%2Fwp-content%2Fuploads%2F2018%2F04%2Fblog_image_career-opportunities-real-estate%402x.jpg'
                    alt=''
                    className='a-img'
                  />
                </div>
                <div>
                  <img src={a} alt='' className='b-img' />
                </div>
              </div>
            </article>
            <article className='home-services-info'>
              <div className='home-services-img'>
                <div>
                  <img
                    src='https://massimo-group.com/wp-content/uploads/2018/09/two-young-businessmen-using-touchpad-how-to-become-a-real-estate-agent-ss.jpg'
                    alt=''
                    className='a-img'
                  />
                </div>
                <div>
                  <img src={b} alt='' className='b-img' />
                </div>
              </div>
            </article>
            <article className='home-services-info'>
              <div className='home-services-img'>
                <div>
                  <img
                    src='https://www.thegenaugroup.com/wp-content/uploads/2020/10/help-commercial-real-estate-broker.jpg'
                    alt=''
                    className='a-img'
                  />
                </div>
                <div>
                  <img src={c} alt='' className='b-img' />
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className='section-center last-project'>
        <Gallery />
      </section>
      <HomeTestimonial />
      <Map />
      <section className='section-center latest-new'>
        <div className='latest-new-title'>
          <h3>
            latest <span>new</span>
          </h3>
          <div className='under-line-latest-new'></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            facilis debitis tempore. Nam, voluptates ex?
          </p>
        </div>
        <div className='container-latest-new'>
          <article className='latest-new-info'>
            <img
              src='https://webuyburbankhouses.com/wp-content/uploads/2016/12/dd9d33cf0b992a68051fed8dd97b7ef7.png'
              alt=''
            />
            <div className='latest-info-header'>
              <h3>LUXURY AND MODERN LIVING ROOM WITH CHANDELIER AND DECOR</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus consequuntur nobis mollitia dolorem numquam aliquam.
              </p>
              <button className='btn btn-latest'>read more</button>
            </div>
          </article>
          <article className='latest-new-info'>
            <img
              src='https://images.squarespace-cdn.com/content/v1/5deffc708291804b11ab1c04/1576677010658-RSWXW2Q4937OXFIVGKSL/Commercial_Real_Estate.jpg?format=2500w'
              alt=''
            />
            <div className='latest-info-header'>
              <h3>LUXURY AND MODERN LIVING ROOM WITH CHANDELIER AND DECOR</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus consequuntur nobis mollitia dolorem numquam aliquam.
              </p>
              <button className='btn btn-latest'>read more</button>
            </div>
          </article>
          <article className='latest-new-info'>
            <img
              src='https://newmarkrealestate.com/wp-content/uploads/2020/12/Newmark_PropertiesCrops_1_Office.jpg'
              alt=''
            />
            <div className='latest-info-header'>
              <h3>LUXURY AND MODERN LIVING ROOM WITH CHANDELIER AND DECOR</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus consequuntur nobis mollitia dolorem numquam aliquam.
              </p>
              <button className='btn btn-latest'>read more</button>
            </div>
          </article>
        </div>
      </section>
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
     <Footer/>
    </>
  )
}

export default Home