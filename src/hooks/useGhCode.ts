import { useLayoutEffect, useState } from 'react';

const useGhCode = () => {
  const [hasCode, setHasCode] = useState(false);

  useLayoutEffect(() => {
    let code = window.localStorage.getItem('gh-dev-code');

    code = code ? JSON.parse(code) : window.location.href.split('=')[1];

    setHasCode(!!code);
  }, []);

  return hasCode;
};

export default useGhCode;
