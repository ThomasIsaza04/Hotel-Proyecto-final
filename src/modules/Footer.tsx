import React from 'react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contacto">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Hotel WC</h4>
          <p>
            Tu destino de lujo y confort. Ofrecemos la mejor experiencia en hospedaje 
            con tarifas competitivas y descuentos exclusivos para todos nuestros huespedes.
          </p>
        </div>
        
        <div className="footer-section">
          <h4>Contacto (NAP)</h4>
          <div className="nap-info">
            <div className="nap-item">
              <svg className="nap-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <div>
                <strong>Nombre:</strong><br />
                Hotel WC - Hospedaje de Lujo
              </div>
            </div>
            <div className="nap-item">
              <svg className="nap-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <strong>Direccion:</strong><br />
                Calle 123 #45-67, Centro Historico<br />
                Bogota, Colombia
              </div>
            </div>
            <div className="nap-item">
              <svg className="nap-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <strong>Telefono:</strong><br />
                +57 (1) 234-5678<br />
                +57 300 123 4567 (WhatsApp)
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Enlaces Rapidos</h4>
          <a href="#inicio">Inicio</a>
          <a href="#habitaciones">Habitaciones</a>
          <a href="#cotizador">Cotizador de Precios</a>
          <a href="#reservar">Hacer Reservacion</a>
          <a href="#contacto">Contacto</a>
        </div>
        
        <div className="footer-section">
          <h4>Horario de Atencion</h4>
          <p>Recepcion 24 horas</p>
          <p>Check-in: 3:00 PM</p>
          <p>Check-out: 12:00 PM</p>
          <p style={{ marginTop: '1rem' }}>
            <a href="mailto:reservas@hotelwc.com">reservas@hotelwc.com</a>
          </p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Hotel WC. Todos los derechos reservados. | Desarrollado con React + TypeScript</p>
      </div>
    </footer>
  )
}
