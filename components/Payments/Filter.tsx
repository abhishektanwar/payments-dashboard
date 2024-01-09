import React from 'react';
import { ArrowsDownUp, DownloadSimple, MagnifyingGlass } from 'phosphor-react';

const Filter = () => {
  return (
    <div className="flex">
      <Search />
      <div className="flex ml-auto space-x-3">
        <SortButton />
        <DownloadButton />
      </div>
    </div>
  )
}

const SortButton = () => {
  return (
    <button className="flex items-center space-x-2 px-2 py-1 rounded border-borderLight border-[1px]">
      <span className='tracking-wide  text-grayTertiary'>Sort</span>
      <ArrowsDownUp size={18} weight="regular" color='#4D4D4D' />
    </button>
  )
}

const DownloadButton = () => {
  return (
    <button className="px-2 py-1 rounded border-borderLight border-[1px]">
      <DownloadSimple size={24} weight="bold" color="#4D4D4D" />
    </button>
  )
}

const Search = () => {
  return (
    <div className="flex px-2 py-2 text-sm border-[1px] border-borderLight w-64 rounded items-centers space-x-2 font-light">
      <span className='flex items-center'>
        <MagnifyingGlass size={18} color='#808080' />
      </span>
      <input
        className="w-full bg-transparent outline-none appearance-none placeholder:text-grayMuted"
        placeholder="Search by Order ID..."
        type="text"
      />
    </div>
  )
}

export default Filter;