import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'

// Detect if the user prefers dark mode
function getTheme()
{
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
    const theme = createTheme({
            palette: {
            mode: (prefersDark ) ? 'dark' : 'light',
            },
        })
    return theme
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={getTheme()}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
