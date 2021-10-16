/* eslint-disable consistent-return */
/* eslint-disable react/display-name */
import Router from 'next/router';

const withAuth = (WrappedComponent: any) => (props: any) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const betFightAccessToken = localStorage.getItem('betfight-accestoken');

    if (!betFightAccessToken) {
      Router.replace('/auth/signin');
      return null;
    }

    return <WrappedComponent {...props} />;
  }
  return null;
};

export default withAuth;
