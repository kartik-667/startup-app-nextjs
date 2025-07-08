import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'


function page({searchParams}:{searchParams:{query?:string}}) {
  return (
    <div>
      <Navbar></Navbar>
      <Hero searchParams={searchParams}></Hero>
    </div>
  )
}

export default page
