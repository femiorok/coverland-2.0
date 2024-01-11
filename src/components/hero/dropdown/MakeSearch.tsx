'use client';

import { ChangeEvent, useState } from 'react';
import { TQuery } from './HeroDropdown';
import { TProductData } from '@/lib/db';

export function MakeSearch({
  queryObj,
  makeData,
  isLoading,
}: {
  queryObj: {
    query: TQuery;
    setQuery: React.Dispatch<React.SetStateAction<TQuery>>;
  };
  makeData: string[];
  isLoading: boolean;
}) {
  const [value, setValue] = useState('');
  const { setQuery, query } = queryObj;
  const sortedData = makeData.sort((a, b) => a.localeCompare(b));

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    setQuery((p) => ({ ...p, make: newValue }));
  };

  return (
    <select
      value={value}
      onChange={handleChange}
      disabled={!query.type || !query.year}
      className="w-full h-[58px] text-lg text-[#1E1E1E] font-medium rounded px-4 bg-white border-4 border-transparent focus:border-[#BE1B1B] focus-visible:outline-0 focus-visible:outline-0 focus-visible:border-[#BE1B1B] focus-visible:border-4 visited:border-[#BE1B1B] visited:border-4"
    >
      <option value="" disabled selected>
        3 Make
      </option>
      {isLoading
        ? 'Loading...'
        : sortedData.map((make) => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
    </select>
  );
}
