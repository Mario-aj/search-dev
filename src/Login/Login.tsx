import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { LoginIcon } from '../ui';
import { useGithubCode } from '../hooks';
import { env } from '../App';
import * as api from '../services';

const Login = () => {
  const code = useGithubCode();
  const navigate = useNavigate();
  const { client_id = '', client_secret = '', redirect_uri } = env;

  React.useEffect(() => {
    if (code) {
      api
        .login({ client_id, client_secret, code })
        .then((res) => {
          console.log(res);
          const access_token = res.split('&')[0].split('=')[1];
          localStorage.setItem(
            'gh-dev-access_token',
            JSON.stringify(access_token)
          );
          navigate('/');
        })
        .catch((err) => {
          console.log({ err });
        });
    }
  }, [code, navigate, client_id, client_secret]);

  return (
    <div className="flex items-center justify-center w-full h-screen p-4 bg-gray-900 md:p-6">
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
          <a
            className="flex items-center justify-center gap-2 px-4 py-3 text-xl font-bold text-white uppercase transition-all duration-300 bg-indigo-500 rounded-md hover:bg-indigo-600 active:bg-indigo-700"
            href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
          >
            <FaGithub />
            login with github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
