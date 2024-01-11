'use client';

import { ChangeEvent, useState } from 'react';
import { TProductData } from '@/lib/db';
import { TQuery } from './DropdownSearch';

export function YearSearch({
  queryObj,
  currentSelection,
}: {
  queryObj: {
    query: TQuery;
    setQuery: React.Dispatch<React.SetStateAction<TQuery>>;
  };
  currentSelection?: TProductData;
}) {
  const [value, setValue] = useState('');
  const years = Array.from({ length: 100 }, (_, i) => 1924 + i).reverse();
  const { setQuery } = queryObj;

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    setQuery((p) => ({ ...p, year: newValue }));
  };

  return (
    <select
      value={value}
      onChange={(event) => handleChange(event)}
      disabled={!queryObj.query.type}
      className="w-full h-[58px] text-lg text-[#1E1E1E] font-medium rounded px-4 bg-white border-4 border-transparent focus:border-[#BE1B1B] focus-visible:outline-0 focus-visible:outline-0 focus-visible:border-[#BE1B1B] focus-visible:border-4 visited:border-[#BE1B1B] visited:border-4"
    >
      <option value="" disabled selected>
        2 Year
      </option>
      {years.map((year) => (
        <option key={`year-${year}`} value={year.toString()}>
          {year}
        </option>
      ))}
    </select>
  );
}
