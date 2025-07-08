import React from 'react'
import Searchform from './Searchform'

function Hero() {
  return (
    <div>

        <section className='pink_container text-center '>
            <h1 className='heading '>
                    Pitch your startup <br />
                    Connect with Entrepreneurs
                    </h1>

                    <p className='sub-heading py-0.5'>
                        Submit ideas, vote on pitches , and Get noticed in 
                        Virtual competitons
                    </p>

                    <Searchform></Searchform>
        </section>
      
    </div>
  )
}

export default Hero
