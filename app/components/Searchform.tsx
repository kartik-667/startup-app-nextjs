import React from 'react'
import Form from 'next/form'
import Searchreset from './Searchreset'

function Searchform() {
    const query="test"

  return (
    <div>
      <Form action="/" scroll={false} className='search-form' >
        <input type="text" placeholder='Search startups' name="query" className='search-input' value={query} />

        <div className='flex gap-2'>
            {query && (
                <Searchreset></Searchreset>
            )}

            <button type="submit" className='search-btn text-white'>S</button>
        </div>
      </Form>
    </div>
  )
}

export default Searchform
