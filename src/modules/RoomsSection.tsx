import React from 'react'

const rooms = [
  {
    id: 'individual',
    name: 'Habitacion Individual',
    price: 2500,
    image: '/images/hotel_room_interior__c42523f3.jpg',
    features: ['1 Huesped', 'Cama King', 'WiFi Gratis', 'TV 55"'],
    discount: '5% descuento'
  },
  {
    id: 'doble',
    name: 'Habitacion Doble',
    price: 4600,
    image: '/images/hotel_room_interior__0ebdcd4d.jpg',
    features: ['2 Huespedes', '2 Camas Queen', 'WiFi Gratis', 'Minibar'],
    discount: '9% descuento'
  },
  {
    id: 'familiar',
    name: 'Habitacion Familiar',
    price: 5200,
    image: '/images/hotel_room_interior__323244a3.jpg',
    features: ['3+ Huespedes', 'Suite Amplia', 'WiFi Gratis', 'Sala de Estar'],
    discount: '15% descuento'
  }
]

export function RoomsSection() {
  return (
    <section className="rooms-section" id="habitaciones">
      <h2 className="section-title">Nuestras Habitaciones</h2>
      <p className="section-subtitle">
        Selecciona la habitacion perfecta para tu estadia. Todas incluyen desayuno buffet y acceso al spa.
      </p>
      <div className="rooms-grid">
        {rooms.map(room => (
          <div key={room.id} className="room-card">
            <img src={room.image} alt={room.name} />
            <div className="room-info">
              <h3>{room.name}</h3>
              <div className="price">
                ${room.price.toLocaleString()} <span>/ noche</span>
              </div>
              <div className="room-features">
                {room.features.map((feature, i) => (
                  <span key={i}>{feature}</span>
                ))}
              </div>
              <span className="discount-badge">{room.discount}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
