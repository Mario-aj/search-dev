import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home';

const MockHome = () => (
  <BrowserRouter>
    <Home />
  </BrowserRouter>
);

describe('Home', () => {
  it('should render correctly', () => {
    render(<MockHome />);
  });
});
