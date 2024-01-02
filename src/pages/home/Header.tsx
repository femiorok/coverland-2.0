'use client';

import Logo from '@/components/header/Logo';
import { Search, ShoppingCart, User } from 'lucide-react';
import Image from 'next/image';
import Models from '@/data/car_year_make_model_list.json';
import { useState } from 'react';
import Cart from '@/components/header/Cart';
import {
  Hits,
  InstantSearch,
  SearchBox,
  useInstantSearch,
  useSearchBox,
} from 'react-instantsearch';
import { useHits } from 'react-instantsearch';
import algoliasearch from 'algoliasearch';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

function Header() {
  const [showHits, setShowHits] = useState(false);
  return (
    <header className="bg-white flex flex-col items-stretch pt-2.5">
      <section className="flex w-full flex-col items-stretch px-16 max-md:max-w-full max-md:px-5">
        <div className="flex w-full items-center justify-between max-md:max-w-full max-md:flex-wrap">
          <Logo />
          <div className="flex gap-5 md:order-last items-center">
            <Cart />
            {/* <User size={32} /> */}
          </div>
          <div className="flex w-full items-center self-center relative min-h-[39px] gap-2.5 pt-2.5 pb-1 px-5 max-md:max-w-full max-md:flex-wrap">
            <AlgoliaWrapper>
              <AlgoliaSearchBox setShowHits={setShowHits} />
              <NoResultsBoundary showHits={showHits}>
                <Hits
                  classNames={{
                    root: 'w-[300px] h-[300px] bg-gray-100 flex-col z-50 absolute top-14 text-center overflow-y-scroll rounded',
                  }}
                  hitComponent={({ hit }) => <CustomHits hit={hit} />}
                />
              </NoResultsBoundary>
            </AlgoliaWrapper>
            {/* <input
              className="relative flex text-lg p-2 bg-gray-100 rounded-2xl leading-6 self-center grow shrink basis-auto my-auto"
              aria-label="What vehicle are you looking for?"
              placeholder="What vehicle are you looking for?"
              onChange={(e) => filterModels(e.target.value)}
            /> */}
          </div>
        </div>
        {/* <div className="items-start flex justify-between gap-5 mt-5 pr-14 self-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
          <div
            className="text-zinc-900 text-lg font-bold leading-4 grow whitespace-nowrap self-start"
            aria-label="Car Covers"
          >
            Car Covers
          </div>
          <div
            className="text-zinc-900 text-lg font-bold leading-4 self-start"
            aria-label="SUV Covers"
          >
            SUV Covers
          </div>
          <div
            className="text-zinc-900 text-lg font-bold leading-4 self-start"
            aria-label="Truck Covers"
          >
            Truck Covers
          </div>
        </div> */}
      </section>
      <div className="text-white text-center w-full  font-bold leading-6 bg-zinc-900 justify-center items-center mt-5 py-3.5 ">
        FREE SHIPPING ON ORDERS OVER $75
      </div>
    </header>
  );
}

export default Header;

const CustomHits = ({ hit }) => {
  const { refine } = useSearchBox();
  const { hits } = useHits();

  const hitsSkus = hits.map((hit) => hit.model).slice(1, hits.length - 1);
  if (hitsSkus.includes(hit.model)) return null;

  return (
    <div
      className="hover:bg-gray-300 my-2 "
      key={hit.sku}
      onBlur={() => refine('')}
    >
      <Link href={hit.product_url_slug}>
        <p>
          {hit.make} {hit.model}
        </p>
      </Link>
    </div>
  );
};

function NoResultsBoundary({ children, showHits, setShowHits }) {
  const { results, indexUiState } = useInstantSearch();

  console.log(indexUiState);

  // The `__isArtificial` flag makes sure not to display the No Results message
  // when no hits have been returned.
  if (
    (!results.__isArtificial && results.nbHits === 0) ||
    !indexUiState.query ||
    !showHits
  ) {
    return null;
  }

  return children;
}

function AlgoliaWrapper({ children }) {
  const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY
  );

  const customSearchClient = {
    ...searchClient,
    search<TObject>(requests) {
      if (requests.every(({ params }) => !params.query)) {
        return Promise.resolve({
          results: requests.map(() => ({
            hits: [],
            nbHits: 0,
            nbPages: 0,
            page: 0,
            processingTimeMS: 0,
            hitsPerPage: 0,
            exhaustiveNbHits: false,
            query: '',
            params: '',
          })),
        });
      }

      return searchClient.search<TObject>(requests);
    },
  };
  return (
    <InstantSearch
      indexName="coverland_all_products"
      searchClient={customSearchClient}
    >
      {children}
    </InstantSearch>
  );
}

const AlgoliaSearchBox = ({ setShowHits }) => {
  const { refine } = useSearchBox();

  return (
    <SearchBox
      classNames={{
        root: 'w-full flex justify-center',
        form: 'w-full flex justify-center gap-2',
        input:
          'w-full flex justify-center h-10 p-2 bg-gray-100 rounded-2xl leading-6 self-center grow shrink basis-auto my-auto',
        submitIcon: 'w-5 h-5',
        resetIcon: 'hidden',
        loadingIcon: 'hidden',
      }}
      placeholder="What vehicle are you looking for?"
      onFocus={() => setShowHits(true)}
      onBlur={() => setShowHits(false)}
    />
  );
};
