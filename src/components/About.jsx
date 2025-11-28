import React, { useState } from 'react'

function About() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`¡Gracias por suscribirte con: ${email}`)
    setEmail('')
  }

  return (
    <section className="about" id="acerca">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Acerca de ZooTopia 🦁</h2>
            <p>
        Somos un zoológico que cuenta con una amplia variedad de especies y ofrece programas de conservación
         para diferentes animales. Promovemos la educación ambiental a través de visitas guiadas, talleres interactivos y 
         actividades recreativas tanto para niños y adultos.
            </p>
            <p>
             Tus visitas nos ayudan a poder seguir con nuestros programas de conservación de animales.
            </p>
          </div>
          
          <div className="newsletter">
            <h3>Suscríbete a nuestro newsletter</h3>
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn primary">
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
