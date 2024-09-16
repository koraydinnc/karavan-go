import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Photo1 from '../app/assets/karavan.png'
import {Inter, Roboto} from '@next/font/google'
import {cookies} from 'next/headers'
import Trial from './Trial'
import {redirect} from 'next/navigation'


const inter = Inter({
  subsets: ['latin'],
  display: 'optional',
});

const roboto = Roboto({
  weight:'400',
  subsets: ['latin'],
  display: 'optional'
})

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const fetchData = async() => {
   const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags')
   return response.json()
}

const fetchData2 = async() => {
  const response = await fetch('https://restcountries.com/v3.1/all')
  return response.json()
}

const Page = async() => {
   await sleep(3000)
   const newCookies = cookies()

   let nav1 = false

   const data =  fetchData()
   const data2 =  fetchData2()

   const resultData = await Promise.all([
    data,
    data2
   ]
   )

   console.log(resultData)
   if (nav1) {
      redirect('/about')
   }
   
   console.log(newCookies.getAll())
   console.log(newCookies.getAll())

  return (
    <div>
      <div className={inter.className} >Page</div>
      <Link className={roboto.className} href="/about">Yönlendirme</Link>
      <Link href='/about?name=koray&surname=dinc'>Yönlendirme2</Link>
      <Link href={{
        pathname: '/about',
        query: {
          name: "koray",
          surname: "dinc"
        }
      }}>Yönlendirme3</Link>

      <Image
        src={Photo1}
        width={300}
        height={300}
        alt='Beautiful Landscape'
      />
      <Trial/>
    </div>
  );
}

export default Page
