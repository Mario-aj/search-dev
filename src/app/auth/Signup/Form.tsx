import React, { useCallback } from 'react';
import { Form as ReactFinalForm } from 'react-final-form';
import { toast } from 'react-toastify';
import { OnSubmitProps } from './SignUp';
import { FinalFormTextInput } from '../../ui';
import { required } from '../../../utils/forms';

type FormProps = {
  onSubmit: (props: OnSubmitProps) => void;
};

export const Form = ({ onSubmit }: FormProps) => {
  const handleSubmitEvent = useCallback(
    (values: any) => {
      if (values.password !== values.confirmPassword) {
        toast.error('As senhas precisam ser iguais');
        return;
      }

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
          <div className="flex flex-col gap-4 mb-6">
            <FinalFormTextInput
              type="text"
              placeholder="Nome completo"
              validate={required('required')}
              name="completeName"
            />
            <FinalFormTextInput
              type="text"
              placeholder="E-mail ou Telefone"
              validate={required('required')}
              name="credential"
            />
            <FinalFormTextInput
              type="password"
              placeholder="Senha"
              validate={required('required')}
              name="password"
            />

            <FinalFormTextInput
              type="password"
              placeholder="confirme sua senha"
              validate={required('required')}
              name="confirmPassword"
            />
          </div>

          <button
            className="flex items-center justify-center max-w-xs mb-6 transition-all duration-300 bg-yellow-500 rounded-lg w-72 hover:bg-yellow-600 h-14 dark:text-gray-900"
            type="submit"
          >
            Registrar
          </button>
        </form>
      )}
    />
  );
};
