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
import { makes, modelStrings } from '@/lib/constants';
import { useProductData } from '@/lib/db/hooks/useProductData';
import { useState } from 'react';
import useCarSelection from '@/lib/db/hooks/useCarSelection';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import path from 'path';

export default function SubDropdowns({
  currentSelection,
}: {
  currentSelection: TProductData;
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

  const setSearchParams = () => {
    const params = {
      year: carSelection.selectedYear,
      make: carSelection.selectedMake,
      model: carSelection.selectedModel,
      submodel: carSelection.selectedSubmodel,
    } as Record<string, string>;
    const carParams = new URLSearchParams(params);
    router.push(
      `${pathSegments?.[0]}/${
        modelStrings[carSelection.selectedMake as string]
      }?${carParams.toString().toLowerCase()}`
    );
  };

  console.log(pathname);

  const isDisabled = !year || !make || !model;

  return (
    <>
      <YearSearch setYear={setSelectedYear} />
      <MakeSearch filteredMakes={filteredMakes} setMake={setSelectedMake} />
      <ModelSearch
        filteredModels={filteredModels}
        setModel={setSelectedModel}
      />
      {!!filteredModels.length && !!selectedModel && (
        <GenerationSearch
          filteredModels={filteredModels}
          model={selectedModel}
          setSubmodels={setSubModelOptions}
          subModels={subModelOptions}
          setSelectedSubmodel={setSelectedSubmodel}
        />
      )}
      <Button className="h-[60px] text-lg" onClick={setSearchParams}>
        Go
      </Button>
      <Button
        className="h-[60px] text-lg bg-[#BE1B1B] disabled:bg-red-700"
        onClick={setSearchParams}
        disabled={isDisabled}
      >
        Add To Cart
      </Button>
    </>
  );
}

function GenerationSearch({
  filteredModels,
  model,
  setSubmodels,
  subModels,
  setSelectedSubmodel,
}: {
  filteredModels: string[];
  model: string;
  setSubmodels: Dispatch<SetStateAction<TProductData[]>>;
  subModels: TProductData[];
  setSelectedSubmodel: Dispatch<SetStateAction<string | null>>;
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [submodels2, setSubmodels2] = useState<TProductData[]>([]);

  useEffect(() => {
    async function getSubmodels() {
      const data = await fetchSubmodelsOfModel(model);
      if (!data) return;
      if (data.submodels1.length > 0) {
        setSubmodels(data.submodels1);
      }
      if (data.submodels2.length > 0) {
        setSubmodels2(data.submodels2);
      }
    }

    getSubmodels();
  }, [filteredModels, model, setSubmodels]);

  if (!subModels?.length) return null;

  const submodelList = () => {
    const list = new Set<string>();
    subModels.forEach((sub) => {
      if (sub.submodel1) list.add(sub.submodel1);
    });
    return Array.from(list);
  };

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
            {submodelList().map((sub) => (
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

function MakeSearch({
  currentSelection,
  filteredMakes,
  setMake,
}: {
  currentSelection?: TProductData;
  filteredMakes?: string[];
  setMake: Dispatch<SetStateAction<string | null>>;
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const isDisabled = filteredMakes?.length === 0;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild disabled={isDisabled}>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[400px] h-[60px] justify-between"
        >
          {value
            ? makes.find(
                (m) => m.toLocaleUpperCase() === value.toLocaleUpperCase()
              )
            : 'Select car make'}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] h-[300px] p-0">
        <Command>
          <CommandInput placeholder="Enter Make" />
          <CommandEmpty>No make found.</CommandEmpty>
          <CommandGroup className="overflow-scroll">
            {filteredMakes?.map((make) => (
              <CommandItem
                key={make}
                value={make}
                onSelect={() => {
                  setValue(make);
                  setOpen(false);
                  setMake(make);
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

function ModelSearch({
  currentSelection,
  setModel,
  filteredModels,
}: {
  currentSelection?: TProductData;
  setModel: Dispatch<SetStateAction<string | null>>;
  filteredModels: string[];
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const isDisabled = filteredModels?.length === 0;

  const years = Array.from({ length: 100 }, (_, i) => 1924 + i);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild disabled={isDisabled}>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full h-[60px] justify-between"
        >
          {value ? value : 'Select car model'}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] h-[300px] p-0">
        <Command>
          <CommandInput placeholder="Enter model" />
          <CommandEmpty>No model found.</CommandEmpty>
          <CommandGroup className="overflow-scroll">
            {filteredModels.map((model) => (
              <CommandItem
                key={`model-${model}`}
                value={model}
                onSelect={() => {
                  setValue(model);
                  setOpen(false);
                  setModel(model);
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === model ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {model}
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
}: {
  setYear: Dispatch<SetStateAction<string | null>>;
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const years = Array.from({ length: 100 }, (_, i) => 1924 + i).reverse();
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
            {years.map((year) => (
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
