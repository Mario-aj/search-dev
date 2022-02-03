import * as React from 'react';
import { FaSmile } from 'react-icons/fa';
import { MdSend } from 'react-icons/md';
import Picker from 'emoji-picker-react';

import { Avatar } from 'app/components/ui';
import { User } from 'app/context/user-context';

type Props = {
  target: User;
};

const Chat = ({ target }: Props) => {
  const [messages, setMessages] = React.useState([
    { msg: 'Eae mano, de boa?', author: 'user' },
    { msg: 'Boa tarde, tudo bem?', author: 'target' },
    { msg: 'Tudo mano e você?', author: 'user' },
    { msg: 'Tbm estou bem, obrigado', author: 'target' },
  ]);

  if (!target)
    return (
      <div className="flex-col items-center justify-center flex-1 hidden w-full text-gray-600 sm:flex">
        Select someone on side bar to start to talk
        <FaSmile className="w-24 h-24 mt-8 text-blue-400 transition-opacity duration-200 opacity-80 hover:opacity-100" />
      </div>
    );

  return (
    <div className="flex-col hidden w-full sm:flex">
      <div
        title="dev-info"
        aria-label="dev-info"
        className="box-border flex items-center w-full p-4 mb-auto border-b-2 border-gray-400"
      >
        <Avatar avatarUrl={target.avatarUrl} emptyText={target.name || ''} />
        <div className="flex flex-col ml-4">
          <div className="flex items-center ">
            <strong
              title={target.name}
              aria-label="name"
              className="pr-2 mr-2 text-gray-700 border-r border-black"
            >
              {target.name}
            </strong>
            {target.company && <span>works at {target.company}</span>}
          </div>
          {target.bio && (
            <span
              title={target.bio}
              aria-label="bio"
              className="block overflow-hidden text-sm text-gray-400 w-96 whitespace-nowrap text-ellipsis"
            >
              {target.bio}
            </span>
          )}
          {target.location && (
            <span
              title={target.location}
              aria-label="location"
              className="text-sm text-gray-400 "
            >
              Live in {target.location}
            </span>
          )}
        </div>
      </div>
      <div
        id="messages"
        className="flex flex-col flex-1 p-4 overflow-scroll rounded-md custom-scrollbar"
      >
        {messages.length > 0 &&
          messages.map((message, index) => (
            <div
              key={`${message.author}-${index}`}
              className={`flex flex-row items-start px-3 py-2 mb-4 rounded-md ${
                message.author === 'user'
                  ? 'bg-blue-500 text-white ml-auto'
                  : 'bg-slate-300 text-gray-800 mr-auto'
              }`}
            >
              <span>{message.msg}</span>
            </div>
          ))}
      </div>
      <form
        className="relative p-2 pb-1"
        onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          setMessages([
            ...messages,
            { msg: event.target.elements[0].value, author: 'user' },
          ]);

          event.target.elements[0].value = '';
        }}
      >
        <FaSmile className="absolute w-6 h-6 text-blue-500 transition-opacity duration-300 cursor-pointer top-4 left-4 opacity-70 hover:opacity-100" />
        <input
          type="text"
          id="message"
          name="message"
          placeholder="write a message..."
          className="w-full p-2 px-10 mt-auto border border-gray-200 outline-none rounded-3xl focus:border-2 focus:border-blue-200"
        />
        <button
          type="submit"
          className="absolute text-blue-500 transition-opacity duration-300 bg-transparent cursor-pointer w-7 h-7 top-4 right-4 opacity-70 hover:opacity-100"
        >
          <MdSend className="w-full h-full" />
        </button>
        <Picker
          onEmojiClick={onEmojiClick}
          pickerStyle={{ width: '25%', display: open ? 'flex' : 'none' }}
        />
      </form>
    </div>
  );
};

export default Chat;
