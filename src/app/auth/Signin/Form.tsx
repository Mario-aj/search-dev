import React, { useCallback } from 'react';
import { Form as ReactFinalForm } from 'react-final-form';
import { OnSubmitProps } from './SignIn';
import { FinalFormTextInput } from '../../ui';
import { required } from '../../../utils/forms';

type FormProps = {
  onSubmit: (props: OnSubmitProps) => void;
};

export const Form = ({ onSubmit }: FormProps) => {
  const handleSubmitEvent = useCallback(
    (values: any) => {
      onSubmit(values);
    },
    [onSubmit]
  );

  return (
    <ReactFinalForm
      onSubmit={handleSubmitEvent}
      render={({ handleSubmit }) => (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center w-full"
        >
          <div className="flex flex-col gap-4 mb-8">
            <FinalFormTextInput
              type="text"
              name="credential"
              placeholder="E-mail ou Telefone"
              validate={required('required')}
            />
            <FinalFormTextInput
              type="password"
              name="password"
              placeholder="Senha"
              validate={required('required')}
            />
          </div>

          <button
            className="flex items-center justify-center max-w-xs mb-6 transition-all duration-300 bg-yellow-500 rounded-lg w-72 hover:bg-yellow-600 h-14 dark:text-gray-900"
            type="submit"
          >
            Entrar
          </button>
        </form>
      )}
    />
  );
};
