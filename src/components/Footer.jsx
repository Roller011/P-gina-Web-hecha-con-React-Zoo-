import React from 'react'

function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ZooTopia</h3>
            <p>Un gran sitio para conocer animales.</p>
          </div>
          
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <a href="#inicio">Inicio</a>
            <a href="#caracteristicas">Atracciones Principales</a>
            <a href="#acerca">Acerca de ZooTopia</a>
          </div>
          
          <div className="footer-section">
            <h4>Redes Sociales</h4>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>X</p>
            <p>+52 55 1234 5678</p>
            <p>ZooTopia@gmail.com</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 ZooTopia.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
