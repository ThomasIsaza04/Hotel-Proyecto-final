# Hotel WC - Sistema de Cotizacion y Reservaciones

## Descripcion del Proyecto

**Hotel WC** es una aplicacion web moderna desarrollada con React y TypeScript que permite a los usuarios explorar habitaciones, calcular precios de estadia y realizar reservaciones de manera facil e intuitiva.

### Caso de Negocio

El sistema automatiza el calculo de precios basado en:

- **Tarifas por tipo de habitacion:**
  - Individual (1 huesped): $2,500/noche
  - Doble (2 huespedes): $4,600/noche
  - Familiar (3+ huespedes): $5,200/noche

- **Sistema de descuentos sobre el total con IVA:**
  - 1 huesped: 5% de descuento
  - 2 huespedes: 9% de descuento
  - 3+ huespedes: 15% de descuento

## Caracteristicas Principales

- **Pagina de inicio** con hero section atractivo e imagenes de alta calidad
- **Catalogo de habitaciones** con precios, caracteristicas y descuentos
- **Cotizador interactivo** que calcula automaticamente:
  - Subtotal segun dias de estadia
  - IVA (19%)
  - Descuento aplicable segun tipo de habitacion
  - Total final a pagar
- **Formulario de reservacion** funcional con validacion de campos
- **Seccion de video** promocional del hotel
- **Footer completo** con informacion NAP (Nombre, Direccion, Telefono)
- **Diseno responsivo** adaptado a dispositivos moviles

## Tecnologias Utilizadas

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estatico
- **Vite** - Build tool y servidor de desarrollo
- **CSS3** - Estilos personalizados con variables CSS

## Estructura del Proyecto

```
src/
├── modules/
│   ├── App.tsx           # Componente principal
│   ├── Navbar.tsx        # Barra de navegacion
│   ├── Hero.tsx          # Seccion hero
│   ├── RoomsSection.tsx  # Catalogo de habitaciones
│   ├── PriceCalculator.tsx # Cotizador de precios
│   ├── ReservationForm.tsx # Formulario de reservacion
│   ├── VideoSection.tsx  # Video promocional
│   └── Footer.tsx        # Pie de pagina con NAP
├── main.tsx              # Punto de entrada
└── styles.css            # Estilos globales
```

## Scripts Disponibles

```bash
npm install     # Instalar dependencias
npm run dev     # Servidor de desarrollo
npm run build   # Compilar para produccion
npm run preview # Previsualizar build
```

## Informacion de Contacto (NAP)

- **Nombre:** Hotel WC - Hospedaje de Lujo
- **Direccion:** Calle 123 #45-67, Centro Historico, Bogota, Colombia
- **Telefono:** +57 (1) 234-5678 | WhatsApp: +57 300 123 4567
- **Email:** reservas@hotelwc.com

## Desarrollado Para

Proyecto academico que demuestra el uso de:
- Variables y tipos de datos en TypeScript
- Estructuras de decision (if/switch/ternario)
- Operaciones aritmeticas aplicadas
- Manejo de estado con React Hooks
- Formularios controlados
- Diseno UI/UX moderno

---

Desarrollado con React + TypeScript + Vite
