const express = require('express')
const path = require('path')
const app = express()

app.use(express.json())

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Node backend!' })
})

// Serve static frontend in production if present
const frontendDist = path.join(__dirname, '..', 'frontend', 'dist')
app.use(express.static(frontendDist))
app.get('*', (req, res) => {
  if (req.path.startsWith('/api/')) return res.status(404).end()
  res.sendFile(path.join(frontendDist, 'index.html'))
})

const port = process.env.PORT || 4000
app.listen(port, ()=> console.log(`Backend running on port ${port}`))
