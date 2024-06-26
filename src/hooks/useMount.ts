import { useState, useEffect } from 'react';

const useMount = () => {
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    setIsMount(true);

    return () => {
      setIsMount(false);
    };
  }, []);

  return { isMount };
};

export default useMount;
