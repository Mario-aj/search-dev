import { render, screen } from '@testing-library/react';

import Login from '../Login';

describe('Login', () => {
  describe('Behavior', () => {
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

  describe('Styles', () => {
    it('matches snapshots', () => {
      render(<Login />);

      expect(screen.getByTitle(/LoginIcon/i)).toMatchSnapshot();
      expect(
        screen.getByRole('heading', { name: /welcome/i })
      ).toMatchSnapshot();
      expect(
        screen.getByText(/click on the button to login with your github/i)
      ).toMatchSnapshot();
      expect(
        screen.getByRole('link', { name: /login with github/i })
      ).toMatchSnapshot();
    });
  });
});
