import React from 'react';
import TransactionsTable from './TransactionsTable';

const Transactions = () => {
  return (
    <div>
      <h2 className='text-xl tracking-wide text-textPrimary'>Transactions | This Month</h2>
      <TransactionsTable />
    </div>
  )
}

export default Transactions;