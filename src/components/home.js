import React, { useEffect } from 'react'
import ProductCategory from './product-category'
import ProductCard from './product-card'
import UseAsync from '../hooks/useAsync';
import LoadingHOC from '../HOC/loadingHOC';
import { useNavigate } from 'react-router-dom';
import FQA from './FQA';
import { BASE_URL } from '../constant/url';

export default function Home() {

    const { getData, data, loading } = UseAsync();
    const navigate = useNavigate();

    useEffect(() => {
        getData(BASE_URL + 'products?limit=8');

    }, []);

    return (

        <div className='h-100 text-center'>

            <div style={{ height: '100px' }}>
                <img src={require('../assets/header-slide.jpg')} />
            </div>
            <div style={{ height: '500px' }} className='flex place-content-end'>
                <div className='w-2/5 pt-8 text-left px-2'>
                    <h1 className='font-extrabold py-0' style={{ fontSize: '50px' }}>ONLINE</h1>
                    <h1 className='font-semibold py-0' style={{ fontSize: '50px' }}>STORE</h1>
                    <p className='w-3/4 mb-4'>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Qper tincidunt porta scelerisque. Ipsum condimentum lectus inceptos penatibus ex turpis quis ex varius. Justo sit ac nostra; mattis accumsan pharetra. porttitor risus dictum gravida blandit.
                    </p>
                    <button className="bg-transparent hover:bg-orange-500 text-gray-600 font-semibold hover:text-white py-2 px-4 border border-gray-600 hover:border-transparent rounded"
                        onClick={() => {
                            navigate("/shop")
                        }}>
                        Shop Now
                    </button>
                </div>
            </div>


            <div className='px-14 pt-10'>
                <h1 className='text-2xl font-semibold py-6'>Popular Products</h1>
                <LoadingHOC loading={loading}>
                    <section className="flex flex-wrap justify-between mx-4">
                        {data?.map((item) => {
                            return (
                                <ProductCard
                                    key={item.id + 'card'}
                                    cardData={item}
                                />)
                        })
                        }
                    </section>
                </LoadingHOC>
            </div>
            <div className='my-10 px-14'>
                <h1 className='text-2xl font-semibold pt-6 pb-10'>Product Categories</h1>
                <ProductCategory />
            </div>

            <div className='mt-10 px-14 pb-10'>
                <h1 className='text-2xl font-semibold pt-6 pb-10'>FQA</h1>
                <FQA />
            </div>
        </div>
    )
}
