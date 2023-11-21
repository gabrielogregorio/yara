import { ReactNode } from 'react';

interface IProps {
  onClick: () => void;
  children: ReactNode;
}

export const SuggestionButton = ({ onClick, children }: IProps) => {
  return (
    <button
      onClick={() => onClick()}
      type="button"
      className="px-2 py-2 pr-8 text-sm transition-all duration-150 bg-white border border-slate-200 rounded-2xl active:scale-90 hover:bg-slate-200 hover:scale-105">
      {children}
    </button>
  );
};
