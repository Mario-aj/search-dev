import * as React from 'react';
import { FaChevronDown } from 'react-icons/fa';

import { Avatar } from '.';

type Props = {
  avatarUrl: string;
  title: string;
  open: boolean;
  children: React.ReactNode;
  onOpen: () => void;
};

const DropDown = ({
  avatarUrl,
  title,
  children,
  onOpen,
  open = false,
}: Props) => {
  function reduceName(name: string) {
    const splitName = name.split(' ');

    return splitName.length >= 3
      ? `${splitName[0]} ${splitName[splitName.length - 1]}`
      : name;
  }

  return (
    <div
      title="dropdown"
      className="relative flex items-center gap-4"
      onClick={onOpen}
    >
      <Avatar avatarUrl={avatarUrl} emptyText={title} />
      <div className="items-center hidden gap-2 text-gray-500 cursor-pointer sm:flex">
        <p title={title}>{reduceName(title)}</p>
        <FaChevronDown title="chevron-down" className="w-5 h-5 fill-current" />
      </div>

      {open && (
        <div
          title="children"
          className="absolute flex flex-col items-start justify-center w-full py-2 bg-white rounded-lg top-16"
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default DropDown;
