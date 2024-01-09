import { CaretDown, ChatCenteredDots, MagnifyingGlass, Question } from 'phosphor-react';
import React from 'react';
import { useState } from 'react';
import Navbar from './Navbar';
import Payments from './Payments/Payments';

const TransactionsDashboard = () => {
  return <div className='flex flex-col h-screen grow overflow-y-auto'>
    <Navbar />
    <Payments />
  </div>
}



export default TransactionsDashboard;