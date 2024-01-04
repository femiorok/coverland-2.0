'use client';

import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { TQuery } from './DropdownSearch';
import { TProductData } from '@/lib/db';

export function ModelSearch({
  queryObj,
  modelData,
}: {
  queryObj: {
    query: TQuery;
    setQuery: Dispatch<SetStateAction<TQuery>>;
  };
  modelData: string[];
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
      className="w-[275px] h-[58px] text-lg rounded-lg  px-2"
    >
      <option value="">Select car model</option>
      {modelData?.map((model) => (
        <option key={`model-${model}`} value={model}>
          {model}
        </option>
      ))}
    </select>
  );
}
