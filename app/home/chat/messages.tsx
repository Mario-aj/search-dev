type Props = {
  messages: {
    msg: string;
    author: string;
  }[];
};

const Messages = ({ messages }: Props) => (
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
);

export default Messages;
