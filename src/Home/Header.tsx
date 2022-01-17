import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from '../ui';

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);

  function handleLogout() {
    localStorage.removeItem('gh-dev-access_token');
    navigate('/login');
  }

  return (
    <div className="flex flex-row items-center justify-center w-full h-20 px-8 bg-white border-b border-b-gray-200">
      <div className="flex items-center justify-between w-full h-full max-w-5xl">
        <h1 className="text-2xl font-bold text-gray-800">Gh-dev</h1>
        <Dropdown
          avatarUrl="https://scontent.flad1-1.fna.fbcdn.net/v/t39.30808-6/247089419_3097038823913123_4266727059060168780_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=oMpiSOjIhtMAX-fzHtS&_nc_ht=scontent.flad1-1.fna&oh=00_AT-7JhN3mhp7YMuNIH7VTSCE6I-BGuG1fqP0Bg4JxEa8vw&oe=61E95D24"
          title="Mário Alfredo Jorge"
          open={isOpen}
          onOpen={() => setIsOpen((open) => !open)}
        >
          <ul className="flex flex-col w-full gap-1 text-gray-800 hover:transition-colors hover:duration-300">
            <li className="w-full px-2 py-1 cursor-pointer hover:bg-blue-100">
              profile
            </li>
            <li
              onClick={handleLogout}
              className="w-full px-2 py-1 cursor-pointer hover:bg-blue-100"
            >
              logout
            </li>
          </ul>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
