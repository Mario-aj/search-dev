import { FaSmile } from 'react-icons/fa';

const EmptyMessage = () => (
  <div className="flex-col items-center justify-center flex-1 hidden w-full text-gray-600 sm:flex">
    Select someone on side bar to start to talk
    <FaSmile className="w-24 h-24 mt-8 text-blue-400 transition-opacity duration-200 opacity-80 hover:opacity-100" />
  </div>
);

export default EmptyMessage;
