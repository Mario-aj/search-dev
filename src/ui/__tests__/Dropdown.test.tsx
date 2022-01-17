/* eslint-disable testing-library/prefer-presence-queries */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Dropdown from '../Dropdown';

const fakeProps = {
  avatarUrl:
    'https://0scontent.flad1-1.fna.fbcdn.net/v/t39.30808-6/247089419_3097038823913123_4266727059060168780_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=oMpiSOjIhtMAX-fzHtS&_nc_ht=scontent.flad1-1.fna&oh=00_AT-7JhN3mhp7YMuNIH7VTSCE6I-BGuG1fqP0Bg4JxEa8vw&oe=61E95D24',
  open: false,
  title: 'Mario Alfedo Jorge',
  onOpen: jest.fn(),
  children: <div>Hello</div>,
};

beforeEach(jest.clearAllMocks);

describe('Dropdown', () => {
  it('should render correctly', () => {
    render(<Dropdown {...fakeProps} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByTitle(fakeProps.title)).toBeInTheDocument();
    expect(screen.getByTitle(fakeProps.title)).toHaveTextContent('Mario Jorge');
    expect(screen.getByTitle('chevron-down')).toBeInTheDocument();
    expect(screen.queryByTitle('children')).not.toBeInTheDocument();
  });

  it('should display Dropddown children on event click', () => {
    render(<Dropdown {...fakeProps} open />);

    const dropdown = screen.getByTitle('dropdown');

    userEvent.click(dropdown);
    expect(fakeProps.onOpen).toHaveBeenCalledTimes(1);
    expect(screen.getByTitle('children')).toBeInTheDocument();
    expect(screen.getByText(/Hello/i)).toBeInTheDocument();
  });

  it('should not display Dropdown children on event click', () => {
    render(<Dropdown {...fakeProps} />);

    const dropdown = screen.getByTitle('dropdown');

    userEvent.click(dropdown);
    expect(fakeProps.onOpen).toHaveBeenCalledTimes(1);
    expect(screen.queryByTitle('children')).not.toBeInTheDocument();
    expect(screen.queryByText(/Hello/i)).not.toBeInTheDocument();
  });
});
