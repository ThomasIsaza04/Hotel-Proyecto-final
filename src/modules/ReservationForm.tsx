import React, { useState } from 'react'

interface FormData {
  nombre: string
  email: string
  telefono: string
  fechaEntrada: string
  fechaSalida: string
  huespedes: string
  tipoHabitacion: string
  comentarios: string
}

export function ReservationForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    fechaEntrada: '',
    fechaSalida: '',
    huespedes: '1',
    tipoHabitacion: 'individual',
    comentarios: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Reservacion enviada:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        fechaEntrada: '',
        fechaSalida: '',
        huespedes: '1',
        tipoHabitacion: 'individual',
        comentarios: ''
      })
    }, 5000)
  }

  return (
    <section className="reservation-section" id="reservar">
      <h2 className="section-title">Reserva tu Estadia</h2>
      <p className="section-subtitle">
        Completa el formulario y nos pondremos en contacto contigo para confirmar tu reservacion.
      </p>
      <form className="reservation-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="nombre">Nombre Completo *</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              placeholder="Juan Perez"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electronico *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="juan@email.com"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="telefono">Telefono *</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
              placeholder="+57 300 123 4567"
            />
          </div>
          <div className="form-group">
            <label htmlFor="huespedes">Numero de Huespedes *</label>
            <select
              id="huespedes"
              name="huespedes"
              value={formData.huespedes}
              onChange={handleChange}
              required
            >
              <option value="1">1 Huesped</option>
              <option value="2">2 Huespedes</option>
              <option value="3">3 Huespedes</option>
              <option value="4">4 Huespedes</option>
              <option value="5">5+ Huespedes</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="fechaEntrada">Fecha de Entrada *</label>
            <input
              type="date"
              id="fechaEntrada"
              name="fechaEntrada"
              value={formData.fechaEntrada}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="fechaSalida">Fecha de Salida *</label>
            <input
              type="date"
              id="fechaSalida"
              name="fechaSalida"
              value={formData.fechaSalida}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group full-width">
            <label htmlFor="tipoHabitacion">Tipo de Habitacion Preferida</label>
            <select
              id="tipoHabitacion"
              name="tipoHabitacion"
              value={formData.tipoHabitacion}
              onChange={handleChange}
            >
              <option value="individual">Individual - $2,500/noche</option>
              <option value="doble">Doble - $4,600/noche</option>
              <option value="familiar">Familiar - $5,200/noche</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group full-width">
            <label htmlFor="comentarios">Comentarios o Solicitudes Especiales</label>
            <textarea
              id="comentarios"
              name="comentarios"
              value={formData.comentarios}
              onChange={handleChange}
              placeholder="Cuentanos si tienes alguna solicitud especial para tu estadia..."
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary submit-btn">
          Enviar Solicitud de Reservacion
        </button>
        {submitted && (
          <div className="success-message">
            ¡Gracias por tu solicitud! Nos pondremos en contacto contigo pronto para confirmar tu reservacion.
          </div>
        )}
      </form>
    </section>
  )
}
