import { ActiveIndexContext } from '@/context/active-index-context';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import React, { useContext } from 'react';
// import { Badge } from "@/components/ui/badge"
// import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
// import { CardTitle, CardHeader, Card } from "@/components/ui/card"
import { BiBox, BiHomeAlt, BiBeer, BiShoppingBag, BiCreditCard } from 'react-icons/bi'
type Props = {
  children: React.ReactNode;
}
const inter = Inter({ subsets: ['latin'] })
const LandingTemplate = ({ children }: Props) => {
  const { activeIndex, setActiveIndex } = useContext(ActiveIndexContext);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r lg:block ">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-[60px] items-center border-b px-6">
              <Link className="flex items-center gap-2 font-semibold" href="#">
                <BiBox className="h-6 w-6" />
                <span className="">Bar Challenge</span>
              </Link>
            </div>
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start px-4 text-sm font-medium">
                <Link
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-zinc-900 dark:hover:text-zinc-900 ${activeIndex === '/' ? 'text-zinc-900' : 'text-zinc-500'}`}
                  href="/"
                  onClick={() => setActiveIndex('/')}
                >
                  <BiHomeAlt className="h-4 w-4"/>
                  Home
                </Link>
                <Link
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-zinc-900 dark:hover:text-zinc-900 ${activeIndex === 'beers' ? 'text-zinc-900' : 'text-zinc-500'}`}
                  href="beers"
                  onClick={() => setActiveIndex('beers')}
                >
                  <BiBeer className="h-4 w-4" />
                  Beers
                </Link>
                <Link
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-zinc-900 dark:hover:text-zinc-900 ${activeIndex === 'orders' ? 'text-zinc-900' : 'text-zinc-500'}`}
                  href="orders"
                  onClick={() => setActiveIndex('orders')}
                >
                  <BiShoppingBag className="h-4 w-4" />
                  Orders
                </Link>
                <Link
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-zinc-900 dark:hover:text-zinc-900 ${activeIndex === 'payments' ? 'text-zinc-900' : 'text-zinc-500'}`}
                  href="payments"
                  onClick={() => setActiveIndex('payments')}

                >
                  <BiCreditCard className="h-4 w-4" />
                  Payments
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className='flex flex-row h-full w-full p-4 items-center text-center justify-center'>
          {children}
        </div>
      </div>
    </main>
  );
};

export default LandingTemplate;
