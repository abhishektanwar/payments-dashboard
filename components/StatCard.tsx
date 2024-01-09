import React from 'react';

interface StatCardProps {
  title: string,
  stat: string
}

const StatCard = ({ title, stat }: StatCardProps) => {
  return (
    <div className='flex flex-col bg-white rounded-md shadow justify-between w-full h-28 p-4'>
      <h4 className='text-grayTertiary font-light'>{title}</h4>
      <span className='tracking-wider text-2xl'>{stat}</span>
    </div>
  )
}

export default StatCard;