/** React core **/
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';

/** Components **/
import Header from './Header';

describe('Header component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
  });

  describe('renders images', () => {
    beforeEach(() => render(<Header />));

    test("contains 'crowdfunding product page' alt text", () => {
      const HeroImg = screen.getByAltText("crowdfunding product page");

      expect(HeroImg).toBeInTheDocument();
    });

    test("contains 'crowdfunding product page - logo' alt text", () => {
      const Logo = screen.getByAltText("crowdfunding product page - logo");

      expect(Logo).toBeInTheDocument();
    });
  })
})
