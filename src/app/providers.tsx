"use client";

import { SnackbarProvider } from "notistack";
import { QueryClient, QueryClientProvider } from "react-query";

import { ReactQueryDevtools } from "react-query/devtools";

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 6000,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
      <QueryClientProvider client={queryClient}>
        {children}
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </SnackbarProvider>
  );
}
