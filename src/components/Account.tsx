'use client';

import React from 'react';
import {
  useAccount,
  useDisconnect,
  useConnect,
  useBalance,
  type Connector,
} from 'wagmi';
import { formatEther } from 'viem';

import Button from '@/components/Button';
import Spinner from '@/components/Spinner';

const Account = () => {
  const { connectors, connect, isPending, error, reset } = useConnect();
  const { disconnect } = useDisconnect();

  const { address, chain, status, isConnected } = useAccount();
  const balance = useBalance({
    address,
  });

  const handleConnect = (connector: Connector) => () => {
    reset();
    connect({ connector });
  };

  return (
    <div className="flex flex-col items-center justify-center w-[640px] gap-4 p-4 font-mono text-sm border">
      <div className="flex flex-col w-full gap-4">
        <div className="flex items-center justify-between w-full">
          <p>Status</p>
          <p>{status}</p>
        </div>
        <div className="flex items-center justify-between w-full">
          <p>Wallet address</p>
          <p>{isConnected ? address : ''}</p>
        </div>
        <div className="flex items-center justify-between w-full">
          <p>Chain id</p>
          <p>{isConnected ? chain?.id : ''}</p>
        </div>
        <div className="flex items-center justify-between w-full">
          <p>Network Name</p>
          <p>{isConnected ? chain?.name : ''}</p>
        </div>
        <div className="flex items-center justify-between w-full">
          <p>Balance</p>
          <p>
            {isConnected ? formatEther(balance?.data?.value || BigInt(0)) : ''}
            &nbsp;ETH
          </p>
        </div>
      </div>

      {isConnected && <Button onClick={() => disconnect()}>Disconnect</Button>}

      {!isConnected &&
        connectors.map((connector) => (
          <>
            <Button
              key={connector.uid}
              isLoading={isPending}
              onClick={handleConnect(connector)}
            >
              {connector.name}
            </Button>
            {error && (
              <div className="flex flex-col gap-2 text-red-500 text-xs">
                <p>{error.name}</p>
                <p>{error.message}</p>
              </div>
            )}
          </>
        ))}
    </div>
  );
};

export default Account;
