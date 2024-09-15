import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Photo1 from '../app/assets/karavan.png'
import {Inter, Roboto} from '@next/font/google'
import {cookies} from 'next/headers'


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
const Page = async() => {
   await sleep(3000)
   const newCookies = cookies()

   console.log(newCookies.getAll())
   console.log(newCookies.get('cookie1').value)
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
    </div>
  );
}

export default Page
