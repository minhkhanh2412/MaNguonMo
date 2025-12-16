const { PrismaClient } = require('@prisma/client')

// Singleton Prisma client to avoid too many connections in serverless
let prisma
if (!global.__prisma) {
  global.__prisma = new PrismaClient()
}
prisma = global.__prisma

module.exports = async (req, res) => {
  try {
    if (req.method === 'GET') {
      const players = await prisma.player.findMany({ orderBy: { id: 'asc' } })
      return res.status(200).json(players)
    }

    if (req.method === 'POST') {
      const { name, position, number } = req.body
      if (!name) return res.status(400).json({ error: 'name required' })
      const p = await prisma.player.create({ data: { name, position: position || null, number: number || null } })
      return res.status(201).json(p)
    }

    res.setHeader('Allow', 'GET, POST')
    return res.status(405).end('Method Not Allowed')
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'internal' })
  }
}
