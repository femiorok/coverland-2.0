'use client';

import Logo from '@/components/header/Logo';
import { Search, ShoppingCart, User } from 'lucide-react';
import Image from 'next/image';
import Models from '@/data/car_year_make_model_list.json';
import { useState } from 'react';
import Cart from '@/components/header/Cart';

function Header() {
  const [autocomplete, setAutocomplete] = useState(Models);

  const filterModels = (value: any) => {
    console.log(value);
    const filteredModels = Models.filter((model) =>
      model.toLowerCase().includes(value.toLowerCase())
    );
    setAutocomplete(filteredModels);
  };

  return (
    <header className="bg-white flex flex-col items-stretch pt-2.5">
      <section className="flex w-full flex-col items-stretch px-16 max-md:max-w-full max-md:px-5">
        <div className="flex w-full items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
          <Logo />
          <div className="flex w-full overflow-hidden items-center self-center relative min-h-[39px] gap-2.5 my-auto pt-2.5 pb-1 px-5 max-md:max-w-full max-md:flex-wrap">
            <Search />
            <input
              className="relative flex text-lg p-2 bg-gray-100 rounded-2xl leading-6 self-center grow shrink basis-auto my-auto"
              aria-label="What vehicle are you looking for?"
              placeholder="What vehicle are you looking for?"
              onChange={(e) => filterModels(e.target.value)}
            />
          </div>
          <div className="self-center flex gap-3.5 my-auto items-start">
            <div className="items-stretch flex justify-between gap-5">
              <Cart />
              {/* <User size={32} /> */}
            </div>
          </div>
        </div>
        {/* <div className="items-start flex justify-between gap-5 mt-5 pr-14 self-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
          <div
            className="text-zinc-900 text-lg font-bold leading-4 grow whitespace-nowrap self-start"
            aria-label="Car Covers"
          >
            Car Covers
          </div>
          <div
            className="text-zinc-900 text-lg font-bold leading-4 self-start"
            aria-label="SUV Covers"
          >
            SUV Covers
          </div>
          <div
            className="text-zinc-900 text-lg font-bold leading-4 self-start"
            aria-label="Truck Covers"
          >
            Truck Covers
          </div>
        </div> */}
      </section>
      <div className="text-white text-center text-2xl font-bold leading-6 whitespace-nowrap bg-zinc-900 w-full justify-center items-center mt-5 px-16 py-3.5 max-md:max-w-full max-md:px-5">
        FREE SHIPPING ON ORDERS OVER $75
      </div>
    </header>
  );
}
export default Header;
