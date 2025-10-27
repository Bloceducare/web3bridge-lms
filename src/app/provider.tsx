"use client";

import { ReactNode, useState } from "react";
import { WagmiProvider, State } from "wagmi";
import { config } from "@/lib/wagmiConfig";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

export function Provider({
  children,
  initialWagmiState,
}: {
  children: ReactNode;
  initialWagmiState?: State;
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            staleTime: 1000 * 120,
          },
        },
      })
  );

  return (
    <WagmiProvider config={config} initialState={initialWagmiState}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
