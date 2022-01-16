import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home';

const MockHome = () => (
  <BrowserRouter>
    <Home />
  </BrowserRouter>
);

describe('Home', () => {
  describe('Behavior', () => {});

  describe('Styles', () => {
    it('matches snapshots', () => {
      render(<MockHome />);

      expect(document.body).toMatchSnapshot();
    });
  });
});
