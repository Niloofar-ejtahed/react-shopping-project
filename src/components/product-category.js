import React, { useEffect } from 'react'
import UseAsync from '../hooks/useAsync';

export default function ProductCategory() {

    const { getData, data, loading, error } = UseAsync();

    useEffect(() => {
        getData('https://fakestoreapi.com/products/categories');

    }, []);

    return (
        <div className='flex grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-between'>
                <div role='button' className="card bg-base-100 w-72 shadow-xl  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 hover:bg-gray-300 duration-300 ...">
                    <figure className='h-80'>
                        <img
                            src={require("../assets/headphones-with-minimalist-monochrome-background_23-2150763311.avif")}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body py-5 px-5 flex">
                        <h2 className="card-title mx-auto">{data?.[0]}</h2>
                    </div>
                </div>

                <div role='button' className="card bg-base-100 w-72 shadow-xl  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 hover:bg-gray-300 duration-300 ...">
                    <figure className='h-80'>
                        <img
                            src={require("../assets/luxurious-shiny-golden-chain_23-2149635271.jpg")}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body py-5 px-5">
                        <h2 className="card-title mx-auto">{data?.[1]}</h2>
                    </div>
                </div>

                <div role='button' className="card bg-base-100 w-72 shadow-xl  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 hover:bg-gray-300 duration-300 ...">
                    <figure className='h-80'>
                        <img
                            src={require("../assets/leather-suitcase-packed-with-shoes-clothes_23-2149433978.jpg")}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body py-5 px-5">
                        <h2 className="card-title mx-auto">{data?.[2]}</h2>
                    </div>
                </div>

                <div role='button' className="card bg-base-100 w-72 shadow-xl  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 hover:bg-gray-300 duration-300 ...">
                    <figure className='h-80'>
                        <img
                            src={require("../assets/still-life-spring-wardrobe-switch_23-2150478967.avif")}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body py-5 px-5">
                        <h2 className="card-title mx-auto">{data?.[3]}</h2>
                    </div>
                </div>

        </div>
    )
}
