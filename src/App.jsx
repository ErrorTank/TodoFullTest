import React from 'react'
import { ReactLocation, Router } from '@tanstack/react-location'
import './App.css'

const location = new ReactLocation()

function App() {
  return <Router location={location} routes={[]} />
}

export default App
