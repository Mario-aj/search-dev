import { useLayoutEffect, useState } from 'react';

const useGhCode = () => {
  const [hasCode, setHasCode] = useState(false);

  function getCodeFromUrl() {
    let code = window.location.href.split('=')[1];

    if (code) {
      localStorage.setItem('gh-dev-code', JSON.stringify(code));
      return code;
    }

    return '';
  }

  useLayoutEffect(() => {
    let code = window.localStorage.getItem('gh-dev-code');

    code = code ? JSON.parse(code) : getCodeFromUrl();

    setHasCode(!!code);
  }, []);

  return hasCode;
};

export default useGhCode;
