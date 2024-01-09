import React from "react";
import { CaretDown, Info } from "phosphor-react";
import Filter from "./Filter";
import Pagination from "./Pagination";
import transactions, { Transaction } from "../../data/transactions";
import { formatDate, formatRupee } from "../../utils";

const TransactionTableBody = () => {
  return (
    <div className="px-2.5">
      {
        transactions.map((txn, index) => {
          return <TransactionTableRow
            key={index}
            orderId={txn.orderId}
            orderDate={txn.orderDate}
            orderAmount={txn.orderAmount}
            txnFee={txn.txnFee}
          />
        })
      }
    </div>
  )
}

const TransactionTableRow = ({ orderId, orderAmount, orderDate, txnFee }: Transaction) => {
  return (
    <div className="grid grid-cols-4 gap-4 w-full py-3 text-primary text-lg font-light border-b-[1px] border-grayBgSecondary tracking-wide">
      <div className="text-blue">#{orderId}</div>
      <div className="">{formatDate(orderDate)}</div>
      <div className="justify-self-end">{formatRupee(orderAmount)}</div>
      <div className="justify-self-end">{formatRupee(txnFee)}</div>
    </div>
  )
}

const TableHeader = () => {
  return (
    <div className="bg-graySecondary rounded grid grid-cols-4 gap-4 w-full text-grayTertiary px-2.5 py-3 tracking-wide mt-4">
      <div className="">Order ID</div>
      <div className="flex items-center space-x-1">
        <span>Order date</span>
        <CaretDown size={16} weight="fill" />
      </div>
      <div className="justify-self-end">Order amount</div>
      <div className="flex items-center space-x-1 justify-self-end">
        <span>Transaction fees</span>
        <Info size={16} />
      </div>
    </div>
  )
}

const Table = () => {
  return (
    <div>
      <TableHeader />
      <TransactionTableBody />
      <Pagination />
    </div>
  )
}

const TransactionsTable = () => {
  return (
    <div className="bg-white p-3 rounded shadow">
      <Filter />
      <Table />
    </div>
  )
}

export default TransactionsTable;