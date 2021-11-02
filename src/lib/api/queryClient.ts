import { QueryClient } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 10000,
      staleTime: 1000,
    },
  },
});

export default queryClient;
