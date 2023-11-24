import React from "react";
import { BeerModel } from "@/models/BeerModel";
import Link from "next/link";
import Image from "next/image";

const BeersGrid = ({
  beers,
  setBeersInCart,
}: {
  beers: BeerModel[];
  setBeersInCart: any;
}) => {
  return (
    <section
      id="Projects"
      className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 flex-1"
    >
      {beers.map((beer) => (
        <div
          key={beer.id}
          className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
        >
          <Link href={`#`}>
            <Image
              src="https://i.pinimg.com/originals/57/20/6f/57206f1b40e0da418f3e6d2a038edc99.png"
              alt="Product"
              width={288}
              height={320}
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">Beer</span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                {beer.name}
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">{`USD ${beer.price}`}</p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">{`USD ${
                    beer.price * 2
                  }`}</p>
                </del>
                <div
                  className="ml-auto"
                  onClick={() => setBeersInCart(beer.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
  // return (
  //   <>
  //     {
  //       beers && beers.map((beer: BeerModel, index) => (
  //         <Grid.Item key={beer.id} className="animate-fadeIn">
  //         <Link className="relative inline-block h-full w-full" href={`/beer/${beer.id}`}>
  //         <GridTileImage
  //             alt={beer.name}
  //             label={{
  //               title: beer.name,
  //               amount: beer.price.toString(),
  //               currencyCode: 'USD'
  //             }}
  //             src={'https://i.pinimg.com/originals/57/20/6f/57206f1b40e0da418f3e6d2a038edc99.png'}
  //             fill
  //             sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
  //           />
  //         </Link>
  //         </Grid.Item>
  //       ))
  //     /* <AdminTable
  //       headers={[
  //         {
  //           name: 'Nombre'
  //         },
  //         {
  //           name: 'Precio'
  //         },
  //         {
  //           name: 'Fecha de creacion'
  //         },
  //         {
  //           name: 'Acciones'
  //         }
  //       ]}
  //     >
  //       {
  //         beers && beers.map((beer: BeerModel, index) => (
  //           <tr key={`${beer.name}_${index}`} className='border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
  //             <td className='h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0'>
  //               {beer.name}
  //             </td>
  //             <td className='h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0'>
  //                 {beer.price}
  //             </td>
  //             <td className='h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0'>
  //                 {beer.created_at}
  //             </td>
  //             <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
  //               <button
  //                 className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-2 py-1 bg-transparent text-black hover:bg-gray-200 active:bg-gray-300 rounded"
  //                 type="button"
  //                 onClick={() => handleEdit(beer.id)}
  //               >
  //               <BiPencil/>Editar
  //             </button>
  //           </td>
  //           <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
  //               <button
  //                 className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-2 py-1 bg-transparent text-black hover:bg-gray-200 active:bg-gray-300 rounded"
  //                 type="button"
  //                 onClick={() => handleDelete(beer.id)}
  //               >
  //               <BiTrash/>Eliminar
  //             </button>
  //           </td>
  //           </tr>
  //         ))
  //       }
  //     </AdminTable> */}
  //   </>
  // )
};

export default BeersGrid;
