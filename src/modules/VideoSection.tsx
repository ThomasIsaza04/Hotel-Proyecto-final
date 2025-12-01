import React from 'react'

const videos = [
  {
    id: '8sqY6QXtTsI',
    title: 'Suite de Lujo - Tour Exclusivo',
    description: 'Descubre nuestra suite mas lujosa con vistas panoramicas'
  },
  {
    id: 'WG7JxDGXpwk',
    title: 'Vistas al Oceano',
    description: 'Habitaciones con impresionantes vistas al mar'
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Experiencia 360° del Hotel',
    description: 'Recorre nuestras instalaciones en vista panoramica'
  }
]

export function VideoSection() {
  return (
    <section className="video-section" id="video">
      <h2 className="section-title">Conoce Nuestro Hotel</h2>
      <p className="section-subtitle">
        Descubre las instalaciones y servicios que hacen de Hotel WC el destino perfecto para tu estadia.
      </p>
      <div className="videos-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <div className="video-container">
              <div className="video-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?controls=1&rel=0&modestbranding=1`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="video-info">
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
