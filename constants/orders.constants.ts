import { Dispatch, SetStateAction } from 'react'

export const OrdersDefaultState: OrdersContextType = {
    orders: [],
    setOrders: (): void => {
        // default state
    }
  };

  export interface OrdersContextType {
    orders: Array<any>;
    setOrders: Dispatch<SetStateAction<string | undefined>>;
  }