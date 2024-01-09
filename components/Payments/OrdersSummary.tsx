import React from 'react';
import StatCard from '../StatCard';

const OrdersSummary = () => {
  return (
    <div className='flex space-x-5'>
      <OrderCount />
      <MoneyReceived />
    </div>
  )
}

const OrderCount = () => {
  return <StatCard title='Online orders' stat='231' />
}

const MoneyReceived = () => {
  return <StatCard title='Money received' stat='₹23,92,312.19' />
}

export default OrdersSummary;