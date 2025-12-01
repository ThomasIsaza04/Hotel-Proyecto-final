# React + TypeScript — Control Flow + Arithmetic Operations

## Overview
This is a React + TypeScript + Vite frontend application demonstrating control flow concepts and arithmetic operations in Spanish. The app showcases:
- Variables and operations
- Decision structures (if/switch/ternary)
- Loops
- Applied arithmetic with utility functions

## Project Architecture
- **Build System:** Vite 5.x
- **Framework:** React 18.x
- **Language:** TypeScript 5.x
- **Port:** 5000 (frontend)
- **Host:** 0.0.0.0 (configured for Replit proxy)

## File Structure
- `src/modules/` - React components
  - `App.tsx` - Main app component
  - `VariablesOps.tsx` - Variables and operations demo
  - `DecisionDemo.tsx` - Decision structures demo
  - `LoopsDemo.tsx` - Loops demo
  - `ArithmeticOps.tsx` - Arithmetic operations with utilities
- `src/lib/math.ts` - Math utility functions
- `vite.config.ts` - Vite configuration (configured for Replit)

## Development
- Run `npm run dev` to start the development server
- The app runs on port 5000 with HMR enabled
- Configured to work with Replit's proxy environment

## Deployment
- Build command: `npm run build`
- Preview command: `npm run preview`
- Deployment target: Autoscale (static frontend)

## Recent Changes (December 1, 2025)
- Configured Vite for Replit environment
  - Set server host to 0.0.0.0:5000
  - Added allowed hosts for Replit domains
  - Configured HMR for WebSocket over WSS
- Set up deployment configuration
- Installed all dependencies
