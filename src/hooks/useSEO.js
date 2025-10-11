import { useEffect } from 'react';

function useSEO(meta) {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.__DASHUND__) {
      window.__DASHUND__.seo.update(meta);
    }
  }, [JSON.stringify(meta)]);
}

export default useSEO;