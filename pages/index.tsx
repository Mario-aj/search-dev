import * as React from 'react';

import Header from 'app/components/header';
import getUserInfos from 'app/services/getUserInfos';
import { useUserInfos } from 'app/hooks/useUserInfos';
import PrivateRoutes from 'app/private-routes';
import { SideBar, Chat } from 'app/home';
import { User } from 'app/context/user-context';

type Props = {
  token: string;
};

const Home = ({ token }: Props) => {
  const { dispatchUser } = useUserInfos();
  const [selectedDev, setSelectedDev] = React.useState<User>(undefined);
  const [devs, setDevs] = React.useState([
    {
      id: '1',
      name: 'Mario Alfredo Jorge',
      bio: 'Web developer at 87 labs LLC, I work about 1.5 year ago',
      email: 'mariojorge1997@outlook.com',
      location: 'São Paulo, Brazil',
      company: '87 labs LLC',
      avatarUrl:
        'https://scontent.flad1-1.fna.fbcdn.net/v/t39.30808-6/247089419_3097038823913123_4266727059060168780_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEqnVjRbzcSz4v3SLGV_wfNkNsNNz_axaKQ2w03P9rFou3SkjtEvDOaLU2K-gRVZoaZ27CW6h2Sigs6sD3yHfiG&_nc_ohc=2Ps64DNpJNEAX-ZdKX9&_nc_ht=scontent.flad1-1.fna&oh=00_AT9qvlMEYBuwVwPJL8hBmFAxLjuNjzDUGJb9ANDCKeGo4w&oe=61F34064',
    },
    {
      id: '2',
      name: 'Hector Carlos',
      email: 'mariojorge1997mail.ru',
      location: 'US, Florida',
      company: 'Microsoft',
      bio: 'Foi atingido o recorde de divórcio mais rápido no Iraque, depois de um noivo ter pedido o divórcio ainda durante a boda',
      avatarUrl:
        'https://scontent.flad1-2.fna.fbcdn.net/v/t39.30808-6/246351599_3093312280952444_281421915164195213_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHseigjfG0yXkV2qAQs5sAH26pb2I17e8TbqlvYjXt7xBOE5oQRGFz0dEBoS6KBw3je25aErU4LLfUCQRgtlFPZ&_nc_ohc=upXSLYot884AX9FAqAA&_nc_ht=scontent.flad1-2.fna&oh=00_AT8xnmzN6oSUszzaGQ7HAy5BhSnW8wjY5NNaqpeiuiaPXw&oe=61F30D65',
    },
    {
      id: '3',
      name: 'José Carlos',
      email: 'jmario@87labs.com',
      location: 'Luanda, angola',
      company: 'Google',
      bio: 'Cada nova experiência agora para mim não é um teste de força para mim mesmo. Esta não é uma tentativa de provar algo a alguém. Não estou mais feliz com o que consegui superar.',
      avatarUrl:
        'https://scontent.flad1-1.fna.fbcdn.net/v/t1.6435-9/102852363_2689358284681181_4568843518993549406_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_eui2=AeEQDJfwGy43JDO3uxaVZ8UodHgfa1bS08l0eB9rVtLTyafsNb1LYsPgjH05kbD8CDyIcQgaAX-xigwFTt5xXn91&_nc_ohc=H9PkhoX8aigAX_pNAUw&_nc_ht=scontent.flad1-1.fna&oh=00_AT-2jnEkXwC6ajUCMvmPHOhNGHZz85piKetoj9BnKP8oaw&oe=6213D5EB',
    },
  ]);

  React.useEffect(() => {
    const getUser = async () => {
      try {
        if (token) {
          const reponse = await getUserInfos(token);
          const data = {
            id: reponse.id,
            bio: reponse.bio,
            name: reponse.name,
            email: reponse.email,
            company: reponse.company,
            location: reponse.location,
            avatarUrl: reponse.avatar_url,
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
        <SideBar
          onSubmit={handleSubmit}
          items={devs}
          onSelect={setSelectedDev}
        />
        <Chat target={selectedDev} />
      </div>
    </div>
  );
};

export default PrivateRoutes(Home);
