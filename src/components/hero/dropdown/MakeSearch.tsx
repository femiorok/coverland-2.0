'use client';

import { ChangeEvent, useState } from 'react';
import { TQuery } from './DropdownSearch';
import { TProductData } from '@/lib/db';

export function MakeSearch({
  queryObj,
  makeData,
}: {
  queryObj: {
    query: TQuery;
    setQuery: React.Dispatch<React.SetStateAction<TQuery>>;
  };
  makeData: string[];
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
      className="w-[275px] h-[58px] text-lg rounded-lg  px-2"
    >
      <option value="">Select car make</option>
      {sortedData.map((make) => (
        <option key={make} value={make}>
          {make}
        </option>
      ))}
    </select>
  );
}
