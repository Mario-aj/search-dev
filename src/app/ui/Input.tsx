import { InputHTMLAttributes } from 'react';
import classnames from 'classnames';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon: React.FC;
  hasError: boolean;
}

export const Input = ({
  Icon,
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  hasError = false,
}: InputProps) => {
  return (
    <div
      className={classnames(
        'flex items-center max-w-xs p-4 transition-all duration-300 bg-white rounded-lg w-72 h-14 dark:bg-gray-900',
        {
          'border border-red-600': hasError,
        }
      )}
    >
      {Icon && <Icon />}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full h-full p-2 transition-all duration-300 outline-none dark:bg-gray-900"
      />
    </div>
  );
};
