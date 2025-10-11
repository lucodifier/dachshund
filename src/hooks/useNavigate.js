function useNavigate() {
  if (typeof window === 'undefined' || !window.__DASHUND__) {
    return () => console.warn('🐕 Dashund not initialized');
  }

  return (path) => {
    window.__DASHUND__.navigate(path);
  };
}

export default useNavigate;