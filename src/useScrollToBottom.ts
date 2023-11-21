import { useEffect, RefObject } from 'react';

function useScrollToBottom(ref: RefObject<HTMLElement>, dependency: unknown[]) {
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo({ top: ref.current.scrollHeight, behavior: 'smooth' });
    }
  }, [ref, ...dependency]);
}

export default useScrollToBottom;
