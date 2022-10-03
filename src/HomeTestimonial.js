import React,{useState,useEffect} from 'react'
import testimonial from './testimonial'

const HomeTestimonial = () => {
 const [slideIndex, setSlideIndex] = useState(1)
const nextSlide = () => {
  if (slideIndex !== testimonial.length) {
    setSlideIndex(slideIndex + 1)
  } else if (slideIndex === testimonial.length) {
    setSlideIndex(1)
  }
}

const prevSlide = () => {
  if (slideIndex !== 1) {
    setSlideIndex(slideIndex - 1)
  } else if (slideIndex === 1) {
    setSlideIndex(testimonial.length)
  }
}
 useEffect(() => {
   const interval = setInterval(() => {
     nextSlide(setSlideIndex + 1)
   }, 3000)
   return () => clearInterval(interval)
 })

 

 const moveDot = (index) => {
   setSlideIndex(index)
 }
  return (
    <section className='home-slider'>
      <div className='section-center'>
        <div className='container-slider'>
          {testimonial.map((obj, index) => {
            return (
              <div
                key={obj.id}
                className={
                  slideIndex === index + 1 ? 'slider active-anim' : 'slider'
                }
              >
                <img src={obj.image} alt='' />
              </div>
            )
          })}
          

          <div className='container-dots'>
            {Array.from({ length: 4 }).map((item, index) => (
              <div
                onClick={() => moveDot(index + 1)}
                className={slideIndex === index + 1 ? 'dot active' : 'dot'}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeTestimonial