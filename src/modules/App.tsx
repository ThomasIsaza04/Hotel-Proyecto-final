import React from 'react'
import { Navbar } from './Navbar'
import { Hero } from './Hero'
import { RoomsSection } from './RoomsSection'
import { PriceCalculator } from './PriceCalculator'
import { ReservationForm } from './ReservationForm'
import { VideoSection } from './VideoSection'
import { Footer } from './Footer'

export function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <RoomsSection />
      <PriceCalculator />
      <ReservationForm />
      <VideoSection />
      <Footer />
    </>
  )
}
