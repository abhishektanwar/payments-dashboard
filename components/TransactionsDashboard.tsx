import { CaretDown, ChatCenteredDots, MagnifyingGlass, Question } from 'phosphor-react';
import React from 'react';
import { useState } from 'react';
import Navbar from './Navbar';

const TransactionsDashboard = () => {
  return <div className='grow'>
    <Navbar />
    {/* <div className='bg-grayPrimary flex grow px-6 py-4'></div> */}
  </div>
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
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Toggle Dropdown
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li onClick={() => handleItemClick('Item 1')}>Item 1</li>
          <li onClick={() => handleItemClick('Item 2')}>Item 2</li>
          <li onClick={() => handleItemClick('Item 3')}>Item 3</li>
        </ul>
      )}
    </div>
  );
}

export default TransactionsDashboard;