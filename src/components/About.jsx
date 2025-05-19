import React from 'react'
import '../styles/about.css'
import { FaMedal, FaHome, FaHandshake } from 'react-icons/fa'

function About() {
  return (
    <section id="sobre-mi" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img src="/images/agent.jpg" alt="Luciano Noriega - Agente de Bienes Raíces" />
            <div className="trust-badge">
              <FaMedal />
              <span>Profesional Certificado</span>
            </div>
          </div>
          <div className="about-text">
            <h2>Sobre Mí</h2>
            <p className="tagline">Agente inmobiliario comprometido con tu éxito</p>
            <p>¡Hola! Soy Luciano Noriega, tu Agente de Bienes Raíces especializado en ayudarte a encontrar el hogar o inversión perfecta. Con años de experiencia en el mercado inmobiliario, me dedico a proporcionar un servicio excepcional y personalizado a cada uno de mis clientes.</p>
            
            <div className="services">
              <div className="service-item">
                <FaHome />
                <h3>Compra y Venta</h3>
                <p>Te guío en todo el proceso, desde la búsqueda hasta el cierre de la operación.</p>
              </div>
              <div className="service-item">
                <FaHandshake />
                <p>Negociación experta para asegurar las mejores condiciones en cada transacción.</p>
              </div>
            </div>
            
            <div className="trust-elements">
              <div className="trust-item">
                <h4>Compromiso</h4>
                <p>Estoy dedicado a encontrar la propiedad perfecta que se ajuste a tus necesidades y presupuesto.</p>
              </div>
              <div className="trust-item">
                <h4>Transparencia</h4>
                <p>Información clara y honesta durante todo el proceso inmobiliario.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About