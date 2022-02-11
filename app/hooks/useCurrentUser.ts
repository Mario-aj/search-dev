import { UserContext } from 'app/context/user-context';
import React from 'react';

export const useCurrentUser = () => {
  const context = React.useContext(UserContext);

  if (!context)
    throw new Error(
      'The useCurrentUser hook must be used within a UserProvider'
    );

  return context;
};
