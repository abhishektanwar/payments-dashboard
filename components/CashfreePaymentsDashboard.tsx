import React from "react"
import Sidebar from "./Sidebar"
import TransactionsDashboard from "./TransactionsDashboard"
import Navbar from "./Navbar"

const CashfreePaymentsDashboard = () => {
  return <div className="flex h-screen overflow-hidden">
    <Sidebar />
    <div className="flex flex-col h-screen grow">
      <Navbar />
      <TransactionsDashboard />
    </div>
  </div>
}

export default CashfreePaymentsDashboard