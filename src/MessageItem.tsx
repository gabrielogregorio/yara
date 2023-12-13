import { useState } from 'react';
import { MarkdownToHtml } from './ReactMarkdown';

const TIME_IN_MS_TO_SHOW_MESSAGE = 500;

export const MessageItem = ({ body, left = false }: { body: string; left?: boolean }) => {
  const [waitMinTime, setWaitMinTime] = useState(true);
  setTimeout(() => {
    setWaitMinTime(false);
  }, TIME_IN_MS_TO_SHOW_MESSAGE);

  const stylesToShowMessages = waitMinTime && left ? 'hidden' : 'flex';
  const stylesToPositionMessage = left ? 'justify-start' : 'justify-end';
  const stylesBackgroundColorByPosition = left
    ? 'bg-black border-2 border-[#02d7f2] text-[#02d7f2]'
    : 'bg-black border-2 border-[#f2e900] text-[#f2e900]';

  return (
    <div
      className={`${stylesToShowMessages} ${stylesToPositionMessage} max-w-[800px] w-full animate-fadeIn transition-all items-center duration-150 cursor-pointer select-text`}>
      <div
        className={`${stylesBackgroundColorByPosition} border px-4 py-4 pr-8 w-[90%] shadow-xl text-base break-words`}>
        <MarkdownToHtml body={body} />
      </div>
    </div>
  );
};
