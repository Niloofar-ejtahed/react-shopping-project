import React from 'react'

export default function Input(props) {

    const {label , type , id , error, ...otherProps} = props

  return (
    <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">{label}</label>
        <input type={type || 'text'} id={id} {...otherProps}
        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        <p>{error}</p>
    </div>
  )
}
