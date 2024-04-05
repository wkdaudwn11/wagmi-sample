'use client';

import useMount from '@/hooks/useMount';

import Account from '@/components/Account';
import Spinner from '@/components/Spinner';

const Home = () => {
  const { isMount } = useMount();

  return (
    <main className="flex items-center justify-center w-full min-w-[700px] min-h-[100vh] bg-slate-800">
      {!isMount && <Spinner size={8} />}
      {isMount && <Account />}
    </main>
  );
};

export default Home;
