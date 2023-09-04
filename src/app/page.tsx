import ProductBox from "@/components/productbox";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-5xl container mx-auto">
        <div className="h-64 rounded-md overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: 'url("/banner.jpg")' }}>
          <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
            <div className="px-10 max-w-xl">
              <h2 className="text-2xl text-white font-semibold">Get your Items</h2>
              <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
              <a className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500" href="/shop">Shop Now
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span></a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl py-3 container">
        <h3 className="text-gray-600 text-2xl font-medium">Top Sellers</h3>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
        </div>
      </div>
    </main>
  )
}
