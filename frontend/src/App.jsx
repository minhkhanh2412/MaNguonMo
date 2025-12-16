import React, {useEffect, useState} from 'react'

export default function App(){
  const [msg, setMsg] = useState('Loading...')

  useEffect(()=>{
    fetch('/api/hello')
      .then(r=>r.json())
      .then(d=>setMsg(d.message))
      .catch(()=>setMsg('Could not reach backend'))
  },[])

  return (
    <div style={{fontFamily:'Arial, sans-serif', padding:20}}>
      <h1>React Frontend (Vite)</h1>
      <p>Backend says: <strong>{msg}</strong></p>
      <p>Deploy this folder to Vercel (project root: `frontend`).</p>
    </div>
  )
}
