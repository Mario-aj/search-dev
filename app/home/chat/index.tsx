import * as React from 'react';
import { FaSmile } from 'react-icons/fa';
import { MdSend } from 'react-icons/md';
import dynamic from 'next/dynamic';
import type { IEmojiData } from 'emoji-picker-react';

import { User } from 'app/context/user-context';
import EmptyMessage from './empty-message';
import ChatMessageHeader from './chat-message-header';
import Messages from './messages';
const Picker = dynamic(
  () => {
    return import('emoji-picker-react');
  },
  { ssr: false }
);

type Props = {
  targetUser?: User;
};

const Chat = ({ targetUser }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState([
    { msg: 'Eae mano, de boa?', author: 'user' },
    { msg: 'Boa tarde, tudo bem?', author: 'target' },
    { msg: 'Tudo mano e você?', author: 'user' },
    { msg: 'Tbm estou bem, obrigado', author: 'target' },
  ]);

  const handleEmojiClick = React.useCallback(
    (event: any, data: IEmojiData) => {
      setMessage(message + data.emoji);
    },
    [message]
  );

  const handleSumbit = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!message.trim()) return;

      setMessages([...messages, { msg: message, author: 'user' }]);
      setMessage('');
      setOpen(false);
    },
    [messages, message]
  );

  if (!targetUser) return <EmptyMessage />;

  return (
    <div className="flex-col hidden w-full sm:flex">
      <ChatMessageHeader targetUser={targetUser} />
      <Messages messages={messages} />
      <form className="relative p-2 pb-1" onSubmit={handleSumbit}>
        <FaSmile
          className="absolute w-6 h-6 text-blue-500 transition-opacity duration-300 cursor-pointer top-4 left-4 opacity-70 hover:opacity-100"
          onClick={() => setOpen((op) => !op)}
        />
        <input
          type="text"
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="write a message..."
          className="w-full p-2 px-10 mt-auto border border-gray-200 outline-none rounded-3xl focus:border-2 focus:border-blue-200"
        />
        <button
          type="submit"
          className="absolute text-blue-500 transition-opacity duration-300 bg-transparent cursor-pointer w-7 h-7 top-4 right-4 opacity-70 hover:opacity-100"
        >
          <MdSend className="w-full h-full" />
        </button>
        {open && (
          <Picker
            onEmojiClick={handleEmojiClick}
            pickerStyle={{ width: '100%' }}
          />
        )}
      </form>
    </div>
  );
};

export default Chat;
