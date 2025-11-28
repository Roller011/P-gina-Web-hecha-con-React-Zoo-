import React from 'react'

function Features() {
  const features = [
    { 
      icon: "🚡 🦁",
      title: "Skyzoo",
      description: "Disfruta una vista panorámica del zoológico desde las alturas y observa a los animales en su hábitat como nunca antes."
    },
    {
      icon: "🦒 🌿",
      title: "Alimentar a los animales",
      description: "Una convivencia recreativa con nuestros animales alimenta jirafas, loros, capibaras y muchas especies mas."
    },
    {
      icon: "🐘 🚙",
      title: "Safari Educativo",
      description: "Las visitas al Safari son en un camión especial con una variedad de animales africanos, tales como elefantes, avestruces, hipopótamos, jirafas y rinocerontes."
    },
    {
      icon: "🐠 🦈",
      title: "Acuario",
      description: "Ven y sumerjete en las claras aguas de un río o bien, en un maravilloso arrecife coralino o conoce al depredador más temido del mundo marino: el tiburón."
    },
    {
         icon: "🐧 🧊",
      title: "Antártida",
      description: "En Antártida el reino de los pingüinos, el público podrá apreciar las bajas temperaturas y sentir qué tan frío es un témpano de hielo."
    }
    ,
    {
         icon: "👕 🐒",
      title: "Tienda de ZooTopia",
      description: "Llévate un recuerdo inolvidable de tu visita. Encuentra juguetes temáticos, peluches de nuestros animales, libros educativos, playeras y regalos que apoyan directamente nuestros programas de conservación."
    }
  ]

  return (
    <section className="features" id="caracteristicas">
      <div className="container">
        <h2>Atracciones Principales</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
