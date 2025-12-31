import React from 'react'

function SearchBar() {
  return (
    <div className='hidden md:flex w-full max-w-lg'>
        <input 
            type="text" 
            className='w-full py-2 px-4 rounded-4xl bg-white/30 outline-none'
            placeholder='Search by name..'
        />
    </div>
  )
}

export default SearchBar