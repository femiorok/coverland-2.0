import { createClient } from '@supabase/supabase-js';
import { Database } from './types';
import { TPDPParams } from '@/app/[productType]/[...product]/page';

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

export async function fetchPDPData(model: string) {
  console.log(model);
  const { data, error } = await supabase
    .from('Products-2024')
    .select('*')
    .eq('model', model);
  if (error) {
    console.log(error);
  }
  return data;
}
