'use client';

import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { TQuery } from './DropdownSearch';
import { TProductData } from '@/lib/db';

export function SubmodelDropdown({
  queryObj,
  submodelData,
  isLoading,
}: {
  queryObj: {
    query: TQuery;
    setQuery: Dispatch<SetStateAction<TQuery>>;
  };
  submodelData: string[];
  isLoading: boolean;
}) {
  const [value, setValue] = useState('');
  const { query, setQuery } = queryObj;

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    setQuery((p) => ({ ...p, submodel: newValue }));
  };

  const isDisabled = !query.make || !query.year || !query.type;

  return (
    <select
      value={value}
      onChange={handleChange}
      disabled={isDisabled}
      className="text-lg rounded-lg  px-2"
    >
      <option value="">Select car model</option>
      {isLoading
        ? 'Loading...'
        : submodelData?.sort()?.map((submodel) => (
            <option key={`model-${submodel}`} value={submodel}>
              {submodel}
            </option>
          ))}
    </select>
  );
}
