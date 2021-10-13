import Link from 'next/link';
import { Form } from './Form';
import { useTheme } from '../../hooks';
import { Toggle } from '../../ui';

export type OnSubmitProps = {
  credential: string;
  password: string;
  completeName: string;
};

export const SignUp = () => {
  const { theme, setTheme } = useTheme();

  const onSubmit = ({ completeName, credential, password }: OnSubmitProps) => {
    console.log({ credential, password, completeName });
  };

  return (
    <div className="relative grid w-screen h-screen grid-cols-1 sm:grid-cols-2">
      <section className="flex flex-col items-center justify-center w-full">
        <h1 className="mb-6 text-2xl font-medium">Faça seu cadastro</h1>

        <Form onSubmit={onSubmit} />

        <Link href="/auth/signin">
          <a className="mb-14">Esqueci minha senha</a>
        </Link>

        <Link href="/auth/signin">
          <a className="transition-all duration-300 cursor-pointer dark:text-yellow-500">
            Já tenho uma conta
          </a>
        </Link>
      </section>

      <section
        style={{
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundImage:
            'url(' +
            'https://images.unsplash.com/photo-1561034646-e37eb9c48abd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' +
            ')',
        }}
        className="hidden sm:flex"
      />

      <div className="absolute top-2 right-2">
        <Toggle
          isThemeTogge
          isToggle={theme === 'dark'}
          onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
      </div>
    </div>
  );
};
