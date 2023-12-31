'use client';

import { Check, ChevronDown, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { TQuery } from './DropdownSearch';
import { useEffect, useState } from 'react';
import { TProductData, fetchModelsOfMake } from '@/lib/db';
import { useProductData } from '@/lib/db/hooks/useProductData';

export function ModelSearch({
  queryObj,
  currentSelection,
  setSelectedModel,
}: {
  queryObj: {
    query: TQuery;
    setQuery: React.Dispatch<React.SetStateAction<TQuery>>;
  };
  currentSelection?: TProductData;
  setSelectedModel?: React.Dispatch<React.SetStateAction<TProductData>>;
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const data = useProductData({
    table: 'Models',
    column: '*',
    filterBy: 'make',
    filterValue: queryObj.query.make,
  });
  console.log('data', data);

  const { query, setQuery } = queryObj;
  const isDisabled = !query.make || !query.year || !query.type;

  console.log('query', query);

  const years = Array.from({ length: 100 }, (_, i) => 1924 + i);
  const modelData = data?.data?.sort() as any;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild disabled={isDisabled}>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[275px] h-[60px] justify-between"
        >
          {value ? value : 'Select car model'}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[275px] h-60 overflow-scroll p-0">
        <Command>
          <CommandInput placeholder="Enter model" />
          <CommandEmpty>No model found.</CommandEmpty>
          <CommandGroup>
            {modelData?.map((info: any) => (
              <CommandItem
                key={`model-${info.model}`}
                value={info.model}
                onSelect={(currentValue) => {
                  setValue(info.model);
                  setOpen(false);
                  setQuery((p) => ({ ...p, model: info.model }));
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === info.model ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {info.model}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
