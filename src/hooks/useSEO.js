import { useEffect } from 'react';

function useSEO(meta) {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.__DACHSHUND__) {
      window.__DACHSHUND__.seo.update(meta);
    }
  }, [JSON.stringify(meta)]);
}

export default useSEO;