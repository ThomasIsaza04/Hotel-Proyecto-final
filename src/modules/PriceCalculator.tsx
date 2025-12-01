import React, { useState, useMemo } from 'react'

const TARIFAS = {
  individual: 2500,
  doble: 4600,
  familiar: 5200
}

const DESCUENTOS = {
  individual: 0.05,
  doble: 0.09,
  familiar: 0.15
}

const IVA = 0.19

type TipoHabitacion = 'individual' | 'doble' | 'familiar'

function getTipoHabitacion(huespedes: number): TipoHabitacion {
  if (huespedes === 1) return 'individual'
  if (huespedes === 2) return 'doble'
  return 'familiar'
}

export function PriceCalculator() {
  const [huespedes, setHuespedes] = useState(1)
  const [dias, setDias] = useState(1)

  const calculo = useMemo(() => {
    const tipo = getTipoHabitacion(huespedes)
    const tarifa = TARIFAS[tipo]
    const subtotal = tarifa * dias
    const iva = subtotal * IVA
    const totalConIva = subtotal + iva
    const descuentoPorcentaje = DESCUENTOS[tipo]
    const descuento = totalConIva * descuentoPorcentaje
    const totalFinal = totalConIva - descuento

    return {
      tipo,
      tarifa,
      subtotal,
      iva,
      totalConIva,
      descuentoPorcentaje,
      descuento,
      totalFinal
    }
  }, [huespedes, dias])

  const nombreTipo = {
    individual: 'Individual',
    doble: 'Doble',
    familiar: 'Familiar'
  }

  return (
    <section className="calculator-section" id="cotizador">
      <h2 className="section-title">Cotizador de Estadia</h2>
      <p className="section-subtitle">
        Calcula el precio de tu estadia segun la cantidad de huespedes y dias. 
        Los descuentos se aplican automaticamente.
      </p>
      <div className="calculator-container">
        <div className="calculator-grid">
          <div className="form-group">
            <label htmlFor="huespedes">Numero de Huespedes</label>
            <input
              type="number"
              id="huespedes"
              min="1"
              max="10"
              value={huespedes}
              onChange={(e) => setHuespedes(Math.max(1, parseInt(e.target.value) || 1))}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dias">Dias de Estadia</label>
            <input
              type="number"
              id="dias"
              min="1"
              max="365"
              value={dias}
              onChange={(e) => setDias(Math.max(1, parseInt(e.target.value) || 1))}
            />
          </div>
          <div className="form-group">
            <label>Tipo de Habitacion</label>
            <input
              type="text"
              value={nombreTipo[calculo.tipo]}
              readOnly
              style={{ backgroundColor: '#e2e8f0', cursor: 'not-allowed' }}
            />
          </div>
        </div>

        <div className="result-box">
          <div className="result-row">
            <span className="label">Tarifa por noche ({nombreTipo[calculo.tipo]})</span>
            <span className="value">${calculo.tarifa.toLocaleString()}</span>
          </div>
          <div className="result-row">
            <span className="label">Subtotal ({dias} {dias === 1 ? 'noche' : 'noches'})</span>
            <span className="value">${calculo.subtotal.toLocaleString()}</span>
          </div>
          <div className="result-row">
            <span className="label">IVA (19%)</span>
            <span className="value">${calculo.iva.toLocaleString()}</span>
          </div>
          <div className="result-row">
            <span className="label">Total con IVA</span>
            <span className="value">${calculo.totalConIva.toLocaleString()}</span>
          </div>
          <div className="result-row">
            <span className="label">
              Descuento
              <span className="discount-badge">{(calculo.descuentoPorcentaje * 100)}%</span>
            </span>
            <span className="value" style={{ color: '#38a169' }}>-${calculo.descuento.toLocaleString()}</span>
          </div>
          <div className="result-row total">
            <span className="label">TOTAL A PAGAR</span>
            <span className="value">${calculo.totalFinal.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
