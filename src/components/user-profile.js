import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Profile() {

  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.access_token) {
      alert('ypu are not log in!')
      navigate('/login')
    }
  }, [])

  return (
    <div>user-profile</div>
  )
}
