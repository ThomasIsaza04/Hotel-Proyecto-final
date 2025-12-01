import React from 'react'

export function VideoSection() {
  return (
    <section className="video-section" id="video">
      <h2 className="section-title">Conoce Nuestro Hotel</h2>
      <p className="section-subtitle">
        Descubre las instalaciones y servicios que hacen de Hotel WC el destino perfecto para tu estadia.
      </p>
      <div className="video-container">
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=1&rel=0&modestbranding=1"
            title="Video Hotel WC"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
