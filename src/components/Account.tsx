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
import Card from '@/components/Card';
import Layout from '@/components/Layout';

const Account = () => {
  const { connectors, connect, isPending, isError, error, reset } =
    useConnect();
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
    <Layout>
      <Card.Section>
        <Card.Row>
          <Card.Key>Status</Card.Key>
          <Card.Value>{status}</Card.Value>
        </Card.Row>
        <Card.Row>
          <Card.Key>Wallet address</Card.Key>
          <Card.Value>{isConnected ? address : ''}</Card.Value>
        </Card.Row>
        <Card.Row>
          <Card.Key>Chain id</Card.Key>
          <Card.Value>{isConnected ? chain?.id : ''}</Card.Value>
        </Card.Row>
        <Card.Row>
          <Card.Key>Network Name</Card.Key>
          <Card.Value>{isConnected ? chain?.name : ''}</Card.Value>
        </Card.Row>
        <Card.Row>
          <Card.Key>Balance</Card.Key>
          <Card.Value>
            {isConnected
              ? `${formatEther(balance?.data?.value || BigInt(0))} ETH`
              : ''}
          </Card.Value>
        </Card.Row>
        <Card.Row>
          {isConnected && (
            <Button onClick={() => disconnect()}>Disconnect</Button>
          )}

          {!isConnected &&
            connectors.map((connector) => (
              <>
                <Button
                  key={connector.uid}
                  isError={isError}
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
        </Card.Row>
      </Card.Section>
    </Layout>
  );
};

export default Account;
