import React from 'react';
import { CaretDown, ChatCenteredDots, MagnifyingGlass, Question } from 'phosphor-react';

const LeftNavbarSection = () => {
  return (
    <div className='flex space-x-3'>
      <h4 className='text-textPrimary'>Payments</h4>
      <div className='flex space-x-1 items-center text-grayTertiary'>
        <Question size={16} />
        <h6 className='text-sm'>How it works</h6>
      </div>
    </div>
  )
}

const RightNavbarSection = () => {
  return (
    <div className='space-x-2'>
      <button className='rounded-full p-2 bg-grayBgSecondary'>
        <ChatCenteredDots size={20} weight='fill' color='#4D4D4D' />
      </button>
      <button className='rounded-full p-2 bg-grayBgSecondary'>
        <CaretDown size={20} weight='fill' color='#4D4D4D' />
      </button>
    </div>
  )
}

const Search = () => {
  return (
    <div className="flex px-2 py-2 bg-graySecondary rounded-md items-centers w-96 space-x-2">
      <span className='flex items-center'>
        <MagnifyingGlass size={20} weight='bold' color='#808080' />
      </span>
      <input
        className="w-full bg-transparent outline-none appearance-none placeholder:text-grayMuted"
        placeholder="Search features, tutorials, etc."
        type="text"
      />
    </div>
  )
}

const Navbar = () => {
  return <div className='flex w-full px-6 py-2 justify-between items-center h-14 border-b-[1px] border-solid border-borderLight font-light'>
    <LeftNavbarSection />
    <Search />
    <RightNavbarSection />
  </div>
}

export default Navbar;