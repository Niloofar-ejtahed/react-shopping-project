import React, { useContext, useEffect, useState } from 'react'
import Input from '../tools/input'
import { UserContext } from '../context/user-context'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import UseAsync from '../hooks/useAsync';
import { BASE_AUTH_URL } from '../constant/url';

export default function Login() {

  const { getData, data } = UseAsync();
  const value = useContext(UserContext);
  const dispatch = useDispatch();
  const [unauthorized, setUnauthorized] = useState(false);
  const authData = useSelector((state) => state.auth)

  useEffect(() => {
    if (data?.statusCode == 401) {
      setUnauthorized(true)
    }
    if (data?.access_token) {
      sessionStorage.setItem('access_token', data?.access_token);
      setUnauthorized(false);
      dispatch({
        type: "changeLoginState",
        payload: {
          email: value.email,
          pass: value.password,
          isLogin: true
        },
      })
    }
  }, [data])

  function handleSubmit(e) {
    e.preventDefault()
    value.setUserName()
    value.setPassword()
    getData(BASE_AUTH_URL + 'api/v1/auth/login', 'POST', {
      email: value.email,
      password: value.password,
    });
  }

  return (
    <>
      <ul className="flex menu menu-horizontal bg-base-500 w-full px-10">
        <li className='pr-1'>
          <NavLink to={'/login'}>
            Login
          </NavLink>
        </li>
        <li className='pr-1'>
          <NavLink to={'/register'}>
            Register
          </NavLink>
        </li>
      </ul>

      {unauthorized
        ? (<h1 className='ml-10 mt-4 text-red-600'>No user account has been registered with this email.Please Register.</h1>) : ''
      }

      {authData?.isLogin ? (<h1 className='ml-10 mt-4 text-green-700'>You are successfuly log in</h1>) : ''}

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-4 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <svg className="h-12 w-12 text-gray-700 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" /></svg>
          <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Log in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6" onSubmit={(e) => { handleSubmit(e) }}>
            <Input type={'email'} id={'input-1'} label={'Email'} required
              onChange={(event) => {
                value.email = event.target.value
              }} />
            <Input type={'password'} id={'input-2'} label={'Password'} required
              onChange={(event) => {
                value.password = event.target.value
              }} />

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              > Log in
              </button>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}
