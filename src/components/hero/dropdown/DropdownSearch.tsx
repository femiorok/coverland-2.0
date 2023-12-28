'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

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
import { YearSearch } from './YearSearch';
import { TypeSearch } from './TypeSearch';
import { MakeSearch } from './MakeSearch';
import { ModelSearch } from './ModelSearch';

export type TQuery = {
  year?: string;
  type?: string;
  make?: string;
  model?: string;
};

export function DropdownSearch() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [query, setQuery] = React.useState<TQuery>({});

  const years = Array.from({ length: 100 }, (_, i) => 1924 + i);
  const queryObj = {
    query,
    setQuery,
  };

  console.log('obj', queryObj);

  return (
    <div className="flex gap-2">
      <TypeSearch />
      <YearSearch queryObj={queryObj} />
      <MakeSearch queryObj={queryObj} />
      <ModelSearch queryObj={queryObj} />
      <Button className="h-[60px] text-lg">Go</Button>
    </div>
  );
}
