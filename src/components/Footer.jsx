import React from 'react'
import '../styles/footer.css'
import { FaFacebookF, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="content-container">
          <div className="footer-content">
            <div className="footer-logo">
              <h2>Luciano Noriega</h2>
              <p>Agente de Bienes Raíces</p>
            </div>
            
            <div className="footer-links">
              <h3>Enlaces rápidos</h3>
              <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#sobre-mi">Sobre Mí</a></li>
                <li><a href="#contacto">Contacto</a></li>
              </ul>
            </div>
            
            <div className="footer-contact">
              <h3>Contacto</h3>
              <p><a href="tel:+51958501061">+51 958 501 061</a></p>
              <p><a href="mailto:lucianonoriega098@gmail.com">lucianonoriega098@gmail.com</a></p>
              
              <div className="footer-social">
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
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {currentYear} Luciano Noriega - Agente de Bienes Raíces. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer