import React from 'react'
import '../styles/herobanner.css'

function HeroBanner() {
  return (
    <section id="inicio" className="hero-banner">
      <div className="overlay"></div>
      <div className="container">
        <div className="content-container">
          <div className="hero-content">
            <h2>Especializado en encontrar el hogar perfecto para ti</h2>
            <p>Con años de experiencia en el mercado inmobiliario local</p>
            <a href="#contacto" className="cta-button">Contáctame</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner