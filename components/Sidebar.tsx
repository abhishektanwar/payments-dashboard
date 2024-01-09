import React from "react"
import { CaretDown } from "phosphor-react"
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

const Sidebar = () => {
  return <div className="h-screen w-64 bg-sidebarBG p-4 space-y-6">
    <Account />
    <SidebarItems />
  </div>
}

export default Sidebar;