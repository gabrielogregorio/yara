interface IProps {
  onClick: () => void;
  isLoading: boolean;
  isVisible: boolean;
  disabled: boolean;
}

export const AskButton = ({ onClick, isLoading, isVisible, disabled }: IProps) => {
  const styleOnVisible = isVisible ? 'block animate-fadeIn' : 'hidden';
  const styleOnLoading = isLoading ? 'border-[#d9a5b2]' : 'border-slate-950';

  return (
    <button
      disabled={disabled}
      type="button"
      onClick={() => onClick()}
      className={`bg-white px-3 py-2 rounded-2xl min-w-[5rem] flex items-center justify-center border transition-all duration-150 active:scale-90 hover:scale-105 ${styleOnLoading} ${styleOnVisible}`}>
      {isLoading ? <div className="animate-pulse bg-[#d9a5b2] w-4 h-4 rounded-full" /> : 'Enviar'}
    </button>
  );
};
