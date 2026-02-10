import { QueryClient } from "@tanstack/react-query"

export const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        // Cache data for 5 minutes
        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000, // Keep in cache for 10 minutes
        retry: 1,
        // Disable automatic refetch on window focus for better performance
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: "stale",
      },
      mutations: {
        retry: 1,
      },
    },
  })
