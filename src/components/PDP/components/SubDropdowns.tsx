'use client';

import { Dispatch, SetStateAction, use, useEffect } from 'react';
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
import { TQuery } from '../DropdownPDP';
import { TProductData, fetchSubmodelsOfModel } from '@/lib/db';
import { makes } from '@/lib/constants';
import { useProductData } from '@/lib/db/hooks/useProductData';
import { useState } from 'react';
import useCarSelection from '@/lib/db/hooks/useCarSelection';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import path from 'path';
import { extractUniqueValues } from '../utils';

export default function SubDropdowns({
  currentSelection,
  modelData,
}: {
  currentSelection: TProductData | undefined;
  modelData: TProductData[];
}) {
  const {
    selectedYear,
    setSelectedYear,
    selectedMake,
    setSelectedMake,
    selectedModel,
    setSelectedModel,
    filteredMakes,
    filteredModels,
    subModelOptions,
    setSubModelOptions,
    secondSubmodelOptions,
    setSecondSubmodelOptions,
    selectedSubmodel,
    setSelectedSubmodel,
    selectedSecondSubmodel,
    setSelectedSecondSubmodel,
  } = useCarSelection();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pathSegments = pathname?.split('/');
  const year = searchParams?.get('year');
  const make = searchParams?.get('make');
  const model = searchParams?.get('model');
  const submodel = searchParams?.get('submodel');

  console.log(searchParams);

  const carSelection = {
    selectedYear,
    selectedMake,
    selectedModel,
    selectedSubmodel,
    selectedSecondSubmodel,
  };

  console.log(carSelection);
  console.log(currentSelection);

  const setSearchParams = () => {
    const { selectedYear, selectedSubmodel, selectedSecondSubmodel } =
      carSelection;
    const params = new URLSearchParams();

    if (selectedYear) {
      params.append('year', selectedYear.toString().toLowerCase());
    }
    if (selectedSubmodel) {
      params.append('submodel', selectedSubmodel.toLowerCase());
    }

    if (selectedSecondSubmodel) {
      params.append('second_submodel', selectedSecondSubmodel.toLowerCase());
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  console.log(pathname);

  const isDisabled = !year || !make || !model;

  return (
    <>
      <YearSearch setYear={setSelectedYear} modelData={modelData} />

      <GenerationSearch
        modelData={modelData}
        selectedYear={selectedYear}
        setSelectedSubmodel={setSelectedSubmodel}
      />
      <GenerationSearch2
        modelData={modelData}
        selectedYear={selectedYear}
        setSelectedSubmodel={setSelectedSecondSubmodel}
      />

      <Button className="h-[60px] text-lg" onClick={setSearchParams}>
        Go
      </Button>
    </>
  );
}

function GenerationSearch({
  setSelectedSubmodel,
  modelData,
  selectedYear,
}: {
  modelData: TProductData[];
  setSelectedSubmodel: Dispatch<SetStateAction<string | null>>;
  selectedYear: string | null;
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const submodelOptions =
    selectedYear &&
    modelData.filter(
      (car) =>
        (car.generation_start as number) <= parseInt(selectedYear) &&
        (car.generation_end as number) >= parseInt(selectedYear)
    );

  const { uniqueSubmodel1, uniqueSubmodel2 } = extractUniqueValues(
    submodelOptions as TProductData[]
  );

  console.log(uniqueSubmodel1);

  if (!uniqueSubmodel1.length) return null;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full h-[60px] justify-between"
        >
          {value ? value : 'Select car generation'}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] h-[300px] p-0 text-xl">
        <Command>
          <CommandInput placeholder="Enter Generation" />
          <CommandEmpty>No submodel found.</CommandEmpty>
          <CommandGroup className="overflow-scroll">
            {uniqueSubmodel1.map((sub) => (
              <CommandItem
                key={`generation-${sub}`}
                value={sub}
                onSelect={() => {
                  setValue(sub);
                  setOpen(false);
                  setSelectedSubmodel(sub);
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === sub ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {sub}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

function GenerationSearch2({
  setSelectedSubmodel,
  modelData,
  selectedYear,
}: {
  modelData: TProductData[];
  setSelectedSubmodel: Dispatch<SetStateAction<string | null>>;
  selectedYear: string | null;
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const submodelOptions =
    selectedYear &&
    modelData.filter(
      (car) =>
        (car.generation_start as number) <= parseInt(selectedYear) &&
        (car.generation_end as number) >= parseInt(selectedYear)
    );

  const { uniqueSubmodel1, uniqueSubmodel2 } = extractUniqueValues(
    submodelOptions as TProductData[]
  );

  console.log(uniqueSubmodel1);

  if (!uniqueSubmodel2.length) return null;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full h-[60px] justify-between"
        >
          {value ? value : 'Select car generation'}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] h-[300px] p-0 text-xl">
        <Command>
          <CommandInput placeholder="Enter Generation" />
          <CommandEmpty>No submodel found.</CommandEmpty>
          <CommandGroup className="overflow-scroll">
            {uniqueSubmodel2.map((sub) => (
              <CommandItem
                key={`generation-${sub}`}
                value={sub}
                onSelect={() => {
                  setValue(sub);
                  setOpen(false);
                  setSelectedSubmodel(sub);
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === sub ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {sub}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

function YearSearch({
  setYear,
  modelData,
}: {
  setYear: Dispatch<SetStateAction<string | null>>;
  modelData: TProductData[];
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const { yearsOptions } = extractUniqueValues(modelData);
  console.log(yearsOptions);

  console.log(extractUniqueValues(modelData));

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full h-[60px] justify-between"
        >
          {value ? value.toString() : 'Select car year'}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] h-[300px] p-0 text-xl">
        <Command>
          <CommandInput placeholder="Enter Year" />
          <CommandEmpty>No year found.</CommandEmpty>
          <CommandGroup className="overflow-scroll">
            {yearsOptions.reverse().map((year) => (
              <CommandItem
                key={`year-${year}`}
                value={year.toString()}
                onSelect={() => {
                  setValue(`${year}`);
                  setOpen(false);
                  setYear(`${year}`);
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
