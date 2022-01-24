import { FaSmile } from 'react-icons/fa';
import { MdSend } from 'react-icons/md';

import { Avatar } from 'app/components/ui';

const Chat = () => {
  return (
    <div className="flex-col hidden w-full sm:flex">
      <div
        title="dev-info"
        aria-label="dev-info"
        className="flex items-center w-full p-4 mb-auto border-b-2 border-gray-400"
      >
        <Avatar
          avatarUrl="https://scontent.flad3-1.fna.fbcdn.net/v/t1.6435-9/156909741_2922159921401015_856062972842462937_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHFOhSEf7MwJpJfipMeVI1ldyFMex8uBn53IUx7Hy4GfrSXx2ReizllPwt-KOYbkATkfWlhUk-CKYMBepAZh_yM&_nc_ohc=zyjUa0eA9HIAX96ASNE&_nc_ht=scontent.flad3-1.fna&oh=00_AT-ng_wn2znZOPdMxrX1-kzxaj8OqCORztX1FeROGtLe7A&oe=62129CA3"
          emptyText="Mario Alfredo Jorge"
        />
        <div className="flex flex-col flex-1 ml-4">
          <strong
            title="Mario Alfredo Jorge"
            aria-label="name"
            className="text-gray-700"
          >
            Mario Alfredo Jorge
          </strong>
          <span
            title="Web developer at 87 labs LLC, I work about 1.5 year ago"
            aria-label="bio"
            className="-mt-1 overflow-hidden text-sm text-gray-400 w-max whitespace-nowrap text-ellipsis"
          >
            Web developer at 87 labs LLC
          </span>
        </div>
      </div>
      <form
        className="relative p-2 pb-1"
        onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          console.log('message submited', event.target.elements[0].value);
        }}
      >
        <FaSmile className="absolute w-6 h-6 text-blue-500 transition-opacity duration-300 cursor-pointer top-4 left-4 opacity-70 hover:opacity-100" />
        <input
          type="text"
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
      </form>
    </div>
  );
};

export default Chat;
