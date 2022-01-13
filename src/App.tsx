import { useGhCode } from './hooks';
import { Login } from './Login';

function App() {
  const ghCode = useGhCode();

  return ghCode ? (
    <div>Welcome to home page :) !</div>
  ) : (
    <div className="flex items-center justify-center w-full h-screen p-4 bg-gray-900 md:p-6">
      <Login />
    </div>
  );
}

export default App;
