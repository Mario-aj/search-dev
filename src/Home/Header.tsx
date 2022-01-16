import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('gh-dev-access_token');
    navigate('/login');
  }

  return (
    <div className="flex items-center justify-between w-full h-full max-w-4xl">
      <h1 className="text-2xl font-bold">Gh-dev</h1>
      <div className="relative" onClick={() => setIsOpen((open) => !open)}>
        <img
          src="https://scontent.flad1-1.fna.fbcdn.net/v/t39.30808-6/247089419_3097038823913123_4266727059060168780_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=oMpiSOjIhtMAX-fzHtS&_nc_ht=scontent.flad1-1.fna&oh=00_AT-7JhN3mhp7YMuNIH7VTSCE6I-BGuG1fqP0Bg4JxEa8vw&oe=61E95D24"
          alt="profile"
          className="w-12 h-12 rounded-full cursor-pointer"
        />

        <div
          title="dropdown"
          className={`absolute flex-col gap-2 p-3 px-2 text-gray-800 bg-white rounded-md top-14, ${
            isOpen ? 'flex' : 'hidden'
          }`}
        >
          <a href="#" className="px-2 cursor-pointer hover:bg-blue-200">
            Profile
          </a>
          <button
            type="button"
            onClick={handleLogout}
            className="bg-transparent cursor-pointer hover:bg-blue-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
