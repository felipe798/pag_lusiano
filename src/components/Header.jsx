import React from 'react'
import '../styles/header.css'
import { FaFacebookF, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

function Header({ scrollY }) {
  // Agregar clase cuando el usuario hace scroll
  const headerClass = scrollY > 50 ? 'header scrolled' : 'header'

  return (
    <header className={headerClass}>
      <div className="container">
        <div className="content-container">
          <div className="logo">
            <h1>Luciano Noriega</h1>
            <p>Agente de Bienes Raíces</p>
          </div>
          <nav className="nav">
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#sobre-mi">Sobre Mí</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </nav>
          <div className="social-icons">
            <a href="https://www.facebook.com/lucianonoriega" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://wa.me/51958501061" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="mailto:lucianonoriega098@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
          <div className="mobile-menu-button">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header