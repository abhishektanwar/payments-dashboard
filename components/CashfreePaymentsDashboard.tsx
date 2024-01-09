import React from "react"
import Sidebar from "./Sidebar"
import TransactionsDashboard from "./TransactionsDashboard"

const CashfreePaymentsDashboard = () => {
  return <div className="flex h-screen overflow-hidden">
    <Sidebar />
    <TransactionsDashboard />
  </div>
}

export default CashfreePaymentsDashboard