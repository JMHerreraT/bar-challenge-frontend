import Grid from "@/components/atoms/Grid/Grid";
import BeersGrid from "@/components/organisms/BeersGrid/BeersGrid";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const BeersTemplate = () => {
  const [beers, setBeers] = useState([]);
  const [beersInCart, setBeersInCart] = useState<any>([]);
  const router = useRouter();

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/beers/`)
      .then((res) => {
        setBeers(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleOrder = (beerId: number) => {
    setBeersInCart([
      ...beersInCart,
      {
        quantity: 1,
        beer: beerId,
      },
    ]);
  };

  const placeOrder = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/orders/`, beersInCart)
      .then((res) => {
        alert("Products added succcessfuly!")
        router.push('/orders')
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      {/* <p className="mb-4">
        {beers.length === 0
          ? "There are no beers"
          : `Showing ${beers.length} beers`}
      </p> */}
      {beers.length > 0 ? (
        <div className="flex flex-col content-between">
          <p className="flex-2">Beers for order: {beersInCart.length}</p>
          <BeersGrid beers={beers} setBeersInCart={handleOrder} />
          <div>
            <button
              className="h-full w-full cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
              disabled={beersInCart.length === 0}
              onClick={placeOrder}
            >
              <span className="h-full w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-black rounded-md group-hover:bg-opacity-0">
                Place order
              </span>
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default BeersTemplate;
