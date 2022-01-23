import { render, screen } from '@testing-library/react';

import Login from 'pages/login';

jest.mock('next/router', () => ({
  useRouter: () => ({ query: { code: '123' } }),
}));

describe('Login', () => {
  it('should render correctly', () => {
    render(<Login />);

    expect(screen.getByTitle(/LoginIcon/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /welcome/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/click on the button to login with your github/i)
    ).toBeInTheDocument();

    const link = screen.getByRole('link', { name: /login with github/i });
    expect(link).toBeInTheDocument();
    expect(link.childNodes.length).toBe(2);
  });
});
