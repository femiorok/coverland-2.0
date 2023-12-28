import { useQuery } from '@tanstack/react-query';
import { TProductsInColumnArgs, TableRow, fetchFilteredProducts } from '..';

export const useProductData = <T extends TableRow>({
  table,
  column,
  filterBy,
  filterValue,
}: TProductsInColumnArgs<T>) => {
  return useQuery({
    queryKey: [
      `${table}-${column as string}`,
      table,
      column,
      filterBy,
      filterValue,
    ],
    queryFn: () =>
      fetchFilteredProducts({ table, column, filterBy, filterValue }),
  });
};
