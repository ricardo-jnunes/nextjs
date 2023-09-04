import ProductBox from "@/components/productbox";


export default function About() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="max-w-5xl py-3 container">
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                    <ProductBox />
                    <ProductBox />
                    <ProductBox />
                    <ProductBox />
                </div>
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
