import { render, screen } from '@testing-library/react';
import Avatar from '../Avatar';

describe('Avatar', () => {
  it('should render correctly', () => {
    render(
      <Avatar
        avatarUrl="https://scontent.flad1-1.fna.fbcdn.net/v/t39.30808-6/247089419_3097038823913123_4266727059060168780_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=oMpiSOjIhtMAX-fzHtS&_nc_ht=scontent.flad1-1.fna&oh=00_AT-7JhN3mhp7YMuNIH7VTSCE6I-BGuG1fqP0Bg4JxEa8vw&oe=61E95D24"
        emptyText="John Doe"
      />
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('class', 'w-full h-full');
    expect(screen.queryByTitle('emptyText')).not.toBeInTheDocument();
  });

  it('should render correctly with empty text', () => {
    render(<Avatar emptyText="Mario Alfedo Jorge" />);

    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    expect(screen.getByTitle('emptyText')).toBeInTheDocument();
    expect(screen.getByTitle('emptyText')).toHaveTextContent('MJ');
  });
});
