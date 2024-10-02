import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'

export default function Header() {

    const authData = useSelector((state) => state.auth);
    const basketData = useSelector((state) => state.basket);
    const [isLogin, setIsLogin] = useState(false);
    const [proNum, setProNum] = useState();
    const dispatch = useDispatch();

    //switch login ang logout buttons
    useEffect(() => {
        if (sessionStorage.access_token !== undefined || authData?.isLogin === true) {
            setIsLogin(true)
        }
    }, [authData?.isLogin])

    //get Numbers of products
    useEffect(() => {
        if (basketData?.products.length > 0) {
            setProNum(basketData.products.length)
        }
    }, [basketData?.products])

    return (
        <div>

            <ul className="flex justify-between menu menu-horizontal bg-base-500 w-full px-10">
                <div className='flex'>
                    <li className='pr-1'>
                        <NavLink to={'/'}>
                            Home
                        </NavLink>
                    </li>
                    <li className='pr-1'>
                        <NavLink to={'/shop'}>
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about'}>
                            About
                        </NavLink>
                    </li>
                </div>

                <a href='/'>
                    <img src={require('../assets/header-logo.png')} alt='logo' className='w-40 mr-4 cursor-pointer' />
                </a>

                <div className='flex'>
                    <li >
                        {isLogin === false ? (
                            <NavLink to={'/login'} className={'p-2'}>
                                <svg className="h-6 w-6"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />  <circle cx="12" cy="7" r="4" />
                                </svg>
                            </NavLink>
                        ) : (
                            <NavLink to={'/login'} onClick={() => {
                                dispatch({
                                    type: "changeLoginState",
                                    payload: {
                                        isLogin: false,
                                    },
                                });
                                setIsLogin(false);
                                sessionStorage.removeItem('access_token')

                            }}>
                                <svg className="h-6 w-6 text-red-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                    <polyline points="16 17 21 12 16 7" />
                                    <line x1="21" y1="12" x2="9" y2="12" /></svg>
                                Log out
                            </NavLink>
                        )}

                    </li>

                    <li className='pl-1'>
                        <NavLink to={'/basket'} className={'p-2'}>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>

                            {proNum > 0 ? (<p className="rounded-full bg-orange-500 p-2 text-center"
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    fontSize: '14px',
                                    position: 'absolute',
                                    top: '23px',
                                    right: '-2px'
                                }}>
                                <span style={{
                                    position: 'absolute',
                                    top: '0',
                                    right: '6px'
                                }}>{proNum}</span>
                            </p>) : ''}

                        </NavLink>

                    </li>
                </div>
            </ul>

        </div>
    )
}
