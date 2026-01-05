import React from 'react'

function Map() {

    const products = [
        {
            id: 1,
            name: "Wireless Headphones",
            description: "High quality wireless headphones with noise cancellation.",
            image: "https://images.unsplash.com/photo-1612858249937-1cc0852093dd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            stock: 10,
            price: 3000,
        },
        {
            id: 2,
            name: "Smart Watch",
            description: "Track your fitness and notifications on the go.",
            image: "https://images.unsplash.com/photo-1632794716789-42d9995fb5b6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            stock: 8,
            price: 2000,
        },
        {
            id: 3,
            name: "Bluetooth Speaker",
            description: "Portable speaker with deep bass and clear sound.",
            image: "https://media.wired.com/photos/683a782e13687d4580a2c63a/4:3/w_640%2Cc_limit/StormBox%25202%2520ryan%2520waniata.png",
            stock: 20,
            price: 2500,
        },
        {
            id: 4,
            name: "Gaming Mouse",
            description: "Ergonomic gaming mouse with RGB lighting.",
            image: "https://cdn.mos.cms.futurecdn.net/6uNzaW5j5Cwfuy4d3GcCBc.jpg",
            stock: 15,
            price: 1500,
        },
    ]
    return (
        <div className='bg-gradient-to-r from-orange-500 to bg-pink-600 min-h-screen'>
            <h1 className='text-center font-3xl font-semibold'>Products List</h1>

            {/* Card Container */}

            <div className='grid grid-cols-3 gap-6'>

                {products.map((product) => (

                    <div key={product.id} className='bg-white rounded shadow-md'>

                        <img src={product.image} alt={product.name} className='w-full h-52 object-cover' />

                        <div className='p-3'>
                            <h1 className='text-lg text-center font-semibold'>{product.name}</h1>

                            <p>{product.description}</p>
                            <p>R.s {product.price}</p>
                            <p>Stock: {product.stock}</p>

                            <button className='bg-blue-500 text-white text-lg font-medium p-2 rounded w-full cursor-pointer hover:bg-blue-600'>Add to Cart</button>

                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default Map
