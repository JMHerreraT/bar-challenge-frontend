import ActiveIndexContextProvider from '@/context/active-index-context';
import OrdersContextProvider from '@/context/order-context';
import '@/styles/globals.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import type { AppProps } from 'next/app'

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ActiveIndexContextProvider>
        <OrdersContextProvider>
          <Component {...pageProps} />
        </OrdersContextProvider>
      </ActiveIndexContextProvider>
    </QueryClientProvider>
  );
}
