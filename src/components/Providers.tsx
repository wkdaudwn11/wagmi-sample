'use client';

import React from 'react';
import { http, createConfig, WagmiProvider } from 'wagmi';
import { base, mainnet } from 'wagmi/chains';
// import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type Props = {
  children: React.ReactNode;
};

export const config = createConfig({
  chains: [mainnet, base],
  connectors: [
    // injected(),
    //   walletConnect({ projectId }),
    // metaMask(),
    // safe(),
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
});

const queryClient = new QueryClient();

const Providers = ({ children }: Props) => (
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </WagmiProvider>
);

export default Providers;
