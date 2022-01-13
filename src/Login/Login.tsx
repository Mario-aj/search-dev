import { LoginIcon } from '../ui';

const Login = () => {
  return (
    <div className="items-center justify-center w-full h-full gap-4 bg-gray-200 rounded-lg md:flex md:w-3/4 lg:w-3/5">
      <LoginIcon />
      <div className="flex flex-col items-center justify-center w-full h-full p-2 md:w-1/2">
        <div className="flex flex-col items-center justify-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 uppercase">
            Welcome
          </h1>
          <p className="text-lg text-center text-gray-500">
            Click on the button to login with your github
          </p>
        </div>
        <button
          type="button"
          className="items-center justify-center px-4 py-3 text-xl font-bold text-white uppercase transition-all duration-300 bg-indigo-500 rounded-md hover:bg-indigo-600 active:bg-indigo-700"
        >
          login with github
        </button>
      </div>
    </div>
  );
};

export default Login;
