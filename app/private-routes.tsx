/* eslint-disable react/display-name */
import Router from 'next/router';

const withAuth = (WrappedComponent: any) => (props: any) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const token = localStorage.getItem('search-dev-access_token');

    if (!token) {
      Router.replace('/login');
      return null;
    }

    return <WrappedComponent {...props} token={JSON.parse(token)} />;
  }
  return null;
};

export default withAuth;
