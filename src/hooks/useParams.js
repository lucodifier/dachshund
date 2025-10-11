function useParams() {
  if (typeof window === 'undefined' || !window.__DACHSHUND__) {
    return {};
  }

  const currentRoute = window.__DACHSHUND__.router.getCurrentRoute();
  return currentRoute?.params || {};
}

export default useParams;