import { useLayoutEffect, useState } from 'react';

const useGithubCode = () => {
  const [code, setCode] = useState<string | null>('');

  useLayoutEffect(() => {
    let code = window.location.href.split('=')[1];

    setCode(code);
  }, []);

  return code;
};

export default useGithubCode;
