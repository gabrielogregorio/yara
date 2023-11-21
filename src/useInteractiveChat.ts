import { useState } from 'react';
import { useFetchAsk } from './useFetchAsk';
import { generateId } from './utils';

const TIME_IN_MS_TO_SHOW_MESSAGE = 600;

interface IMessageType {
  left?: boolean;
  body: string;
  id: string;
}

export const useInteractiveChat = () => {
  const [messages, setMessages] = useState<IMessageType[]>([]);
  const [causeFocusMessageDelayed, setCauseFocusMessageDelayed] = useState(0);
  const { isLoading, error, fetchAsk } = useFetchAsk();

  const makeAsk = (userAsk: string) => {
    setMessages((prevMessageList) => [...prevMessageList, { left: false, body: userAsk, id: generateId() }]);

    fetchAsk(userAsk)
      .then((answer) => {
        setTimeout(() => {
          setCauseFocusMessageDelayed((prevCounter) => prevCounter + 1);
        }, TIME_IN_MS_TO_SHOW_MESSAGE);

        setMessages((prevMessageList) => [...prevMessageList, { body: answer, left: true, id: generateId() }]);
      })
      .catch(() => {
        //
      });
  };

  return { messages, makeAsk, error, causeFocusMessageDelayed, isLoading };
};
