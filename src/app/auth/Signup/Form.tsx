import React, { FormEvent, useCallback, useState } from 'react';
import { FaRegEnvelope, FaUnlockAlt, FaUserAlt } from 'react-icons/fa';
import { Input } from '../../ui';
import { OnSubmitProps } from './SignUp';

type FormProps = {
  onSubmit: (props: OnSubmitProps) => void;
};

export const Form = ({ onSubmit }: FormProps) => {
  const [completeName, setCompleteName] = useState('');
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const validateCredentials = () => {
    if (
      !credential.trim() &&
      !password.trim() &&
      !completeName.trim() &&
      !confirmPassword.trim()
    ) {
      setError('allField');
      return true;
    }

    if (!completeName.trim()) {
      setError('complete_name');
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

    if (!confirmPassword.trim()) {
      setError('confirm_password');
      return true;
    }

    if (confirmPassword.trim() !== password.trim()) {
      setError('password_is_not_equal');
      return true;
    }

    return false;
  };

  const handleSubmitEvent = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (validateCredentials()) return;

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
        <Input
          Icon={() => <FaUserAlt className="text-gray-400" />}
          type="text"
          value={completeName}
          onChange={event => setCompleteName(event.target.value)}
          placeholder="Nome completo"
          hasError={error === 'complete_name' || error === 'allField'}
          hasErrorText="required field"
        />
        <Input
          Icon={() => <FaRegEnvelope className="text-gray-400" />}
          type="text"
          value={credential}
          onChange={event => setCredential(event.target.value)}
          placeholder="E-mail ou Telefone"
          hasError={error === 'credential' || error === 'allField'}
          hasErrorText="required field"
        />
        <Input
          Icon={() => <FaUnlockAlt className="text-gray-400" />}
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          placeholder="Senha"
          hasError={error === 'password' || error === 'allField'}
          hasErrorText="required field"
        />

        <Input
          Icon={() => <FaUnlockAlt className="text-gray-400" />}
          type="password"
          value={confirmPassword}
          onChange={event => setConfirmPassword(event.target.value)}
          placeholder="confirme sua senha"
          hasError={
            error === 'confirm_password' ||
            error === 'allField' ||
            error === 'password_is_not_equal'
          }
          hasErrorText={
            error === 'password_is_not_equal'
              ? 'As senhas não combinam, por favor, repita a sua senha'
              : 'required field'
          }
        />
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
