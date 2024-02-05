
import Layout from '@/components/component/Layout'
import orderPage from '@/components/component/order-page'

import React from 'react'

const orders = () => {
  return (
    <Layout>
        {orderPage()}
    </Layout>
  )
}

export default orders