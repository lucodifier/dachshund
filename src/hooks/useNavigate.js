function useNavigate() {
  if (typeof window === 'undefined' || !window.__DACHSHUND__) {
    return () => console.warn('🐕 Dachshund not initialized');
  }

  return (path) => {
    window.__DACHSHUND__.navigate(path);
  };
}

export default useNavigate;