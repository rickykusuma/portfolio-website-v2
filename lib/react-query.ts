import { QueryClient } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,
      cacheTime: 60000,
      refetchOnWindowFocus: false,
    },
  },
});

export default queryClient;
