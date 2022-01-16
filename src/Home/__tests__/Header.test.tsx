import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';

const MockHeader = () => (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);

describe('Header', () => {
  describe('Behavior', () => {
    it('should render correctly', () => {
      render(<MockHeader />);

      const dropdown = screen.getByTitle('dropdown');
      const img = screen.getByRole('img', { name: /profile/i });

      expect(
        screen.getByRole('heading', { name: /Gh-dev/i })
      ).toBeInTheDocument();
      expect(img).toBeInTheDocument();
      expect(dropdown).toBeInTheDocument();
      expect(dropdown).toHaveClass('hidden');
    });

    it('should show dropdown and its children', () => {
      render(<MockHeader />);

      const dropdown = screen.getByTitle('dropdown');
      const img = screen.getByRole('img', { name: /profile/i });

      userEvent.click(img);
      expect(dropdown).not.toHaveClass('hidden');
      expect(dropdown).toHaveClass('flex');

      const link = screen.getByRole('link', { name: /profile/i });
      const button = screen.getByRole('button', { name: /logout/i });

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '#');
      expect(button).toBeInTheDocument();
      userEvent.click(button);
      expect(window.location.pathname).toBe('/login');
    });

    it('should call logout function', () => {
      render(<MockHeader />);

      const button = screen.getByRole('button', { name: /logout/i });

      userEvent.click(button);
      expect(window.location.pathname).toBe('/login');
    });
  });

  describe('Styles', () => {
    it('should render correctly', () => {
      render(<MockHeader />);

      const header = screen.getByRole('heading', { name: /Gh-dev/i });
      const img = screen.getByRole('img', { name: /profile/i });
      const dropdown = screen.getByTitle('dropdown');

      expect(header).toMatchSnapshot();
      expect(img).toMatchSnapshot();
      expect(dropdown).toMatchSnapshot();
      expect(dropdown).toMatchSnapshot();
    });
  });
});
