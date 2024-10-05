import React, { useContext, useEffect, useState } from 'react'
import Input from '../tools/input'
import { UserContext } from '../context/user-context';
import { useDispatch, useSelector } from 'react-redux';
import UseAsync from '../hooks/useAsync';
import { NavLink, useNavigate } from 'react-router-dom';
import { BASE_AUTH_URL } from '../constant/url';

export default function Register() {

  const { getData, data } = UseAsync();
  const [error, setError] = useState();

  const value = useContext(UserContext);
  const registerData = useSelector((state) => state.register)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.id) {
      dispatch({
        type: "registerState",
        payload: {
          user: data?.name,
          pass: data?.password,
          email: data?.email,
          id: data?.id,
          isRegisterSuccessful: true
        },
      })
      sessionStorage.setItem('userId', data?.id)
      setTimeout(() => {
        navigate('/login')
      }, 3000);
    } 

    if(registerData?.isRegisterSuccessful === false) {
      data?.message?.map((err) => {
        setError(err)
      })
    }
  }
    , [data])


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

      {data?.id ? (<h1 className='ml-10 mt-4 text-green-700'>You regestered successfuly.Please log in to your profile!</h1>)
        : ''}

      {registerData?.isRegisterSuccessful === false ? (<h1 className='ml-10 mt-4 text-red-600'>{error}</h1>) : ''}

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-4 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <svg className="h-12 w-12 text-gray-700 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
          <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6" onSubmit={(e) => {
            e.preventDefault()
            value.setUserName()
            value.setPassword()
            getData(BASE_AUTH_URL + 'api/v1/users/', 'POST', {
              name: value.userName,
              email: value.email,
              password: value.password,
              avatar: 'https://picsum.photos/800',
            });
          }}

          >
            <Input type={'text'} id={'input-1'} label={'User Name'} required
              onChange={(event) => {
                value.userName = event.target.value
              }} />
            <Input type={'email'} id={'input-3'} label={'Email'}
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
              > Sign up
              </button>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}
