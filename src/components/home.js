import React from 'react'
import ProductCategory from './product-category'

export default function Home() {
    return (
        <div className='h-100 bg-neutral-200 p-4 text-center px-14'>
            <div>
                <h1 className='text-2xl font-semibold py-6'>Product Categories</h1>
                <ProductCategory />
            </div>
        </div>
    )
}
