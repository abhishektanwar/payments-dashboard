import React from "react"
import Sidebar from "./Sidebar"
import TransactionsDashboard from "./TransactionsDashboard"

const CashfreePaymentsDashboard = () => {
  return <div className="flex">
    <Sidebar />
    <TransactionsDashboard />
  </div>
}

export default CashfreePaymentsDashboard