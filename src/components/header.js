import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div className=''>

            <ul className="flex justify-between menu menu-horizontal bg-base-200 w-full">
                <div className='flex'>
                    <li>
                        <NavLink to={'/'}>
                            Home
                        </NavLink>
                    </li>
                    <li>
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

                <div className='flex'>

                    <li>
                        <NavLink to={'/login'}>
                            <svg className="h-6 w-6 text-gray-700"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />  <circle cx="12" cy="7" r="4" />
                            </svg>
                            Log in
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to={'/register'}>
                            <svg className="h-6 w-6 text-gray-700" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                            </svg>
                            Register
                        </NavLink>
                    </li>
                </div>
            </ul>

        </div>
    )
}
