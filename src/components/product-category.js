import React, { useEffect } from 'react'
import UseAsync from '../hooks/useAsync';
import LoadingHOC from '../HOC/loadingHOC';
import { BASE_URL } from '../constant/url';


export default function ProductCategory() {

    const { getData, data, loading, error } = UseAsync();

    useEffect(() => {
        getData(BASE_URL +'products/categories');

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
        <LoadingHOC loading={loading}>
            <div className='flex grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-between'>
                {data?.map((item, index) => {
                    return <a
                        href={'shop/' + item.replace(/\s+/g, '-').toLowerCase()}
                        id={item}
                        key={item+'card-cat'} className="mb-2 card bg-base-100 w-68 shadow-xl cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95 hover:bg-gray-300 duration-300 mx-4"
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
        </LoadingHOC>
    )
}
