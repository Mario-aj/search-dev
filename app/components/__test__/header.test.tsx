import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../header';

beforeEach(jest.clearAllMocks);

jest.mock('next/router', () => ({
  useRouter: () => ({ push: jest.fn() }),
}));

jest.mock('app/hooks/useUserInfos', () => ({
  useUserInfos: () => ({
    user: {
      avatar_url: 'https://avatars3.githubusercontent.com/u/1234?v=4',
      name: 'John Doe',
    },
  }),
}));

describe('Header', () => {
  it('should render correctly', () => {
    render(<Header />);

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
    render(<Header />);

    const dropdown = screen.getByTitle('dropdown');
    userEvent.click(dropdown);

    const listItems = screen.getAllByRole('listitem');

    expect(listItems.length).toBe(2);
    expect(listItems[0]).toHaveTextContent(/Profile/i);
    expect(listItems[1]).toHaveTextContent(/Logout/i);
  });

  it.skip('should call logout function', () => {
    render(<Header />);

    const dropdown = screen.getByTitle('dropdown');
    userEvent.click(dropdown);

    userEvent.click(screen.getByText(/logout/i));
    console.log(window.location.href);

    expect(window.location.pathname).toBe('/login');
  });
});
