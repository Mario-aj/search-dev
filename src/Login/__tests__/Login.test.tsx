import { render, screen } from '@testing-library/react';

import Login from '../Login';

describe('Login', () => {
  describe('Behavior', () => {
    it('should render correctly', () => {
      render(<Login />);

      expect(screen.getByTitle(/LoginIcon/i)).toBeInTheDocument();
      expect(
        screen.getByRole('heading', { name: /REGISTER/i })
      ).toBeInTheDocument();
      expect(
        screen.getByText(/click on the button to register with your github/i)
      ).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /register with github/i })
      ).toBeInTheDocument();
    });
  });

  describe('Styles', () => {
    it('matches snapshots', () => {
      render(<Login />);

      expect(screen.getByTitle(/LoginIcon/i)).toMatchSnapshot();
      expect(
        screen.getByRole('heading', { name: /REGISTER/i })
      ).toMatchSnapshot();
      expect(
        screen.getByText(/click on the button to register with your github/i)
      ).toMatchSnapshot();
      expect(
        screen.getByRole('button', { name: /register with github/i })
      ).toMatchSnapshot();
    });
  });
});
