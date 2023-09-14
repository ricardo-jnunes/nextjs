'use client'

import { useState, useEffect } from 'react'

export default function CatStatus() {

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)


    useEffect(() => {
        fetch('http://localhost:3000/catstatus.json')
            .then((res) => res.json())
            .then((data) => {
                delay(8000);
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No cat status</p>
    return (
        <div className="max-w-5xl mx-auto">
            <div className="h-64 rounded-md overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: 'url("' + data.img401 + '")' }}>
                <div className="flex items-center h-full">
                    <div className="px-10 max-w-xl"><h2 className="text-2xl text-white font-semibold">Testing CSR</h2>
                    </div>
                </div>
            </div>
        </div>

    )
}
