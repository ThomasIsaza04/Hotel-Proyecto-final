import React from 'react'

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg">
        <img src="/images/luxury_hotel_buildin_a0ccbfb5.jpg" alt="Hotel WC Exterior" />
      </div>
      <div className="hero-content">
        <h1>Bienvenido a <span>Hotel WC</span></h1>
        <p>
          Descubre el lujo y confort que mereces. Ofrecemos habitaciones individuales, 
          dobles y familiares con las mejores tarifas y descuentos exclusivos.
        </p>
        <div>
          <a href="#cotizador" className="btn btn-primary">Cotizar Ahora</a>
          <a href="#habitaciones" className="btn btn-outline">Ver Habitaciones</a>
        </div>
      </div>
    </section>
  )
}
