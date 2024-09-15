'use client'
import React from 'react'
import { useSearchParams, usePathname } from 'next/navigation'


const Page = () => {

   const params = useSearchParams()
   const path = usePathname()
   
    const name = params.get('name') 
     console.log(path)
    console.log(name)

  return (
    <div>
      Page About
    </div>
  )
}

export default Page
