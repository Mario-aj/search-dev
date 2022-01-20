import * as React from 'react';
import { useRouter } from 'next/router';
import getUserInfos from 'app/services/getUserInfos';
import { Dropdown } from 'app/components/ui';
import PrivateRoutes from 'app/components/PrivateRoutes';

type User =
  | {
      avatar_url: string;
      name: string;
    }
  | undefined;

type Props = {
  token: string;
};

const Home = ({ token }: Props) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const [user, setUser] = React.useState<User>();

  React.useEffect(() => {
    const getUser = async () => {
      try {
        if (token) {
          const reponse = await getUserInfos(token as string);

          const data = {
            avatar_url: reponse.avatar_url,
            name: reponse.name,
          };
          setUser(data);
        }
      } catch (error) {
        console.log('home page', error);
      }
    };

    getUser();
  }, []);

  function handleLogout() {
    localStorage.removeItem('gh-dev-access_token');
    router.push('/login');
  }

  if (!user) return null;

  return (
    <div className="w-full h-screen bg-slate-100">
      <div className="flex flex-row items-center justify-center w-full h-20 px-8 bg-white border-b border-b-gray-200">
        <div className="flex items-center justify-between w-full h-full max-w-5xl">
          <h1 className="text-2xl font-bold text-gray-800">Gh-dev</h1>
          <Dropdown
            avatarUrl={user.avatar_url}
            title={user.name}
            open={isOpen}
            onOpen={() => setIsOpen((open) => !open)}
          >
            <ul className="flex flex-col w-full gap-1 text-gray-800 hover:transition-colors hover:duration-300">
              <li className="w-full px-2 py-1 cursor-pointer hover:bg-blue-100">
                profile
              </li>
              <li
                onClick={handleLogout}
                className="w-full px-2 py-1 cursor-pointer hover:bg-blue-100"
              >
                logout
              </li>
            </ul>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default PrivateRoutes(Home);
