/* eslint-disable testing-library/prefer-presence-queries */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from 'pages/index';

describe('Header', () => {
  it('should render correctly', () => {
    render(<Home />);

    const dropdown = screen.getByTitle('dropdown');
    const img = screen.getByRole('img', { name: /avatar/i });

    expect(
      screen.getByRole('heading', { name: /Gh-dev/i })
    ).toBeInTheDocument();
    expect(dropdown).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(screen.queryByText(/profile/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/logout/i)).not.toBeInTheDocument();
  });

  it('should show dropdown and its children', () => {
    render(<Home />);

    const dropdown = screen.getByTitle('dropdown');
    userEvent.click(dropdown);

    const listItems = screen.getAllByRole('listitem');

    expect(listItems.length).toBe(2);
    expect(listItems[0]).toHaveTextContent(/Profile/i);
    expect(listItems[1]).toHaveTextContent(/Logout/i);
  });

  it('should call logout function', () => {
    render(<Home />);

    const dropdown = screen.getByTitle('dropdown');
    userEvent.click(dropdown);

    const logout = screen.getByText(/logout/i);
    userEvent.click(logout);

    expect(window.location.pathname).toBe('/login');
  });
});
