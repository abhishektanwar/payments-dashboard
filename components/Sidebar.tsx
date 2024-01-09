import React from "react"
import { CaretDown, Wallet } from "phosphor-react"
import options from "../data/sidebarOptions"
import dummyProfileImage from '../public/images/dummyProfilePic.png';

const Account = () => {
  return (
    <div className="flex items-center h-11">
      <img src={dummyProfileImage} className="w-11 h-11 rounded" />
      <div className="flex flex-col ml-3 h-full justify-between	">
        <span className="text-base text-white tracking-wide font-light">Nishyan</span>
        <a className="text-sm text-grayPrimary underline underline-offset-2 tracking-wide font-light cursor-pointer">Visit Store</a>
      </div>
      <CaretDown size={24} className="ml-auto" color="#FAFAFA" />
    </div>
  )
}

const SidebarItems = () => {
  return (
    <div className="space-y-1.5">
      {
        options.map((option) => {
          return <div className={`flex items-center cursor-pointer space-x-2 text-grayPrimary rounded px-2 py-2 hover:bg-hover ${option.active ? 'bg-hover' : ''}`}>
            {React.createElement(option.icon, { size: 26 })}
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
    <div className="flex flex-col h-screen w-64 bg-sidebarBG px-4 py-2.5 space-y-5">
      <Account />
      <SidebarItems />
      <div className="flex-grow" />
      <Credits />
    </div>
  )
}

export default Sidebar;