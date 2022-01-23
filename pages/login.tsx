import * as React from 'react';
import { FaGithub } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useSwr from 'swr';

import getGithubAccessToken from 'app/services/getGithubAccessToken';
import { LoginIcon } from 'app/components/ui';

const Login = () => {
  const router = useRouter();
  const { code = '' } = router.query;

  const { data, error } = useSwr(
    () => (code ? code : null),
    getGithubAccessToken
  );

  React.useEffect(() => {
    if (code) {
      if (data) {
        const access_token = data.split('&')[0].split('=')[1];
        localStorage.setItem(
          'gh-dev-access_token',
          JSON.stringify(access_token)
        );
        router.push('/');
      } else if (error) {
        console.log('error', error);
      }
    }
  }, [code, data, error, router]);

  return (
    <div className="flex items-center justify-center w-full h-screen py-8 bg-gray-800">
      <div className="flex items-center justify-center w-full h-full m-8 overflow-hidden bg-white rounded-lg sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xlg:max-w-7xl">
        <div
          className="hidden w-3/4 h-full px-10 py-10 bg-indigo-500 rounded md:block"
          title="LoginIcon"
        >
          <LoginIcon />
        </div>
        <div className="flex flex-col items-center justify-center gap-6 px-1">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-gray-800 uppercase">
              Welcome
            </h1>
            <p className="text-base text-center text-gray-500">
              Click on the button to login with your github account
            </p>
          </div>
          <Link
            href={`https://github.com/login/oauth/authorize?scope=user&client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GITHUB_REDIRECT_URI}`}
          >
            <a className="flex items-center justify-center gap-2 px-4 py-2 font-bold text-white uppercase bg-indigo-500 rounded-md hover:bg-indigo-600 active:bg-indigo-700">
              <FaGithub />
              login with github
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
