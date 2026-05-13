import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

function App() {
  return (
    <div style={{padding:'60px',background:'#000',minHeight:'100vh',color:'#fff',fontFamily:'Arial'}}>
      <h1 style={{fontSize:'72px',marginBottom:'20px'}}>NR Recordings</h1>
      <p>Drum & Bass label site coming soon.</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
