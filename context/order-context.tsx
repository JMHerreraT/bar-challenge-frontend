import {  OrdersContextType, OrdersDefaultState } from '@/constants/orders.constants';
import React, { createContext, useState } from 'react';


export const OrdersContext = createContext<OrdersContextType>(OrdersDefaultState);

const OrdersContextProvider: React.FC<any> = ({ children }: any) => {
  const [orders, setOrders] = useState<any>([]);

  return (
    <OrdersContext.Provider
      value={{
        orders,
        setOrders
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};

export default OrdersContextProvider;
