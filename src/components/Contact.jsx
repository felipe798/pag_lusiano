import React from 'react'
import '../styles/contact.css'
import { FaPhone, FaEnvelope, FaWhatsapp, FaFacebookF, FaMapMarkerAlt } from 'react-icons/fa'

function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="content-container">
          <h2>Contacto</h2>
          <p className="contact-intro">¿Listo para encontrar tu propiedad ideal? ¡Contáctame hoy mismo!</p>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <FaPhone />
                <div>
                  <h3>Teléfono</h3>
                  <p><a href="tel:+51958501061">+51 958 501 061</a></p>
                </div>
              </div>
              
              <div className="contact-item">
                <FaEnvelope />
                <div>
                  <h3>Email</h3>
                  <p><a href="mailto:lucianonoriega098@gmail.com">lucianonoriega098@gmail.com</a></p>
                </div>
              </div>
              
              <div className="contact-item">
                <FaWhatsapp />
                <div>
                  <h3>WhatsApp</h3>
                  <p><a href="https://wa.me/51958501061" target="_blank" rel="noopener noreferrer">Mensaje directo</a></p>
                </div>
              </div>
              
              <div className="contact-item">
                <FaFacebookF />
                <div>
                  <h3>Facebook</h3>
                  <p><a href="https://www.facebook.com/lucianonoriega" target="_blank" rel="noopener noreferrer">Luciano Noriega - Agente de Bienes Raíces</a></p>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <h3>Envíame un mensaje</h3>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Nombre completo" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Correo electrónico" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Teléfono" />
                </div>
                <div className="form-group">
                  <textarea placeholder="¿En qué puedo ayudarte?" rows="4" required></textarea>
                </div>
                <button type="submit" className="submit-button">Enviar mensaje</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact