import React from 'react'

const Map = () => {
  return (
    <section className='map-home section-center'>
      <div className='map-container'>
        <article className='maps'>
          <iframe
            src='https://maps.google.com/maps?q=north%20dakota%20%20%20minot&t=&z=15&ie=UTF8&iwloc=&output=embed'
            frameborder='0'
            scrolling='no'
            marginheight='0'
            marginwidth='0'
          ></iframe>
          <div className='map-contact'>
            <article className='contact-one'>
              <h3>phone number</h3>
              <span>+1 2345 6789</span>
            </article>
            <article className='contact-two'>
              <h3>phone number</h3>
              <span>+1 2345 6789</span>
            </article>
          </div>
        </article>
        <article className='home-contact'>
          <div className='title-home-contact'>
            <h3>
              contact <span>us</span>
            </h3>
            <div className='underline-home-contact'></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              aperiam cum facilis quis, quod quia ut culpa libero necessitatibus
              deleniti!
            </p>
          </div>
          <form className='form'>
            <h3>name</h3>
            <input type='text' className='input-form' placeholder='name' />
            <h3>email</h3>
            <input type='email' className='input-form' placeholder='example@email.com' />
            <h3>subject</h3>
            <input type='text' className='input-form' placeholder='your subject message' />
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
            <button className="btn input-form btn-form-contact-home">
              send message
            </button>
          </form>
        </article>
      </div>
    </section>
  )
}

export default Map