import * as React from 'react';
import { MdClear } from 'react-icons/md';

import Header from 'app/components/header';
import getUserInfos from 'app/services/getUserInfos';
import { useUserInfos } from 'app/hooks/useUserInfos';
import PrivateRoutes from 'app/private-routes';
import SideBar from 'app/components/side-bar';

type Props = {
  token: string;
};

const Home = ({ token }: Props) => {
  const { dispatchUser } = useUserInfos();
  const [devs, setDevs] = React.useState(['Mario', 'Alfredo', 'Jorge']);

  React.useEffect(() => {
    const getUser = async () => {
      try {
        if (token) {
          const reponse = await getUserInfos(token);

          const data = {
            avatar_url: reponse.avatar_url,
            name: reponse.name,
          };

          dispatchUser(data);
        }
      } catch (error) {
        console.log('home page error', error);
      }
    };

    getUser();
  }, [token, dispatchUser]);

  const handleSubmit = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log('Submited', event);
    },
    []
  );

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-slate-100">
      <Header />
      <div className="flex w-full max-w-6xl bg-white border-2 border-t-0 border-gray-200 home-screen">
        <SideBar onSubmit={handleSubmit} items={devs} />
        <div>chat</div>
      </div>
    </div>
  );
};

export default PrivateRoutes(Home);
