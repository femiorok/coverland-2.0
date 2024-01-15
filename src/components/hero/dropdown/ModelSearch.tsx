'use client';

import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { TQuery } from './HeroDropdown';
import { TProductData } from '@/lib/db';

export function ModelSearch({
  queryObj,
  modelData,
  isLoading,
}: {
  queryObj: {
    query: TQuery;
    setQuery: Dispatch<SetStateAction<TQuery>>;
  };
  modelData: string[];
  isLoading: boolean;
}) {
  const [value, setValue] = useState('');
  const { query, setQuery } = queryObj;

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    setQuery((p) => ({ ...p, model: newValue }));
  };

  const isDisabled = !query.make || !query.year || !query.type;

  return (
    <select
      value={value}
      onChange={handleChange}
      disabled={isDisabled}
      className="w-full h-[58px] text-lg text-[#1E1E1E] font-medium rounded px-4 bg-white border-4 border-transparent focus:border-[#BE1B1B] focus-visible:outline-0 focus-visible:outline-0 focus-visible:border-[#BE1B1B] focus-visible:border-4 visited:border-[#BE1B1B] visited:border-4"
    >
      <option value="" disabled selected>
        4 Model
      </option>
      {isLoading
        ? 'Loading...'
        : modelData?.sort()?.map((model) => (
            <option key={`model-${model}`} value={model}>
              {model}
            </option>
          ))}
    </select>
  );
}
