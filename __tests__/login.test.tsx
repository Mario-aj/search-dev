import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Login from 'pages/login';

const MockLogin = () => {
  return (
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
};

describe('Login', () => {
  it('should render correctly', () => {
    render(<MockLogin />);

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
