import React, { useEffect } from 'react'
import UseAsync from '../hooks/useAsync';

export default function ProductCategory() {

    const { getData, data, loading, error } = UseAsync();

    useEffect(() => {
        getData('https://fakestoreapi.com/products/categories');

    }, []);

    const images = [
        <img
            src={require("../assets/headphone.avif")}
            alt="headphone" />,
        <img
            src={require("../assets/jewelery.jpg")}
            alt="jewelery" />,
        <img
            src={require("../assets/man-clothes.jpg")}
            alt="man-clothes" />,
        <img
            src={require("../assets/woman-clothes.avif")}
            alt="woman-clothes" />
    ]

    return (
        <div className='flex grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-between'>
            {data?.map((item, index) => {
                return <a
                    href={'shop/'+item.replace(/\s+/g, '-').toLowerCase()}
                    id={item}
                    key={item} role='button' className="mb-2 card bg-base-100 w-72 shadow-xl  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 hover:bg-gray-300 duration-300 ..."
                >
                    <figure className='h-80'>
                        {images[index]}
                    </figure>
                    <div className="card-body py-5 px-5 flex">
                        <h2 className="card-title mx-auto">{item}</h2>
                    </div>
                </a>
            })}
        </div>
    )
}
