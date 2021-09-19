import Link from 'next/link';
import { FaSignInAlt, FaRegEnvelope, FaUnlockAlt } from 'react-icons/fa';

import { useTheme } from '../hooks';
import { Input, Toggle } from '../ui';

export const SignIn = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative grid w-screen h-screen grid-cols-1 sm:grid-cols-2">
      <section className="flex flex-col items-center justify-center w-full">
        <h1 className="mb-6 text-2xl font-medium">Faça seu login</h1>

        <form onSubmit={() => {}}>
          <div className="flex flex-col mb-6 space-y-2">
            <Input
              Icon={() => <FaRegEnvelope className="text-gray-400" />}
              type="text"
              placeholder="E-mail ou Telefone"
            />

            <Input
              Icon={() => <FaUnlockAlt className="text-gray-400" />}
              type="password"
              placeholder="Senha"
            />
          </div>

          <button
            className="flex items-center justify-center mb-6 transition-all duration-300 bg-yellow-500 rounded-lg hover:bg-yellow-600 w-80 h-14 dark:text-gray-900"
            type="submit"
          >
            Entrar
          </button>
        </form>

        <Link href="#">
          <a className="mb-20">Esqueci minha senha</a>
        </Link>

        <Link href="#">
          <div className="flex items-center justify-center space-x-2 transition-all duration-300 cursor-pointer dark:text-yellow-500">
            <FaSignInAlt />
            <a>Criar conta</a>
          </div>
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
