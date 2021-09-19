export const Input = ({
  Icon = () => {},
  type = 'text',
  placeholder = '',
}: any) => {
  return (
    <div className="flex items-center p-4 transition-all duration-300 bg-white rounded-lg w-80 h-14 dark:bg-gray-900">
      <Icon />
      <input
        type={type}
        placeholder={placeholder}
        className="w-full h-full p-2 transition-all duration-300 outline-none dark:bg-gray-900"
      />
    </div>
  );
};
