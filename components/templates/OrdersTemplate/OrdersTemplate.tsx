import AdminTable from '@/components/organisms/AdminTable/AdminTable'
import { OrdersContext } from '@/context/order-context';
import { OrderModel } from '@/models/OrderModel';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useContext } from 'react'
import { BiPencil, BiTrash } from 'react-icons/bi'

const OrdersTemplate = () => {
  const { orders, setOrders } = useContext(OrdersContext);
  const router = useRouter();
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/orders/`)
      .then(res => {
        setOrders(res.data);
      })
      .catch(err => {
        console.error(err)
      })
  }, []);

  const handleEdit = (id: number) => {
    axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/orders/${id}/`, {
      name: 'example data'
    })
    .then(res => res.data)
    .catch(err => {
      console.error(err)
    });
  }

  const handleDelete = (id: number) => {
    axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/orders/${id}/`)
    .then(res => {
        setOrders(undefined);
        // I can do a refetch using react-query, in terms of time i am just readding it here.
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/orders/`)
        .then(res => {
          setOrders(res.data);
        })
        .catch(err => {
          console.error(err)
        })
        alert(`Order with id ${id} deleted successfuly!`)
    })
    .catch(err => {
      console.error(err)
    });
  }


  return (
    <div className='w-full h-full'>
      <AdminTable 
        headers={[
          {
            name: 'Cerveza'
          },
          {
            name: 'Cantidad'
          },
          {
            name: 'Monto total'
          }
        ]}
      >
        {
          orders && orders.map((order: OrderModel, index) => (
            <tr key={`${order.total_amount}_${index}`} className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
              <td className='h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0'>
                {order.beer.name}
              </td>
              <td className='h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0'>
                  {order.quantity}
              </td>
              <td className='h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0'>
                  {order.total_amount}
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <button
                  className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-2 py-1 bg-transparent text-black hover:bg-gray-200 active:bg-gray-300 rounded"
                  type="button"
                  onClick={() => handleEdit(order.id)}
                >
                <BiPencil/>Editar
              </button>
            </td>
            <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <button
                  className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-2 py-1 bg-transparent text-black hover:bg-gray-200 active:bg-gray-300 rounded"
                  type="button"
                  onClick={() => handleDelete(order.id)}
                >
                <BiTrash/>Eliminar
              </button>
            </td>
            </tr>
          ))
        }
      </AdminTable>
      <div>
        <span className='bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300'>{`If you are agree with your order, please click on `}<span className='font-extrabold'>{`'proceed to checkout'`}</span></span>
      </div>
      <div>
      <button
              className="mt-5 cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
              onClick={() => router.push('/payments')}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-black rounded-md group-hover:bg-opacity-0">
                Proceed to checkout
              </span>
            </button>
      </div>
    </div>
  )
}

export default OrdersTemplate