import React from 'react'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <section id="landing">
        <div className='row'>
            <header className='header'>
                <div className="header__content">
                    <h1 className='header__title'>Sophisticated</h1>
                    <h1 className='header__subtitle'>skincare</h1>
                </div>
            </header>
            <Footer />
        </div>
    </section>
  )
}

export default Home