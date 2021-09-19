import classnames from 'classnames';

type ToggleProps = {
  isToggle: boolean;
  onToggle: () => void;
};

export const Toggle = ({ isToggle, onToggle }: ToggleProps) => {
  return (
    <div
      className="relative bg-black border-0 cursor-pointer w-14 h-7 rounded-3xl"
      onClick={onToggle}
    >
      <div
        className={classnames(
          'bg-gray-200 border-2 border-yellow-500 absolute rounded-full w-7 h-7 transform duration-500',
          {
            'translate-x-7': isToggle,
          }
        )}
      />
    </div>
  );
};
