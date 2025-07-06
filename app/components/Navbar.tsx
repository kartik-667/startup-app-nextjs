import { auth } from '@/auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Navbarclient from './Navbarclient'

//we can use async here as it is a server component
async function Navbar() {
    const session=await auth() 

    

  return (
    <div>
      <header className='bg-white '>
        <nav className='flex justify-between items-center'>
            <Link href="/">
            <Image src="/logo.png" alt="logo" height={30} width={144}></Image>
            
            </Link>

            <Navbarclient session={session}/>

           

        </nav>
      </header>
    </div>
  )
}

export default Navbar
