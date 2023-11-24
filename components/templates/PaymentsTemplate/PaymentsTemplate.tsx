import { OrdersContext } from '@/context/order-context';
import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react'

const PaymentsTemplate = () => {
  const [payments, setPayments] = useState([]);
  const [orderId, setOrderId] = useState(0);
  const { orders, setOrders } = useContext(OrdersContext);
  const [totalAmount, setTotalAmount] = useState(0);
  const [ownerPay, setOwnerPay] = useState("");

  useEffect(() => {
    if (orders.length === 0) {
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/orders/`)
      .then(res => {
        setOrders(res.data);
      })
      .catch(err => {
        console.error(err)
      })
    }
  }, [orders.length, setOrders])

  const handleOrderIdChange = (event: any) => {
    setOrderId(event.target.value);
    orders.forEach((order) => {
      if (order.id == event.target.value) 
        setTotalAmount(order.total_amount)
    })
  };

  const handleOwnerPayChange = (event: any) => {
    setOwnerPay(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/payments/`, {
      friend: ownerPay,
      amount: totalAmount,
      order: orderId
    })
      .then(res => {
        alert('Payment successfuly!')
      })
      .catch(err => {
        console.error(err)
      })
  }


  return (
    <>
<div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
  <div className="px-4 pt-8">
    <p className="text-xl font-medium">Order Summary</p>
    <p className="text-gray-400">Check your items. And select pay whenever you are ready.</p>
    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6  max-h-96 overflow-y-auto">
      {
        orders.map((order) => (
          <div key={order.id} className="flex flex-col rounded-lg bg-white sm:flex-row">
        <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://i.pinimg.com/originals/57/20/6f/57206f1b40e0da418f3e6d2a038edc99.png" alt="" />
        <div className="flex w-full flex-col px-4 py-4">
          <span className="font-semibold">{order.beer.name}</span>
          <span className="float-right text-gray-400">{`Quantity: ${order.quantity}`}</span>
          <span className="float-right text-gray-400">{`Unit price: USD ${order.beer.price}`}</span>
          <p className="text-lg font-bold">{`Total: USD ${order.total_amount}`}</p>
        </div>
      </div>
        ))
        
      }
    </div>
  </div>
  <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
    <p className="text-xl font-medium">Payment Details</p>
    <p className="text-gray-400">Complete your order by providing your payment details.</p>
    <div className="">
      <form onSubmit={handleSubmit}>
        <label htmlFor="ownerPay" className="mt-4 mb-2 block text-sm font-medium">Person who would pay</label>
        <div className="relative">
        <select name="ownerPay" onChange={handleOwnerPayChange} className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
            <option value="Friend one">Friend one</option>
            <option value="Friend one">Friend two</option>
            <option value="Friend one">Friend three</option>
        </select>
        </div>
        <label htmlFor="orderId" className="mt-4 mb-2 block text-sm font-medium">Order to pay</label>
        <div className="relative">
        <select name="orderId" onChange={handleOrderIdChange} value={orderId} className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
            {
              orders.map((order) => (
                <option key={order.id} value={order.id}>{`Order # ${order.id}: (${order.beer.name} | USD ${order.total_amount})`}</option>
              ))
            }
        </select>
        </div>

        {/* <!-- Total --> */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Total</p>
          <p id="totalAmount" className="text-2xl font-semibold text-gray-900">{`USD ${totalAmount}`}</p>
        </div>
      <button type='submit' className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">{`Pay USD ${totalAmount}`}</button>
      </form>
      </div>
      
  </div>
</div>
    </>
  )
}

export default PaymentsTemplate