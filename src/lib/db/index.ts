import { createClient } from '@supabase/supabase-js';
import { Database, Enums, Tables } from './types';
import {
  TPDPPathParams,
  TPDPQueryParams,
} from '@/app/[productType]/[...product]/page';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY ?? '';

console.log(supabaseUrl, supabaseKey);

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export type TProductData = Database['public']['Tables']['Products-2024']['Row'];

export type TTables = keyof Database['public']['Tables'];

export type TableRow = keyof Database['public']['Tables'];

export type TableColumn<T extends TableRow> =
  keyof Database['public']['Tables'][T]['Row'];

export type TProducts20204 = Tables<'Products-2024'>;
export interface TProductsInColumnArgs {
  where?: {
    [key in keyof TProducts20204]?: TProducts20204[key];
  };
  includes?: {
    [key in keyof TProducts20204]?: TProducts20204[key];
  };
}

//If the table you want to access isn't listed in TableRow,
//generate new types in the Supabase dashboard to update
//them and replace the types.ts file in this folder

// Define the type for filters
interface FilterCriterion {
  filterBy: string;
  filterValue: any;
}

// Adjust the type definition
export const fetchModelsOfMake = async (make: string) => {
  let { data: Models, error } = await supabase
    .from('Models')
    .select('model')
    .eq('make', make);
  console.log('ran');

  console.log(Models);

  if (error) {
    console.log(error);
  }
  return Models;
};

export async function fetchSubmodelsOfModel(model: string) {
  let { data, error } = await supabase
    .from('Products-2024')
    .select('*')
    .eq('model', model);

  const submodels1 = data?.filter((row) => !!row.submodel1) ?? [];
  const submodels2 = data?.filter((row) => !!row.submodel2) ?? [];

  if (error) {
    console.log(error);
  }
  return {
    submodels1,
    submodels2,
  };
}

export async function fetchFilteredProducts({
  where,
  includes,
}: TProductsInColumnArgs) {
  console.log(where);
  if (!where?.type || !includes?.year_range) return [];
  try {
    console.log('fetching products');
    let query = supabase.from('Products-2024').select();

    if (where) {
      Object.entries(where).forEach(([key, value]) => {
        console.log('updating query');

        if (key && value) query = query.eq(key, value);
      });
    }

    if (includes) {
      Object.entries(includes).forEach(([key, value]) => {
        console.log('updating query');

        if (key && typeof value === 'string')
          query = query.textSearch(key, value);
      });
    }

    const { data, error } = await query;

    if (error) {
      throw error;
    }
    const uniqueModels = data
      .map((item) => {
        return {
          model: item.model,
          make: item.make,
          submodel1: item.submodel1,
          submodel2: item.submodel2,
          year_range: item.year_range,
          slug: item.product_url_slug,
        };
      })
      .filter(
        (value, index, self) => self.indexOf(value) === index && !!value.model
      );

    console.log('models', uniqueModels, data.length);

    return uniqueModels.length ? uniqueModels : [];
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

export async function fetchPDPData(
  pathParams: TPDPPathParams
): Promise<TProductData[] | null> {
  const modelFromPath = pathParams?.product[1];
  const makeFromPath = pathParams?.product[0];

  const { data, error } = await supabase
    .from('Products-2024')
    .select('*')
    .eq('make_slug', makeFromPath)
    .eq('model_slug', modelFromPath);

  console.log('fetching with path params', data?.length, modelFromPath);
  if (error) {
    console.log(error);
  }
  return data;
}

export async function fetchPDPDataWithQuery(
  queryParams: TPDPQueryParams,
  params: TPDPPathParams
): Promise<TProductData[] | null> {
  if (!queryParams?.year) return null;

  const make = params?.product[0];
  const model = params?.product[1];
  const year = queryParams?.year;
  const submodel1 = queryParams?.submodel;
  const submodel2 = queryParams?.second_submodel;

  let fetch = supabase
    .from('Products-2024')
    .select()
    .eq('model_slug', model)
    .eq('make_slug', make)
    .textSearch('year_range', year);

  if (submodel1) {
    console.log('submodel1', submodel1);
    fetch = fetch.textSearch('submodel1_slug', submodel1);
  }

  if (submodel2) {
    fetch = fetch.textSearch('submodel2_slug', submodel2);
  }

  const { data, error } = await fetch;

  console.log('fetching with query params', data?.length);
  if (error) {
    console.log(error);
  }
  return data;
}
