import React,{useEffect} from 'react'
import { FaChevronLeft,FaChevronRight } from 'react-icons/fa'

import { useGlobalContext } from './context'
export default function Slider() {
 const { slide, indexSlide, setIndexSlide } = useGlobalContext();
 useEffect(()=>{
  const lastIndex = slide.length - 1
  if(indexSlide < 0){
   setIndexSlide(lastIndex)
  }
  if(indexSlide > lastIndex){
   setIndexSlide(0)
  }
 },)
 useEffect(()=>{
  let slider = setInterval(() =>{
   setIndexSlide(indexSlide + 1)
  },6000)
  return () =>{
   clearInterval(slider)
  }
 },)
  return (
    <div className='slide'>
      {slide.map((slide, slideIndex) => {
        let slider = 'nextSlide'
        if (slideIndex === indexSlide) {
          slider = 'activeSlide'
        }
        if (
          slideIndex === indexSlide - 1 ||
          (indexSlide === 0 && slideIndex === slide.length - 1)
        ) {
          slider = 'lastSlide'
        }
        const { id, image } = slide
        return (
          <address className={slider} key={id}>
            <img
              src={image}
              alt=''
              className='img-slide'
            />
            
<div className='slide-details'>
              <h3>build your <span>future</span></h3>
              <div className="banner-underline"></div>

              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quam reprehenderit doloribus accusantium praesentium deleniti enim molestiae odit commodi dicta?</p>
              <button className="btn-banner btn">
                learn more
              </button>
            </div>
          </address>
        )
      })}

      <button
        className='prev-slide'
        onClick={() => setIndexSlide(indexSlide - 1)}
      >
        <FaChevronLeft />
      </button>
      <button
        className='next-slide'
        onClick={() => setIndexSlide(indexSlide + 1)}
      >
        <FaChevronRight />
      </button>
    </div>
  )
}