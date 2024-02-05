'use client'

import Layout from "@/components/component/Layout"
import addProductDetails from "@/components/component/addProductDetails"

const products = () => {
  return (
    <Layout>
    {addProductDetails()}
    </Layout>
  )
}

export default products
