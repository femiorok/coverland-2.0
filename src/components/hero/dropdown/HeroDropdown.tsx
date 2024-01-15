'use client';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { Button } from '@/components/ui/button';
import { YearSearch } from './YearSearch';
import { TypeSearch } from './TypeSearch';
import { MakeSearch } from './MakeSearch';
import { ModelSearch } from './ModelSearch';
import { useRouter } from 'next/navigation';
import { useProductData } from '@/lib/db/hooks/useProductData';
import { useEffect, useState } from 'react';
import { SubmodelDropdown } from './SubmodelDropdown';
import {
  TModelFitData,
  TProductData,
  fetchDropdownData,
  fetchModelToDisplay,
} from '@/lib/db';

export type TQuery = {
  year: string;
  type: string;
  make: string;
  model: string;
  submodel: string;
};

export function HeroDropdown() {
  const [displayModel, setDisplayModel] = useState<TModelFitData>();
  const [query, setQuery] = useState<TQuery>({
    year: '',
    type: '',
    make: '',
    model: '',
    submodel: '',
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { data, isLoading } = useProductData({
    where: {
      type: query.type ?? '',
    },
    includes: {
      year_range: query.year ?? '',
    },
  });
  const { year, type, make, model, submodel } = query;

  const carToDisplay = data?.filter(
    (car) =>
      car?.make === make &&
      car?.model === model &&
      car?.year_range?.includes(year)
  )[0];

  useEffect(() => {
    if (!carToDisplay) return;
    const modelFk = carToDisplay.sku.slice(-6);
    console.log('modelFk', modelFk);
    const getData = async () => {
      const data = await fetchModelToDisplay(modelFk);
      console.log('ultimate', data);
      if (data) {
        setDisplayModel(data[0]);
      }
    };
    getData();
  }, [carToDisplay]);
  const queryObj = {
    query,
    setQuery,
  };
  const makeData = [
    ...new Set(data?.map((d) => d.make).filter((val): val is string => !!val)),
  ];

  const subModelData = [
    ...new Set(
      data
        ?.filter((car) => make === car.make && car?.model === model)
        ?.map((d) => d.submodel1)
        .filter((val): val is string => !!val)
    ),
  ];
  const modelData = [
    ...new Set(
      data
        ?.filter((car) => query.make === car.make && !!car?.model)
        ?.map((d) => d.model)
        .filter((val): val is string => !!val)
    ),
  ];

  // const subModelData = data?.data
  //   ?.filter((model) => modelData?.includes(query?.model))
  //   .map((d) => d.submodel);
  // console.log('subModelData', subModelData);

  // const goToProductPage = (query: TQuery) => {
  //   if (!query) return null;
  //   const slugify = (str: string) => {
  //     if (!str) return null;
  //     return str
  //       .toLowerCase()
  //       .trim()
  //       .replace(/[^\w\s-]/g, '')
  //       .replace(/[\s_-]+/g, '-')
  //       .replace(/^-+|-+$/g, '');
  //   };

  //   const convertToUrl = (obj: TQuery) => {
  //     if (!obj) return null; // Check if obj is undefined

  //     const { type, year, make, model } = obj;
  //     let url = `/${slugify(type)}/${slugify(make)}/${slugify(model)}`;
  //     console.log(url);

  //     let isFirstQueryParam = true; // Variable to track the first query parameter

  //     // Function to append query parameters correctly
  //     const appendQueryParam = (paramName: any, paramValue: any) => {
  //       if (paramValue) {
  //         url += isFirstQueryParam ? `?` : `&`;
  //         url += `${paramName}=${encodeURIComponent(paramValue)}`;
  //         isFirstQueryParam = false;
  //       }
  //     };

  //     // Append year_generation and submodel parameters
  //     appendQueryParam('year', displayModel?.year_generation);
  //     appendQueryParam('submodel', slugify(obj.submodel));

  //     return url;
  //   };

  //   const url = convertToUrl(query) ?? '';
  //   router.push(url);
  // };

  const handleSubmitDropdown = async () => {
    setLoading(true);
    const response = await fetchDropdownData(
      displayModel?.generation_default ?? String(displayModel?.fk)
    );
    if (response.data) {
      const { product_url_slug, year_generation, submodel1_slug } =
        response.data[0];
      let url = `${product_url_slug}/${year_generation}`;
      if (submodel1_slug) {
        url += `?submodel=${submodel1_slug}`;
      }
      router.push(url);
    }
  };

  return (
    <div className="flex gap-4 md:gap-2 flex-col md:flex-row relative font-medium">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-2 md:flex-1">
        <TypeSearch queryObj={queryObj} />
        <YearSearch queryObj={queryObj} />
        <MakeSearch
          queryObj={queryObj}
          makeData={makeData}
          isLoading={isLoading}
        />
        <ModelSearch
          queryObj={queryObj}
          modelData={modelData}
          isLoading={isLoading}
        />
        {subModelData.length > 1 && (
          <SubmodelDropdown
            queryObj={queryObj}
            submodelData={subModelData}
            isLoading={isLoading}
          />
        )}
      </div>
      <Button
        className="h-[58px] text-lg rounded-lg border border-[#767676] md:border-[#BE1B1B] bg-[#767676] md:bg-[#BE1B1B]"
        onClick={handleSubmitDropdown}
      >
        {loading ? (
          <AiOutlineLoading3Quarters className="animate-spin" />
        ) : (
          'Go'
        )}
      </Button>
    </div>
  );
}
