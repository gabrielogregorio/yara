import { ReactNode } from 'react';

interface IProps {
  onClick: () => void;
  children: ReactNode;
  isDisabled: boolean;
}

export const SuggestionButton = ({ onClick, children, isDisabled }: IProps) => {
  return (
    <button
      disabled={isDisabled}
      onClick={() => onClick()}
      type="button"
      className="px-2 py-2 pr-8 text-sm transition-all duration-150 border-2 bg-black border-[#f2e900] text-[#f2e900] rounded-2xl active:scale-90 hover:scale-105">
      {children}
    </button>
  );
};
