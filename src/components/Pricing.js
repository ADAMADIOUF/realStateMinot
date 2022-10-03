import React,{useState} from 'react'
import { motion } from 'framer-motion'
import { AiOutlineClose } from 'react-icons/ai'
import { FaAngleDown } from 'react-icons/fa'
import questions from '../dataFaq'
import Questions from '../Questions'
import { useGlobalContext } from '../context'
const Pricing = () => {
   const { closeSubmenu } = useGlobalContext()
   const [question, setQuestion] = useState(questions)
  return (
    <>
      <motion.div
        className='about'
        onMouseOver={closeSubmenu}
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <section className='pricing-banner-section'>
          <div className='pricing-banner'>
            <div className='pricing-banner-info '>
              <h3>
                our <span>pricing</span>
              </h3>
              <div className='underline-about-banner'></div>
              <p>
                Loreadipisicing elit. Reprehenderit odio veniam optio, nihil
                asperiores atque dolor, nulla, veritatis eos consequatur saepe
                totam fugit tempore magnam?
              </p>
            </div>
          </div>
          <div className='section-pricing'>
            <div className='section-center'>
              <div className='pricing-container'>
                <article className='pricing-info-basic bg'>
                  <h3 className='basic'>basic</h3>
                  <div className='underline-basic'></div>
                  <h4 className='price'>
                    <span> $ </span> 299
                  </h4>
                  <div className='price-info'>
                    <h3>
                      <span className='angleDown'>
                        <FaAngleDown />
                      </span>
                      Consectetur Adipis Cingelit
                    </h3>

                    <h3>
                      <span className='angleDown'>
                        <FaAngleDown />
                      </span>
                      Consectetur Adipis Cingelit
                    </h3>
                    <h3>
                      <span className='angleDown'>
                        <FaAngleDown />
                      </span>
                      Consectetur Adipis Cingelit
                    </h3>
                    <h3>
                      <span className='angleClose'>
                        <AiOutlineClose />
                      </span>
                      Consectetur Adipis Cingelit
                    </h3>

                    <h3>
                      <span className='angleClose'>
                        <AiOutlineClose />
                      </span>
                      Consectetur Adipis Cingelit
                    </h3>
                    <h3>
                      <span className='angleClose'>
                        <AiOutlineClose />
                      </span>
                      Consectetur Adipis Cingelit
                    </h3>
                    <button className='btn btn-price'>buy now</button>
                  </div>
                </article>
                <article className='pricing-info-premium bg'>
                  <h3 className='premium'>premium</h3>
                  <div className='underline-premium'></div>
                  <h4 className='price'>
                    <span> $ </span> 499
                  </h4>
                  <div className='price-info'>
                    <h3>
                      <span className='angleDown'>
                        <FaAngleDown />
                      </span>
                      Consectetur Adipis Cingelit
                    </h3>

                    <h3>
                      <span className='angleDown'>
                        <FaAngleDown />
                      </span>
                      Consectetur Adipis Cingelit
                    </h3>
                    <h3>
                      <span className='angleDown'>
                        <FaAngleDown />
                      </span>
                      Consectetur Adipis Cingelit
                    </h3>
                    <h3>
                      <span className='angleDown'>
                        <FaAngleDown />
                      </span>
                      Consectetur Adipis Cingelit
                    </h3>

                    <h3>
                      <span className='angleClose'>
                        <AiOutlineClose />
                      </span>
                      Consectetur Adipis Cingelit
                    </h3>
                    <h3>
                      <span className='angleClose'>
                        <AiOutlineClose />
                      </span>
                      Consectetur Adipis Cingelit
                    </h3>
                    <button className='btn btn-price-premium'>buy now</button>
                  </div>
                </article>
                <article className='pricing-info-basic bg'>
                  <h3 className='basic'>enterprise</h3>
                  <div className='underline-basic'></div>
                  <h4 className='price'>
                    <span> $ </span> 799
                  </h4>
                  <div className='price-info'>
                    <h3>
                      <span className='angleDown'>
                        <FaAngleDown />
                      </span>
                      Consectetur Adipis Cingelit
                    </h3>

                    <h3>
                      <span className='angleDown'>
                        <FaAngleDown />
                      </span>
                      Consectetur Adipis Cingelit
                    </h3>
                    <h3>
                      <span className='angleDown'>
                        <FaAngleDown />
                      </span>
                      Consectetur Adipis Cingelit
                    </h3>
                    <h3>
                      <span className='angleDown'>
                        <FaAngleDown />
                      </span>
                      Consectetur Adipis Cingelit
                    </h3>

                    <h3>
                      <span className='angleDown'>
                        <FaAngleDown />
                      </span>
                      Consectetur Adipis Cingelit
                    </h3>
                    <h3>
                      <span className='angleDown'>
                        <FaAngleDown />
                      </span>
                      Consectetur Adipis Cingelit
                    </h3>
                    <button className='btn btn-price'>buy now</button>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className='faq section-center'>
            <section className='info'>
              {question.map((question) => {
                return <Questions key={question.id} {...question}></Questions>
              })}
            </section>
          </div>
        </section>
      </motion.div>
    </>
  )
}

export default Pricing
