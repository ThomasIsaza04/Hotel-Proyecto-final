# Hotel WC - Sistema de Cotizacion y Reservaciones

## Overview
Hotel WC es una aplicacion web moderna desarrollada con React y TypeScript que automatiza el calculo de precios de habitaciones segun la cantidad de huespedes y dias de estadia, aplicando descuentos automaticos.

### Reglas de Negocio (Caso 3)
**Tarifas por noche:**
- Individual (1 huesped): $2,500
- Doble (2 huespedes): $4,600
- Familiar (3+ huespedes): $5,200

**Descuentos (sobre total con IVA 19%):**
- 1 huesped: 5%
- 2 huespedes: 9%
- 3+ huespedes: 15%

## Project Architecture
- **Build System:** Vite 5.x
- **Framework:** React 18.x
- **Language:** TypeScript 5.x
- **Port:** 5000 (frontend)
- **Host:** 0.0.0.0 (configured for Replit proxy)

## File Structure
```
src/
├── modules/
│   ├── App.tsx             # Main app component
│   ├── Navbar.tsx          # Navigation bar with logo
│   ├── Hero.tsx            # Hero section with background image
│   ├── RoomsSection.tsx    # Room catalog cards
│   ├── PriceCalculator.tsx # Interactive pricing calculator
│   ├── ReservationForm.tsx # Functional reservation form
│   ├── VideoSection.tsx    # Promotional video embed
│   └── Footer.tsx          # Footer with NAP info
├── main.tsx                # Entry point
└── styles.css              # Global styles with CSS variables
public/
├── favicon.png             # Hotel logo favicon
└── images/                 # Stock images for hotel
```

## Key Features
- Responsive design with mobile support
- Interactive price calculator with real-time updates
- Form validation for reservations
- NAP (Name, Address, Phone) in footer for local SEO
- YouTube video embed for hotel tour
- Modern UI with custom fonts (Playfair Display, Inter)

## Development
- Run `npm run dev` to start the development server
- The app runs on port 5000 with HMR enabled
- Configured to work with Replit's proxy environment

## Deployment
- Build command: `npm run build`
- Preview command: `npm run preview`
- Deployment target: Autoscale

## Recent Changes (December 1, 2025)
- Transformed project into Hotel WC website
- Implemented room pricing calculator based on Caso 3 requirements
- Added functional reservation form
- Created responsive design with hotel branding
- Added favicon and stock images
- Implemented footer with NAP information
- Added video section
- Updated README with project documentation
