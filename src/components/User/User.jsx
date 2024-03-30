import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userId } = useParams()
  return (
    <div className='bg-gray-300 text-xl text-center'>
      User: {userId}
    </div>
  )
}

export default User
