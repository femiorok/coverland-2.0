import { createClient } from '@supabase/supabase-js';
import { Database, Tables } from './types';
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

export type TProductsInColumnArgs<T extends TableRow> = {
  table: T;
  column: TableColumn<T> | Array<TableColumn<T>> | '*';
  filterBy?: string;
  filterValue?: string;
};
//If the table you want to access isn't listed in TableRow,
//generate new types in the Supabase dashboard to update
//them and replace the types.ts file in this folder

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

export async function fetchFilteredProducts<T extends TableRow>({
  table,
  column,
  filterBy,
  filterValue,
}: TProductsInColumnArgs<T>) {
  try {
    const query = supabase.from(table).select(column as string);

    if (filterBy && filterValue !== undefined) {
      query.eq(filterBy, filterValue);
    }

    const { data, error } = await query;

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

export async function fetchPDPData(pathParams: TPDPPathParams) {
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
) {
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
