import React from 'react'
// import Form from 'next/form'
import Searchreset from './Searchreset'
import {Search} from 'lucide-react'

function Searchform({query}:{query?:string}) {

  return (
    <div>
      <form action="/"  className='search-form' >
        <input type="text" placeholder='Search startups' name="query" className='search-input' defaultValue={query ?? ""}  />

        <div className='flex gap-2'>
            {query && (
                <Searchreset></Searchreset>
            )}

            <button type="submit" className='search-btn text-white'>
                <Search className='size-5'></Search>
            </button>
        </div>
      </form>
    </div>
  )
}

export default Searchform
