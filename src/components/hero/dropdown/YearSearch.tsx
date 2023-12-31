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
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  const years = Array.from({ length: 100 }, (_, i) => 1924 + i).reverse();
  const { query, setQuery } = queryObj;

  const isDisabled = !query.type && !currentSelection;
  console.log(currentSelection, query, isDisabled);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild disabled={isDisabled}>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[275px] h-[60px] justify-between"
        >
          {value ? value.toString() : 'Select car year'}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[275px] h-[300px] p-0 text-xl relative">
        <Command>
          <CommandInput placeholder="Enter Year" />
          <CommandEmpty>No year found.</CommandEmpty>
          <CommandGroup className="overflow-scroll">
            {years.map((year) => (
              <CommandItem
                key={`year-${year}`}
                value={year.toString()}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
                  setQuery((p) => ({ ...p, year: currentValue }));
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === year.toString() ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {year.toString()}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
