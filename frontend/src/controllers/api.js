export async function getHello(){
  const res = await fetch('/api/hello')
  if (!res.ok) throw new Error('Network error')
  return res.json()
}
