'use client';

import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { TQuery } from './HeroDropdown';

export function TypeSearch({
  queryObj,
}: {
  queryObj: {
    query: TQuery;
    setQuery: Dispatch<SetStateAction<TQuery>>;
  };
}) {
  const [value, setValue] = useState('');
  const { setQuery } = queryObj;

  const types = ['Car Covers', 'SUV Covers', 'Truck Covers'];

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    setQuery((prev) => ({ ...prev, type: newValue }));
  };

  return (
    <select
      value={value}
      onChange={handleChange}
      className="w-full h-[58px] text-lg text-[#1E1E1E] font-medium rounded px-4 bg-white border-4 border-transparent focus:border-[#BE1B1B] focus-visible:outline-0 focus-visible:outline-0 focus-visible:border-[#BE1B1B] focus-visible:border-4 visited:border-[#BE1B1B] visited:border-4"
    >
      <option value="" disabled selected>
        1 Type
      </option>
      {types.map((type, i) => (
        <option key={`type-${type}-${i}`} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
}
