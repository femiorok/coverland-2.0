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
      className="text-lg rounded-lg  px-2"
    >
      <option value="" disabled selected>
        Select car make
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
