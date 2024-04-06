'use client';

import useMount from '@/hooks/useMount';

import Account from '@/components/Account';
import Network from '@/components/Network';
import Spinner from '@/components/Spinner';

const Home = () => {
  const { isMount } = useMount();

  return (
    <main className="flex items-center justify-center w-full min-w-[700px] min-h-[100vh] bg-slate-800 font-mono">
      {!isMount && <Spinner size={8} />}
      {isMount && (
        <div className="flex flex-col gap-8">
          <Account />
          <Network />
        </div>
      )}
    </main>
  );
};

export default Home;
