import * as React from 'react';

import Header from 'app/components/header';
import getUserInfos from 'app/services/getUserInfos';
import { useUserInfos } from 'app/hooks/useUserInfos';
import PrivateRoutes from 'app/private-routes';

type Props = {
  token: string;
};

const Home = ({ token }: Props) => {
  const { dispatchUser } = useUserInfos();

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
        console.log('home page', error);
      }
    };

    getUser();
  }, [token, dispatchUser]);

  return (
    <div className="w-full h-screen bg-slate-100">
      <Header />
    </div>
  );
};

export default PrivateRoutes(Home);
