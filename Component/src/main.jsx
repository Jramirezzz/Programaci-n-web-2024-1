import './style.css'
import React from 'react'
import { createRoot } from 'react-dom'
import App from './app'

const appContainer = document.getElementById('app')
const root = createRoot(appContainer)
root.render(<App />)
