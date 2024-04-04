'use client';

import { useConnect, useAccount, useDisconnect } from 'wagmi';

const Home = () => {
  const { connectors, connect } = useConnect();
  const { address, status } = useAccount();
  const { disconnect } = useDisconnect();

  if (status === 'connecting' || status === 'reconnecting')
    return <div>loading...</div>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-xl w-full flex-col items-center justify-center gap-4 font-mono text-sm lg:flex">
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
                onClick={() => connect({ connector })}
              >
                {connector.name}
              </button>
            ))}
          </>
        )}
      </div>
    </main>
  );
};

export default Home;
