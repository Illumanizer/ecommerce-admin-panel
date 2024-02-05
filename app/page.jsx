"use client";
import Layout from "@/components/component/Layout";
import Sidebar from "@/components/component/Sidebar";
import { addProductDetails } from "@/components/component/addProductDetails";
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <div key="1" className="flex max-h-min bg-gray-200">  
        <Layout/>
      </div>
    </main>
  );
}
