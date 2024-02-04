"use client";
import Sidebar from "@/components/component/Sidebar";
import { addProductDetails } from "@/components/component/add-product-details";
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <div key="1" className="flex max-h-min bg-gray-200">
        {Sidebar()}
        {addProductDetails()}
      </div>
    </main>
  );
}
