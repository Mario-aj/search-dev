import React, { FormEvent, useCallback, useState } from 'react';
import { FaRegEnvelope, FaUnlockAlt } from 'react-icons/fa';
import { Input } from '../../ui';
import { OnSubmitProps } from './SignIn';

type FormProps = {
  onSubmit: (props: OnSubmitProps) => void;
};
type ValidationProps = {
  show: boolean;
};

const Validation = ({ show }: ValidationProps) => {
  return show ? <span className="text-xs text-red-600">required</span> : null;
};

export const Form = ({ onSubmit }: FormProps) => {
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const verifyCredentials = () => {
    if (!credential.trim() && !password.trim()) {
      setError('bothError');
      return true;
    }

    if (!credential.trim()) {
      setError('credential');
      return true;
    }

    if (!password.trim()) {
      setError('password');
      return true;
    }

    return false;
  };

  const handleSubmitEvent = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (verifyCredentials()) return;

      setError('');
      onSubmit({ credential, password });
    },
    [credential, password, onSubmit]
  );

  return (
    <form
      onSubmit={handleSubmitEvent}
      className="flex flex-col items-center justify-center w-full"
    >
      <div className="flex flex-col mb-6 space-y-2">
        <div>
          <Input
            Icon={() => <FaRegEnvelope className="text-gray-400" />}
            type="text"
            value={credential}
            onChange={event => setCredential(event.target.value)}
            placeholder="E-mail ou Telefone"
            hasError={error === 'credential' || error === 'bothError'}
          />
          <Validation show={error === 'credential' || error === 'bothError'} />
        </div>
        <div>
          <Input
            Icon={() => <FaUnlockAlt className="text-gray-400" />}
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            placeholder="Senha"
            hasError={error === 'password' || error === 'bothError'}
          />
          <Validation show={error === 'password' || error === 'bothError'} />
        </div>
      </div>

      <button
        className="flex items-center justify-center max-w-xs mb-6 transition-all duration-300 bg-yellow-500 rounded-lg w-72 hover:bg-yellow-600 h-14 dark:text-gray-900"
        type="submit"
      >
        Entrar
      </button>
    </form>
  );
};
