import * as React from 'react';

type User =
  | {
      avatar_url: string;
      name: string;
    }
  | undefined;

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
