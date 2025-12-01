import React from 'react'

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/favicon.png" alt="Hotel WC Logo" />
        <span className="logo-text">Hotel <span>WC</span></span>
      </div>
      <ul className="nav-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#habitaciones">Habitaciones</a></li>
        <li><a href="#cotizador">Cotizador</a></li>
        <li><a href="#reservar">Reservar</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  )
}
