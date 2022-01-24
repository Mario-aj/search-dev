import * as React from 'react';

import { User as UserProps } from 'app/types';

export type User = UserProps | undefined;

type ContextProps = {
  user: User;
  dispatchUser: (user: User) => void;
};

export const UserContext = React.createContext<ContextProps>({
  user: undefined,
  dispatchUser: () => {},
});

const UserProvider: React.FC = ({ children }) => {
  const [user, dispatchUser] = React.useState<User>();

  return (
    <UserContext.Provider value={{ user, dispatchUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
