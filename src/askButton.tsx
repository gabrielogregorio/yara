interface IProps {
  onClick: () => void;
  isLoading: boolean;
  isVisible: boolean;
  disabled: boolean;
}

export const AskButton = ({ onClick, isLoading, isVisible, disabled }: IProps) => {
  const styleOnVisible = isVisible ? 'block animate-fadeIn' : 'hidden';
  const styleOnLoading = isLoading ? 'border-[#d9a5b2]' : 'border-[#f2e900]';

  return (
    <button
      disabled={disabled}
      type="button"
      onClick={() => onClick()}
      className={`bg-black text-[#f2e900] px-3 py-2 border-2 min-w-[5rem] flex items-center justify-center transition-all duration-150 active:scale-90 hover:scale-105 ${styleOnLoading} ${styleOnVisible}`}>
      {isLoading ? <div className="animate-pulse bg-[#d9a5b2] w-4 h-4 rounded-full" /> : 'Enviar'}
    </button>
  );
};
