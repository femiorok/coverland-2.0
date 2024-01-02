'use client';

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
import { useProductData } from '@/lib/db/hooks/useProductData';
import { useState } from 'react';

export type TQuery = {
  year: string;
  type: string;
  make: string;
  model: string;
};

export function DropdownSearch() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [query, setQuery] = useState<TQuery>({
    year: '',
    type: '',
    make: '',
    model: '',
  });
  const router = useRouter();
  const data = useProductData({
    where: {
      type: query.type ?? '',
    },
    includes: {
      year_range: query.year ?? '',
    },
  });

  console.log('data', data);

  const queryObj = {
    query,
    setQuery,
  };

  console.log('query', query);

  console.log('data', data?.data);

  const makeData = [
    ...new Set(
      data?.data?.map((d) => d.make).filter((val): val is string => !!val)
    ),
  ];
  console.log('makeData', makeData);

  const modelData = [
    ...new Set(
      data?.data
        ?.filter((car) => query.make === car.make && !!car?.model)
        ?.map((d) => d.model)
        .filter((val): val is string => !!val)
    ),
  ];

  console.log(modelData);

  // const subModelData = data?.data
  //   ?.filter((model) => modelData?.includes(query?.model))
  //   .map((d) => d.submodel);
  // console.log('subModelData', subModelData);

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
      console.log(url);
      if (year) {
        url += `?year=${encodeURIComponent(year)}`;
      }
      return url;
    };

    const url = convertToUrl(query) ?? '';
    router.push(url);
  };

  console.log('obj', queryObj);

  return (
    <div className="flex gap-2 flex-col md:flex-row relative">
      <TypeSearch queryObj={queryObj} />
      <YearSearch queryObj={queryObj} />
      <MakeSearch queryObj={queryObj} makeData={makeData} />
      <ModelSearch queryObj={queryObj} modelData={modelData} />
      <Button
        className="h-[60px] text-lg"
        onClick={() => goToProductPage(query)}
      >
        Go
      </Button>
    </div>
  );
}
