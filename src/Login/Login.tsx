import { LoginIcon } from '../ui';

const Login = () => {
  return (
    <div className="md:flex md:w-3/4 lg:w-3/5 w-full bg-gray-200 items-center gap-4 rounded-lg justify-center h-full">
      <LoginIcon />
      <div className="w-full p-2 md:w-1/2 h-full flex flex-col items-center justify-center">
        <div className="mb-8 flex flex-col items-center justify-center">
          <h1 className="uppercase text-4xl font-bold text-gray-800">
            register
          </h1>
          <p className="text-gray-500 text-lg text-center">
            Click on the button to register with your github
          </p>
        </div>
        <button
          type="button"
          className="bg-indigo-500 py-3 text-xl uppercase px-4 items-center justify-center hover:bg-indigo-600 rounded-md transition-all duration-300 text-white font-bold active:bg-indigo-700"
        >
          Register with github
        </button>
      </div>
    </div>
  );
};

export default Login;
