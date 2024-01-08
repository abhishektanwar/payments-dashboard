import React from "react"
import { House } from "phosphor-react"
import options from "../data/sidebarOptions"

const Sidebar = () => {
  return <SidebarItems />
}

const SidebarItems = () => {
  return (
    <div className="w-60 bg-sidebarBG h-screen p-3 space-y-2">
      {
        options.map((option)=>{
          return <div className={`text-md flex items-center space-x-2 text-grayPrimary rounded p-2 hover:bg-hover ${option.active ? 'bg-hover':''}`}>
            {React.createElement(option.icon, { size: 28 })} 
            <span>{option.name}</span>
          </div>
        })
      }
    </div>
  )
}

export default Sidebar;