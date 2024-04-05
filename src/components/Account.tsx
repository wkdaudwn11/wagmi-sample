'use client';

import React, { useMemo } from 'react';
import { useAccount, useDisconnect, useConnect } from 'wagmi';

const Account = () => {
  const { connectors, connect } = useConnect();
  const { address, status } = useAccount();
  const { disconnect } = useDisconnect();

  const isLoading = useMemo(
    () => status === 'connecting' || status === 'reconnecting',
    [status],
  );

  return (
    <div className="max-w-xl w-full flex-col items-center justify-center gap-4 p-4 font-mono text-sm lg:flex border">
      {isLoading && (
        <div>
          <p>loading...</p>
        </div>
      )}
      {address ? (
        <>
          <p>Wallet address: {address}</p>
          <button
            className="border p-2"
            type="button"
            onClick={() => disconnect()}
          >
            Disconnect
          </button>
        </>
      ) : (
        <>
          {connectors.map((connector) => (
            <button
              className="w-[100px] border p-2"
              type="button"
              key={connector.uid}
              disabled={isLoading}
              onClick={() => connect({ connector })}
            >
              {connector.name}
            </button>
          ))}
        </>
      )}
    </div>
  );
};

export default Account;
