'use client';

import React from 'react';
import { useAccount, useSwitchChain } from 'wagmi';

import Button from '@/components/Button';
import Card from '@/components/Card';
import ErrorBox from '@/components/ErrorBox';
import Layout from '@/components/Layout';

const Network = () => {
  const { chains, error, isPending, switchChain } = useSwitchChain();
  const {
    chain: walletChain,
    connector: walletConnector,
    isConnected,
  } = useAccount();

  const handleSwitch = (chainId: number) => () => {
    switchChain({ chainId });
  };

  return (
    <Layout>
      <Card.Section>
        <Card.Title>Network</Card.Title>
        <Card.Row>
          <Card.Key>Wallet</Card.Key>
          <Card.Value>{isConnected ? walletConnector?.name : ''}</Card.Value>
        </Card.Row>
        <Card.Row>
          <Card.Key>Chain id</Card.Key>
          <Card.Value>{isConnected ? walletChain?.id : ''}</Card.Value>
        </Card.Row>
        <Card.Row>
          <Card.Key>Network Name</Card.Key>
          <Card.Value>{isConnected ? walletChain?.name : ''}</Card.Value>
        </Card.Row>
        {isConnected && (
          <Card.Row>
            <div className="flex flex-col w-full gap-4">
              {chains.map(
                (chain) =>
                  chain.id !== walletChain?.id && (
                    <>
                      <Button
                        key={chain.id}
                        disabled={isPending}
                        isLoading={isPending}
                        isError={!!error}
                        onClick={handleSwitch(chain.id)}
                      >
                        Switch to {chain.name}
                      </Button>
                      {error && (
                        <ErrorBox>
                          <p>{error.name}</p>
                          <p>{error.message}</p>
                        </ErrorBox>
                      )}
                    </>
                  ),
              )}
            </div>
          </Card.Row>
        )}
      </Card.Section>
    </Layout>
  );
};

export default Network;
