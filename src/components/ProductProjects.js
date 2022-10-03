import React,{useState} from 'react'
import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsFileEarmarkExcelFill,
} from 'react-icons/bs'
const ProductProjects = ({product}) => {
  const [slideNumber, setSliderNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = (index) => {
    setSliderNumber(index)
    setOpenModal(true)
  }
  const handleCloseModal = () => {
    setOpenModal(false)
  }
  const prevSlide = () => {
    slideNumber === 0
      ? setSliderNumber(product.length - 1)
      : setSliderNumber(slideNumber - 1)
  }
  const nextSlide = () => {
    slideNumber + 1 === product.length
      ? setSliderNumber(0)
      : setSliderNumber(slideNumber + 1)
  }
  return (
    <>
      {openModal && (
        <div className='sliderWrap'>
          <BsFileEarmarkExcelFill
            className='btnClose'
            onClick={handleCloseModal}
          />
          <BsChevronDoubleLeft className='btnPrev' onClick={prevSlide} />
          <BsChevronDoubleRight className='btnNext' onClick={nextSlide} />
          <div className='fullScreenImage'>
            <img src={product[slideNumber].image} alt='' />
          </div>
        </div>
      )}

      <div className='projects section-projects'>
        <div className='galleryWra'>
          <div className='project-container'>
            {product &&
              product.map((product, index) => {
                const { image, name, title } = product
                return (
                  <article
                    className='gallery-content'
                    key={index}
                    onClick={() => handleOpenModal(index)}
                  >
                    <img src={image} alt='' />

                    <div className='products-details'>
                      <h3>{name}</h3>
                      <p>{title}</p>
                    </div>
                  </article>
                )
              })}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductProjects