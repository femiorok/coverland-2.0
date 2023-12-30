'use client';

import * as React from 'react';
import { Check, ChevronDown } from 'lucide-react';

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
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { TQuery } from './DropdownSearch';

export function TypeSearch({
  queryObj,
}: {
  queryObj: {
    query: TQuery;
    setQuery: React.Dispatch<React.SetStateAction<TQuery>>;
  };
}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [query, setQuery] = React.useState({});

  const types = ['Car Covers', 'SUV Covers', 'Truck Covers'];

  const years = Array.from({ length: 100 }, (_, i) => 1924 + i);
  const onFocus = open ? 'ring-4 ring-[#BE1B1B]' : '';
  const { query: queryProp, setQuery: setQueryProp } = queryObj;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="focus">
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`w-[275px] h-[60px] justify-between text-lg rounded ${onFocus}`}
        >
          {value.toLocaleUpperCase() || 'Product Type'}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[275px] text-lg p-0 mt-1">
        <Command>
          <CommandGroup className="text-xl">
            {types.map((type, i) => (
              <CommandItem
                key={`type-${type}-${i}`}
                value={type}
                onSelect={(currentValue) => {
                  setValue(type);
                  setOpen(false);
                  setQueryProp({ type: currentValue });
                }}
                className="text-lg"
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === type ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {type.toLocaleUpperCase()}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
