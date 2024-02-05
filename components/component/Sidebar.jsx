'use client';

import { HomeIcon, Package, SettingsIcon, ShoppingCartIcon, UsersIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from "react";


export default function Sidebar() {
  const currPath=usePathname();
  console.log(currPath)
  return (
    <div className="flex  bg-gray-200">
        <aside className="w-64 bg-gradient-to-b from-white to-gray-100 ">
          <div className="h-16 flex items-center justify-center border-b-2">
            <h2 className="text-2xl font-semibold text-gray-800">
              Admin Panel
            </h2>
          </div>
          <ul>
            <li className={`flex items-center p-6  ${currPath==='/dashboard'? "bg-blue-500 text-white":"hover:bg-gray-100"}`}>
              <Link  className="flex items-center space-x-4" href="/dashboard">
                <HomeIcon className={`h-5 w-5 ${currPath==='/dashboard'? "text-white":"text-gray-500"} `} />
                <span className="text-sm font-medium">Dashboard</span>
              </Link>
            </li> 
            <li className={`flex items-center p-6  ${currPath==='/product'? "bg-blue-500 text-white":"hover:bg-gray-100"}`}>
              <Link  className="flex items-center space-x-4" href="/product">
                <Package className={`h-5 w-5 ${currPath==='/product'? "text-white":"text-gray-500"} `} />
                <span className="text-sm font-medium">Products</span>
              </Link>
            </li>
            <li className={`flex items-center p-6  ${currPath==='/users'? "bg-blue-500 text-white":"hover:bg-gray-100"}`}>
              <Link className="flex items-center space-x-4" href="/users">
                <UsersIcon className={`h-5 w-5 ${currPath==='/users'? "text-white":"text-gray-500"} `} />
                <span className="text-sm font-medium">Users</span>
              </Link>
            </li>
            <li className={`flex items-center p-6  ${currPath==='/orders'? "bg-blue-500 text-white":"hover:bg-gray-100"}`}>
              <Link className="flex items-center space-x-4" href="/orders">
                <ShoppingCartIcon className={`h-5 w-5 ${currPath==='/orders'? "text-white":"text-gray-500"} `} />
                <span className="text-sm font-medium">Orders</span>
              </Link>
            </li>
            <li className={`flex items-center p-6  ${currPath==='/settings'? "bg-blue-500 text-white":"hover:bg-gray-100"}`}>
              <Link className="flex items-center space-x-4" href="/settings">
                <SettingsIcon className={`h-5 w-5 ${currPath==='/settings'? "text-white":"text-gray-500"} `} />
                <span className="text-sm font-medium">Settings</span>
              </Link>
            </li>
          </ul>
        </aside>
      </div>
  );
}