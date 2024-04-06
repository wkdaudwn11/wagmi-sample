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
import ErrorBox from '@/components/ErrorBox';
import Layout from '@/components/Layout';

const Account = () => {
  const { connectors, connect, isPending, isError, error } = useConnect();
  const { address, status, isConnected } = useAccount();
  const balance = useBalance({
    address,
  });
  const { disconnect } = useDisconnect();

  const handleConnect = (connector: Connector) => () => {
    connect({ connector });
  };

  return (
    <Layout>
      <Card.Section>
        <Card.Title>Account</Card.Title>
        <Card.Row>
          <Card.Key>Status</Card.Key>
          <Card.Value>{status}</Card.Value>
        </Card.Row>
        <Card.Row>
          <Card.Key>Wallet address</Card.Key>
          <Card.Value>{isConnected ? address : ''}</Card.Value>
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
          <div className="flex flex-col w-full gap-4">
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
                    <ErrorBox>
                      <p>{error.name}</p>
                      <p>{error.message}</p>
                    </ErrorBox>
                  )}
                </>
              ))}
          </div>
        </Card.Row>
      </Card.Section>
    </Layout>
  );
};

export default Account;
