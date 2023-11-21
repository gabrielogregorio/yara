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
    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 border-blue-500 text-white hover:border-blue-800'
    : 'bg-white border-slate-200 hover:border-slate-400';

  return (
    <div
      className={`${stylesToShowMessages} ${stylesToPositionMessage} max-w-[800px] w-full animate-fadeIn transition-all items-center duration-150 cursor-pointer select-text`}>
      <div
        className={`${stylesBackgroundColorByPosition} border rounded-2xl px-4 py-4 pr-8 w-[90%] shadow-xl text-base break-words`}>
        <MarkdownToHtml body={body} />
      </div>
    </div>
  );
};
