import React, { useEffect, useState } from 'react'

export default function App(){
  const [players, setPlayers] = useState([])
  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [number, setNumber] = useState('')

  useEffect(()=>{
    fetch('/api/players').then(r=>r.json()).then(setPlayers).catch(()=>setPlayers([]))
  },[])

  const add = async (e)=>{
    e.preventDefault()
    const payload = { name, position: position || null, number: number ? parseInt(number,10) : null }
    const res = await fetch('/api/players', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(payload) })
    if (res.ok){
      const p = await res.json()
      setPlayers(prev=>[...prev, p])
      setName(''); setPosition(''); setNumber('')
    } else {
      alert('Không thể thêm cầu thủ')
    }
  }

  return (
    <div style={{fontFamily:'Arial, sans-serif', padding:20}}>
      <h1>Danh sách cầu thủ</h1>
      <form onSubmit={add} style={{marginBottom:16}}>
        <input placeholder="Tên" value={name} onChange={e=>setName(e.target.value)} required />
        <input placeholder="Vị trí" value={position} onChange={e=>setPosition(e.target.value)} style={{marginLeft:8}} />
        <input placeholder="Số áo" value={number} onChange={e=>setNumber(e.target.value)} style={{marginLeft:8, width:80}} />
        <button style={{marginLeft:8}}>Thêm</button>
      </form>
      <ul>
        {players.map(p=> (<li key={p.id}>{p.name} — {p.position || '-'} — #{p.number || '-'}</li>))}
      </ul>
    </div>
  )
}

