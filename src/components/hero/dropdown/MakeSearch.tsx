'use client';

import * as React from 'react';
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
import { TProductData } from '@/lib/db';
import { makes } from '@/lib/constants';
import { useProductData } from '@/lib/db/hooks/useProductData';

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
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  const { query, setQuery } = queryObj;
  const sortedData = makeData.sort((a, b) => a.localeCompare(b));
  console.log('sortedData', sortedData);

  console.log('query', query);

  const isDisabled = !query.type || !query.year;

  console.log('value', value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild disabled={isDisabled}>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[275px] h-[60px] justify-between"
        >
          {value || 'Select car make'}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[275px] h-60 p-0">
        <Command>
          <CommandInput placeholder="Enter Make" />
          <CommandEmpty>No make found.</CommandEmpty>
          <CommandGroup className="overflow-scroll">
            {makeData.map((make) => (
              <CommandItem
                key={make}
                value={make}
                onSelect={() => {
                  setValue(make);
                  setOpen(false);
                  setQuery((p) => ({
                    ...p,
                    make,
                  }));
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === make ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {make}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
