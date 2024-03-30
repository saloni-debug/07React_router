import React, { useState, useEffect } from 'react'

function Github() {
    const [data, setData] = useState("")
    useEffect (() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(res => res.json())
        .then(data => setData(data))
    })
  return (
    <div className='bg-gray-300 m-4 text-3xl text-white text-center;'>
      Github followers: {data.followers}
    </div>
  )
}

export default Github
