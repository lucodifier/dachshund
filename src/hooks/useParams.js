function useParams() {
  if (typeof window === 'undefined' || !window.__DASHUND__) {
    return {};
  }

  const currentRoute = window.__DASHUND__.router.getCurrentRoute();
  return currentRoute?.params || {};
}

export default useParams;