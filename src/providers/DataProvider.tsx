import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient();

export default function DataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
