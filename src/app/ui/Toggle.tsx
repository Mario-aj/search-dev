import classnames from 'classnames';
import { FaSun, FaMoon } from 'react-icons/fa';

type ToggleProps = {
  isToggle: boolean;
  isThemeTogge?: boolean;
  onToggle: () => void;
};

export const Toggle = ({
  isThemeTogge = false,
  isToggle = false,
  onToggle,
}: ToggleProps) => {
  return (
    <div
      className="relative flex items-center justify-between px-1 bg-black border-0 cursor-pointer w-14 h-7 rounded-3xl"
      onClick={onToggle}
    >
      {isThemeTogge && (
        <>
          <FaSun className="text-yellow-300" />
          <FaMoon className="text-yellow-300" />
        </>
      )}

      <div
        className={classnames(
          'bg-gray-200 border-2 z-50 border-yellow-400 absolute rounded-full w-7 h-7 transform duration-500',
          {
            'translate-x-6': isToggle,
            '-left-0': !isToggle,
          }
        )}
      />
    </div>
  );
};
