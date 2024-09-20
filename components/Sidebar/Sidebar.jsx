import React from 'react'

const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4'>
      {/* Logo */}
      <div className='mb-8'>
        <h2 className='text-3xl font-bold'>Logo</h2>
      </div>

      {/* Menu Section */}
      <div className='mb-8'>
        <h3 className='text-lg font-semibold mb-4'>Menu</h3>
        <ul className='space-y-2'>
          <li className='hover:text-violet-500 cursor-pointer'>Home</li>
          <li className='hover:text-violet-500 cursor-pointer'>Browse</li>
          <li className='hover:text-violet-500 cursor-pointer'>Watch List</li>
          <li className='hover:text-violet-500 cursor-pointer'>Favorites</li>
        </ul>
      </div>

      {/* Community Section */}
      <div className='mb-8'>
        <h3 className='text-lg font-semibold mb-4'>Community</h3>
        <ul className='space-y-2'>
          <li className='hover:text-violet-500 cursor-pointer'>Most Popular</li>
        </ul>
      </div>

      {/* General Section */}
      <div>
        <h3 className='text-lg font-semibold mb-4'>General</h3>
        <ul className='space-y-2'>
          <li className='hover:text-violet-500 cursor-pointer'>Settings</li>
          <li className='hover:text-violet-500 cursor-pointer'>Logout</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
