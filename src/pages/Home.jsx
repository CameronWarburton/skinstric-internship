import React from 'react'
import Footer from '../components/Footer'
import RectangleLeft from "../assets/Rectangle Left.png"

const Home = () => {
  return (
    <section id="landing">
        <div className='row'>
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
          </div>
            <Footer />
        </div>
    </section>
  )
}

export default Home