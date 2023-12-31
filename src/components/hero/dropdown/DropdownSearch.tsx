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
import { Router } from 'next/router';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();

  const years = Array.from({ length: 100 }, (_, i) => 1924 + i);
  const queryObj = {
    query,
    setQuery,
  };

  const goToProductPage = (query: TQuery) => {
    if (!query) return null;
    const slugify = (str: string) => {
      if (!str) return null;
      return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
    };

    const convertToUrl = (obj: TQuery) => {
      if (!query) return null;

      const { type, year, make, model } = query;
      let url = `/${slugify(type)}/${slugify(make)}/${slugify(model)}`;
      if (year) {
        url += `?year=${encodeURIComponent(year)}`;
      }
      return url;
    };

    const url = convertToUrl(query);
    router.push(url);
  };

  console.log('obj', queryObj);

  return (
    <div className="flex gap-2 flex-col md:flex-row relative">
      <TypeSearch queryObj={queryObj} />
      <YearSearch queryObj={queryObj} />
      <MakeSearch queryObj={queryObj} />
      <ModelSearch queryObj={queryObj} />
      <Button
        className="h-[60px] text-lg"
        onClick={() => goToProductPage(query)}
      >
        Go
      </Button>
    </div>
  );
}
