import { CaretDown } from 'phosphor-react';
import React from 'react';
import { useState } from 'react'
import OrdersSummary from './OrdersSummary';
import Transactions from './Transactions';

const Payments = () => {
  return (
    <div className='flex-1 bg-grayBG px-6 py-6'>
      <Overview />
      <Transactions />
    </div>
  )
}

const Overview = () => {
  return (
    <div className='space-y-5'>
      <div className='flex justify-between items-center'>
        <h2 className='text-xl tracking-wide text-textPrimary'>Overview</h2>
        <TimeRangeSelector />
      </div>
      <OrdersSummary />
    </div>
  )
}

const TimeRangeSelector = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setIsOpen(false);
  };

  return (
    <div>
      <button className="relative flex items-center space-x-2 px-2 py-1 rounded border-borderLight border-[1px] text-grayTertiary" onClick={toggleDropdown}>
        <span className='tracking-wide font-light'>Last Month</span>
        <CaretDown size={20} color='#4D4D4D' />
      </button>
      {isOpen && (
        <ul className="absolute">
          <li onClick={() => handleItemClick('Item 1')}>Item 1</li>
          <li onClick={() => handleItemClick('Item 2')}>Item 2</li>
          <li onClick={() => handleItemClick('Item 3')}>Item 3</li>
        </ul>
      )}
    </div>
  );
}

export default Payments;