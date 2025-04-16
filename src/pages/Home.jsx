import React from 'react'
import Footer from '../components/Footer'
import RectangleLeft from "../assets/Rectangle Left.png"
import RectangleRight from "../assets/Rectangle Right.png"

const Home = () => {
  return (
    <section id="landing">
          <div className="header__container">
            <figure className='header__img--wrapper'>
              <img className='header__img' src={RectangleLeft} alt="" />
            </figure>
            <header className='header'>
                <div className="header__content">
                    <h1 className='header__title'>Sophisticated</h1>
                    <h1 className='header__subtitle'>skincare</h1>
                </div>
            </header>
            <figure className='header__img--wrapper'>
              <img className='header__img' src={RectangleRight} alt="" />
            </figure>
          </div>
            <Footer />
    </section>
  )
}

export default Home