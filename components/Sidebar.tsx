import React from "react"
import { CaretDown, Wallet } from "phosphor-react"
import options from "../data/sidebarOptions"

const Account = () => {
  return (
    <div className="flex items-center h-14">
      <img className="w-14 h-14 rounded" />
      <div className="flex flex-col ml-3 h-full justify-between	">
        <span className="text-lg text-white tracking-wide font-light">Nishayan</span>
        <a className="text-sm text-grayPrimary underline underline-offset-2 tracking-wide font-light cursor-pointer">Visit Store</a>
      </div>
      <CaretDown size={28} className="ml-auto" color="#FAFAFA" />
    </div>
  )
}

const SidebarItems = () => {
  return (
    <div className="space-y-2">
      {
        options.map((option) => {
          return <div className={`text-md flex items-center space-x-3 text-grayPrimary rounded px-4 py-2 hover:bg-hover ${option.active ? 'bg-hover' : ''}`}>
            {React.createElement(option.icon, { size: 28 })}
            <span className="tracking-wide">{option.name}</span>
          </div>
        })
      }
    </div>
  )
}

const Credits = () => {
  return (
    <div className="flex items-center space-x-3 tracking-wider rounded-md px-4 py-2 mt-auto" style={{ backgroundColor: '#363C53' }}>
      <div style={{ backgroundColor: '#4A5064' }} className="p-1.5 rounded-md">
        <Wallet size={28} weight="light" color="white" />
      </div>
      <div className="flex flex-col">
        <span style={{ color: "#D7D8DD" }} className="text-sm">Available credits</span>
        <span className="text-white">222.10</span>
      </div>
    </div>
  )
}

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen w-64 bg-sidebarBG p-4 space-y-6">
      <Account />
      <SidebarItems />
      <div className="flex-grow" />
      <Credits />
    </div>
  )
}

export default Sidebar;