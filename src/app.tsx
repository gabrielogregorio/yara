import { useRef, useState } from 'react';
import { useInteractiveChat } from './useInteractiveChat';
import useScrollToBottom from './useScrollToBottom';
import { useActualWindowSize } from './useActualWindowSize';
import { MessageItem } from './MessageItem';
import { useSuggestionAsks } from './useSuggestionAsks';
import { ErrorMessage } from './errorMessage';
import { AskButton } from './askButton';
import { SuggestionButton } from './suggestionButton';
import { useFetchStartApi } from './useFetchStartApi';

const SIZE_IN_PX_BLOCK_INPUT = 128;

export const App = () => {
  const [textAsk, setTextAsk] = useState('');
  const [hasAnyType, setHasAnyType] = useState(false);
  const [sendAnyMessage, setSendAnyMessage] = useState(false);
  const { messages, makeAsk, causeFocusMessageDelayed, isLoading, error } = useInteractiveChat();
  const { suggestionAsks, finishSuggestion } = useSuggestionAsks();
  const { innerHeight } = useActualWindowSize();
  const connectApi = useFetchStartApi();

  const chatRef = useRef(null);
  useScrollToBottom(chatRef, [messages, causeFocusMessageDelayed]);

  const handleMakeAsk = (ask: string) => {
    if (!ask) {
      return;
    }

    setSendAnyMessage(true);
    makeAsk(ask);
    setTextAsk('');
  };

  const selectSuggestion = (ask: string) => {
    handleMakeAsk(ask);
    finishSuggestion(ask);
  };

  const styleMainText = { height: innerHeight - SIZE_IN_PX_BLOCK_INPUT };
  const styleTextInputs = { height: SIZE_IN_PX_BLOCK_INPUT, maxHeight: SIZE_IN_PX_BLOCK_INPUT };

  const styleShowSuggestion = sendAnyMessage ? 'block animate-fadeIn' : 'hidden';
  return (
    <div className="relative overflow-hidden px-[2%]" style={{ height: innerHeight }}>
      <div
        style={styleMainText}
        className="flex flex-col items-center h-full gap-6 py-4 overflow-y-scroll text-gray-800 scrollbar"
        ref={chatRef}>
        {messages.map((item) => {
          return <MessageItem left={item.left} body={item.body} key={item.id} />;
        })}

        {connectApi.isLoading ? (
          <div className="bg-orange-200 text-orange-800 px-4 py-2 rounded-md mt-8 animate-pulse">
            <div>Conectando com a instância gratuita...</div>
          </div>
        ) : undefined}

        {connectApi.error ? (
          <div className="bg-red-200 text-red-800 px-4 py-2 rounded-md mt-8">
            <div>Algo deu errado, não consegui me comunicar com a instância gratuita...</div>

            <div className="flex items-center justify-center">
              <button type="button" onClick={() => connectApi.fetchAsk()} className="text-center underline">
                Tentar novamente
              </button>
            </div>
          </div>
        ) : undefined}

        {connectApi.success ? (
          <div className="bg-green-200 text-green-800 px-4 py-2 rounded-md mt-8">
            <div>Tudo certo!</div>
          </div>
        ) : undefined}

        <ErrorMessage>{error}</ErrorMessage>
      </div>

      <div
        style={styleTextInputs}
        className="pb-[2rem] w-full overflow-hidden fixed left-0 right-0 bottom-0 backdrop-blur-md bg-white/30 flex items-center justify-center px-[2%]">
        <div className="flex flex-col items-center w-full ">
          <div className="mt-[2rem] max-w-[800px] w-full">
            <div className="flex w-full gap-4 ">
              <input
                className="px-3 py-2 rounded-2xl bg-white border focus:border-slate-950 border-slate-700 shadow-2xl text-slate-700 w-full hover:scale-[102%] transition-all duration-150 "
                type="text"
                onKeyDown={(event) => {
                  if (event.code === 'Enter') {
                    handleMakeAsk(textAsk);
                  }
                }}
                placeholder="Digite algo..."
                value={textAsk}
                onChange={(event) => {
                  setTextAsk(event.target.value);
                  setHasAnyType(true);
                }}
              />

              <AskButton
                disabled={isLoading}
                isLoading={isLoading}
                isVisible={hasAnyType}
                onClick={() => handleMakeAsk(textAsk)}
              />
            </div>
          </div>

          <div className={`grid grid-cols-2 gap-4 mt-[1rem] max-w-[800px] w-full ${styleShowSuggestion}`}>
            {suggestionAsks.map((ask) => {
              return (
                <SuggestionButton key={ask} onClick={() => selectSuggestion(ask)}>
                  {ask}
                </SuggestionButton>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
