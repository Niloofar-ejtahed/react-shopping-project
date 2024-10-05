import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PageNotFound() {

    const navigate = useNavigate();

    return (
        <div className='text-center'>
            <img className='mx-auto' src={require('../assets/404-error.jpg')} style={{ height: '400px' }} />
            <p>Page not found ...</p>
            <button className="mt-10 bg-orange-400 hover:bg-orange-500 text-gray-800 py-2 px-4 rounded ml-4"
            onClick={()=>navigate('/')}>
                Home
            </button>
        </div>
    )
}
