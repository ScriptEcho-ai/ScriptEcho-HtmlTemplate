export function useEffect(callback, deps = []) {
    let mounted = false;
    const cleanup = callback();

    if (cleanup && typeof cleanup === 'function') {
        return () => {
            cleanup();
        };
    }
}