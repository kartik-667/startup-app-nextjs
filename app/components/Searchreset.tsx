"use client";

import React from 'react'

function Searchreset() {


    function reset(){
        const form=document.querySelector(".search-btn") as HTMLFormElement

        if(form){
            form.reset()
        }
        return

    }

  return (
    <>
    <button type='reset' onClick={reset}  className='search-btn text-white cursor-pointer'>
        X
    </button>
      
    </>
  )
}

export default Searchreset
