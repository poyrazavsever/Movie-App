import React from 'react';
import ReactIcon from '../Icon'; // Icon componentini import ediyoruz

const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 h-full w-64 bg-neutral-900 text-white p-4 border-r border-neutral-800'>
      {/* Logo */}
      <div className='mb-8'>
        <h2 className='text-3xl font-bold'>Logo</h2>
      </div>

      {/* Menu Section */}
      <div className='mb-8'>
        <h3 className='text-sm font-semibold mb-4 text-neutral-600'>Menu</h3>
        <ul className='space-y-2'>
          <li className='flex items-center'>
            <a href="/" className='hover:text-purple-500 text-white flex items-center'>
              <ReactIcon iconName="IoHomeSharp" iconType="ionic5" iconColor="text-white" classname="mr-3" />
              <span className="text-sm">Home</span>
            </a>
          </li>
          <li className='flex items-center'>
            <a href="/browse" className='hover:text-purple-500 text-white flex items-center'>
              <ReactIcon iconName="BiSearch" iconType="bi" iconColor="text-white" classname="mr-3" />
              <span className="text-sm">Browse</span>
            </a>
          </li>
          <li className='flex items-center'>
            <a href="/watchlist" className='hover:text-purple-500 text-white flex items-center'>
              <ReactIcon iconName="IoEyeSharp" iconType="ionic5" iconColor="text-white" classname="mr-3" />
              <span className="text-sm">Watch List</span>
            </a>
          </li>
          <li className='flex items-center'>
            <a href="/favorites" className='hover:text-purple-500 text-white flex items-center'>
              <ReactIcon iconName="IoHeartSharp" iconType="ionic5" iconColor="text-white" classname="mr-3" />
              <span className="text-sm">Favorites</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Community Section */}
      <div className='mb-8'>
        <h3 className='text-sm font-semibold mb-4 text-neutral-600'>Community</h3>
        <ul className='space-y-2'>
          <li className='flex items-center'>
            <a href="/community" className='hover:text-purple-500 text-white flex items-center'>
              <ReactIcon iconName="FaUsers" iconType="fa" iconColor="text-white" classname="mr-3" />
              <span className="text-sm">Most Popular</span>
            </a>
          </li>
        </ul>
      </div>

      {/* General Section */}
      <div>
        <h3 className='text-sm font-semibold mb-4 text-neutral-600'>General</h3>
        <ul className='space-y-2'>
          <li className='flex items-center'>
            <a href="/settings" className='hover:text-purple-500 text-white flex items-center'>
              <ReactIcon iconName="CiSettings" iconType="ci" iconColor="text-white" classname="mr-3" />
              <span className="text-sm">Settings</span>
            </a>
          </li>
          <li className='flex items-center'>
            <a href="/logout" className='hover:text-purple-500 text-white flex items-center'>
              <ReactIcon iconName="FiLogOut" iconType="fi" iconColor="text-white" classname="mr-3" />
              <span className="text-sm">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;
