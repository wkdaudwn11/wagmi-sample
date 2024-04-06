'use client';

import React, { useState } from 'react';
import { useAccount, useSwitchChain } from 'wagmi';

import Button from '@/components/Button';
import Card from '@/components/Card';
import ErrorBox from '@/components/ErrorBox';
import Layout from '@/components/Layout';

const Network = () => {
  const [selectedChainId, setSelectedChainId] = useState(-1);

  const { chains, error, isPending, switchChain } = useSwitchChain();
  const {
    chain: walletChain,
    connector: walletConnector,
    isConnected,
  } = useAccount();

  const handleSwitchClick = (chainId: number) => () => {
    setSelectedChainId(chainId);
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
              {chains.map((chain) => (
                <>
                  <Button
                    key={chain.id}
                    disabled={chain.id === walletChain?.id}
                    isLoading={isPending && chain.id === selectedChainId}
                    isError={!!error && chain.id === selectedChainId}
                    onClick={handleSwitchClick(chain.id)}
                  >
                    Switch {chain.name}
                    {chain.id === walletChain?.id && ' (active)'}
                  </Button>
                  {error && chain.id === selectedChainId && (
                    <ErrorBox>
                      <p>{error.name}</p>
                      <p>{error.message}</p>
                    </ErrorBox>
                  )}
                </>
              ))}
            </div>
          </Card.Row>
        )}
      </Card.Section>
    </Layout>
  );
};

export default Network;
