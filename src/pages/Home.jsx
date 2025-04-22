import React from 'react'
import Footer from '../components/Footer'
import RectangleLeft from "../assets/Rectangle Left.png"
import RectangleRight from "../assets/Rectangle Right.png"
import TakeTest from "../assets/button-take-test.png"
import DiscoverAI from "../assets/button-discover-AI.png"

const Home = () => {
  return (
    <section id="landing">
          <div className="header__container">
            <figure className='header__img--wrapper'>
              <img className='header__img' src={RectangleLeft} alt="" />
              <img className='header__btn--left' src={DiscoverAI} />
            </figure>
            <header className='header'>
                <div className="header__content">
                    <h1 className='header__title'>Sophisticated</h1>
                    <h1 className='header__subtitle'>skincare</h1>
                </div>
            </header>
            <figure className='header__img--wrapper'>
              <img className='header__img' src={RectangleRight} alt="" />
              <img className='header__btn--right' src={TakeTest} />
            </figure>
          </div>
            <Footer />
    </section>
  )
}

export default Home