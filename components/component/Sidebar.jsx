'use client';

import { HomeIcon, Package, SettingsIcon, ShoppingCartIcon, UsersIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [isActive, setIsActive] = useState(1);
  return (
    <div className="flex  bg-gray-200">
        <aside className="w-64 bg-gradient-to-b from-white to-gray-100 ">
          <div className="h-16 flex items-center justify-center border-b-2">
            <h2 className="text-2xl font-semibold text-gray-800">
              Admin Panel
            </h2>
          </div>
          <ul>
            <li className={`flex items-center p-6  ${isActive===0? "bg-blue-500 text-white":"hover:bg-gray-100"}`}>
              <Link  className="flex items-center space-x-4" href="#">
                <HomeIcon className={`h-5 w-5 ${isActive===0? "text-white":"text-gray-500"} `} />
                <span className="text-sm font-medium">Dashboard</span>
              </Link>
            </li> 
            <li className={`flex items-center p-6  ${isActive===1? "bg-blue-500 text-white":"hover:bg-gray-100"}`}>
              <Link  className="flex items-center space-x-4" href="#">
                <Package className={`h-5 w-5 ${isActive===1? "text-white":"text-gray-500"} `} />
                <span className="text-sm font-medium">Products</span>
              </Link>
            </li>
            <li className={`flex items-center p-6  ${isActive===2? "bg-blue-500 text-white":"hover:bg-gray-100"}`}>
              <Link className="flex items-center space-x-4" href="#">
                <UsersIcon className={`h-5 w-5 ${isActive===2? "text-white":"text-gray-500"} `} />
                <span className="text-sm font-medium">Users</span>
              </Link>
            </li>
            <li className={`flex items-center p-6  ${isActive===3? "bg-blue-500 text-white":"hover:bg-gray-100"}`}>
              <Link className="flex items-center space-x-4" href="#">
                <ShoppingCartIcon className={`h-5 w-5 ${isActive===3? "text-white":"text-gray-500"} `} />
                <span className="text-sm font-medium">Orders</span>
              </Link>
            </li>
            <li className={`flex items-center p-6  ${isActive===4? "bg-blue-500 text-white":"hover:bg-gray-100"}`}>
              <Link className="flex items-center space-x-4" href="#">
                <SettingsIcon className={`h-5 w-5 ${isActive===4? "text-white":"text-gray-500"} `} />
                <span className="text-sm font-medium">Settings</span>
              </Link>
            </li>
          </ul>
        </aside>
      </div>
  );
}