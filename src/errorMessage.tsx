import { ReactNode } from 'react';

export const ErrorMessage = ({ children }: { children: ReactNode }) => {
  if (!children) {
    return <div />;
  }

  return <div className="px-4 py-2 text-sm text-[#ff1111] border-2 border-[#ff1111]">{children}</div>;
};
