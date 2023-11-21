import { ReactNode } from 'react';

export const ErrorMessage = ({ children }: { children: ReactNode }) => {
  if (!children) {
    return <div />;
  }

  return <div className="px-4 py-2 text-sm text-red-700 bg-red-100 rounded-lg">{children}</div>;
};
