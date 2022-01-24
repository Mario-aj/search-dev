import * as React from 'react';

import { Avatar } from 'app/components/ui';

type Props = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  items: string[];
};

const SideBar = ({ onSubmit, items }: Props) => (
  <div className="flex flex-col items-center w-full max-w-sm border-r-2 bg-slate-100 border-r-gray-200">
    <form
      onSubmit={onSubmit}
      className="flex flex-row justify-center w-full p-2 border-b border-gray-200"
    >
      <input
        type="text"
        aria-label="search"
        name="search"
        className="flex-1 bg-white outline-none focus:border border-blue-300 rounded-3xl px-4 py-1.5 w-full h-9"
        placeholder="search developer..."
      />
    </form>
    {items.length !== 0 ? (
      <ul className="flex flex-col flex-1 w-full overflow-scroll bg-white custom-scrollbar">
        {items.map((dev) => (
          <li
            key={dev}
            className="flex items-center w-full p-2 transition-colors duration-300 border-b border-gray-200 cursor-pointer hover:bg-slate-200"
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
                className="-mt-1 overflow-hidden text-sm text-gray-400 w-72 whitespace-nowrap text-ellipsis"
              >
                Web developer at 87 labs LLC, I work about 1.5 year ago
              </span>
            </div>
          </li>
        ))}
      </ul>
    ) : (
      <div className="flex items-center justify-center flex-1">
        Find devs from anywhere :)
      </div>
    )}
  </div>
);

export default SideBar;
