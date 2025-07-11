import React from 'react'
import Searchform from './Searchform'
import Startupcard from './Startupcard'

 function Hero({searchParams }: {searchParams:{query?:string}}) {

    const query=(searchParams).query || ""

    const posts=[{
      _createdAt:new Date(),
      _id:1,
      author:{_id:1, name:"Kartik"},
      description:"this is a startup idea",
      image:"https://img.freepik.com/free-vector/startup-abstract-concept_335657-3029.jpg?semt=ais_hybrid&w=740",
      category:"",
      title:"Initial startup 1.0",
      views:98,
    }]

  return (
    <div className='pattern'>

        <section className='pink_container text-center pattern '>
            <h1 className='heading '>
                    Pitch your startup <br />
                    Connect with Entrepreneurs
                    </h1>

                    <p className='sub-heading py-0.5'>
                        Submit ideas, vote on pitches , and Get noticed in 
                        Virtual competitons
                    </p>

                    <Searchform query={query}></Searchform>
        </section>

        <section className=' section_container '>
          <p className='font-semibold text-3xl'>
          {query ? `Search results for "${query}" `  : "All startups"}

          </p>

          <ul className="mt-7 card_grid">
            {posts.map((ele,index)=>{
              return <Startupcard post={ele} key={index}  />




            })}

          </ul>

        </section>


      
    </div>
  )
}

export default Hero
