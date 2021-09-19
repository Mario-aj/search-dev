type InputProps = {
  type: string;
  placeholder: string;
  Icon: React.FC;
};

export const Input = ({
  Icon,
  type = 'text',
  placeholder = '',
}: InputProps) => {
  return (
    <div className="flex items-center max-w-xs p-4 transition-all duration-300 bg-white rounded-lg w-72 h-14 dark:bg-gray-900">
      {Icon && <Icon />}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full h-full p-2 transition-all duration-300 outline-none dark:bg-gray-900"
      />
    </div>
  );
};
