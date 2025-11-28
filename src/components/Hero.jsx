import React from 'react'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <h1>Bienvenido a ZooTopia</h1>
        <p>Una gran experiencia con demasiadas especies de todo el mundo.</p>
        <div className="hero-buttons">
          <button className="btn primary">Comprar boletos</button>
          <button className="btn secondary">Saber Más</button>
        </div>
      </div>
      <div className="hero-image">
        <div className="placeholder-image">
          <img src="/img/zoo.jpg" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero

