import * as React from 'react';

import { Avatar } from 'app/components/ui';

type Props = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  items: Array<{ id: string; name: string; bio: string; avatarUrl: string }>;
};

const SideBar = ({ onSubmit, items }: Props) => (
  <div className="flex flex-col items-center w-full max-w-2xl border-r-2 bg-slate-100 border-r-gray-200">
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
            key={dev.id}
            className="flex items-center w-full p-2 transition-colors duration-300 border-b border-gray-200 cursor-pointer hover:bg-slate-200"
          >
            <Avatar avatarUrl={dev.avatarUrl} emptyText={dev.name} />
            <div className="flex flex-col flex-1 ml-4">
              <strong
                title={dev.name}
                aria-label="name"
                className="text-gray-700"
              >
                {dev.name}
              </strong>
              <span
                title="Web developer at 87 labs LLC, I work about 1.5 year ago"
                aria-label="bio"
                className="-mt-1 overflow-hidden text-sm text-gray-400 w-72 whitespace-nowrap text-ellipsis"
              >
                {dev.bio}
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
