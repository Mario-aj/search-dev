import type { NextPage } from 'next';

import { withAuth } from '../app/shared';

const Home: NextPage = () => {
  return <div>welcome to betfight</div>;
};

export default withAuth(Home);
