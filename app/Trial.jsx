'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const Trial = () => {
    const router = useRouter()
   console.log('trial')

  return (
    <button onClick={() => router.push('/about')}>
      Push
    </button>
  )
}

export default Trial
