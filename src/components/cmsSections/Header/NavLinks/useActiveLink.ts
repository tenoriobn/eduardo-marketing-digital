import { useEffect, useState } from 'react';

function useActiveLinks() {
  const [hash, setHash] = useState('');

  useEffect(() => {
    setHash(window.location.hash);
  }, [typeof window !== 'undefined' && window?.location?.hash]);

  return { hash };
}

export default useActiveLinks;
