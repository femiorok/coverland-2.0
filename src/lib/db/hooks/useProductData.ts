import { makes } from '@/lib/constants';
import { useQuery } from '@tanstack/react-query';
import { TProductsInColumnArgs, TableRow, fetchFilteredProducts } from '..';

export const useProductData = ({ where, includes }: TProductsInColumnArgs) => {
  return useQuery({
    queryKey: [where, includes],
    queryFn: () => fetchFilteredProducts({ where, includes }),
  });
};
