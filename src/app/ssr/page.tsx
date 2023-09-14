
export default async function Ssr() {
  const data = await getData()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-5xl mx-auto">
        <div className="h-64 rounded-md overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: 'url("' + data.img100 + '")' }}>
          <div className="flex items-center h-full">
            <div className="px-10 max-w-xl">
              <h2 className="text-2xl text-white font-semibold">Testing SSR</h2>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}

async function getData() {
  const res = await fetch('http://localhost:3000/catstatus.json');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}


