import React from "react";
import { CaretDown, Info } from "phosphor-react";
import Filter from "./Filter";

const TableBody = () => {
  return (
    <div className="px-2.5">
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
    </div>
  )
}

const TableRow = () => {
  return (
    <div className="grid grid-cols-4 gap-4 w-full py-3 text-primary text-lg font-light border-b-[1px] border-grayBgSecondary tracking-wide">
      <div className="text-link">#281209</div>
      <div className="">7 July, 2023</div>
      <div className="justify-self-end">₹1,278.23</div>
      <div className="justify-self-end">₹22</div>
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
      <TableBody />
    </div>
  )
}

const TransactionsTable = () => {
  return (
    <div className="bg-white p-3">
      <Filter />
      <Table />
    </div>
  )
}

export default TransactionsTable;