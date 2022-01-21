/** React core **/
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';

/** Components **/
import Description from './Description';

describe('Description component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Description />, div);
  });

  describe('renders images', () => {
    beforeEach(() => render(<Description />));

    test("contains 'logo mastercraft' alt text", () => {
      const HeroImg = screen.getByAltText('logo mastercraft');

      expect(HeroImg).toBeInTheDocument();
    });

    test("contains 'bookmark' alt text", () => {
      const BookmarkImg = screen.getByAltText('bookmark');

      expect(BookmarkImg).toBeInTheDocument();
    });
  });

  describe('contains text', () => {
    beforeEach(() => render(<Description />));

    test("'Mastercraft Bamboo Monitor Riser' title", () => {
      const TitleElement = screen.getByText('Mastercraft Bamboo Monitor Riser');

      expect(TitleElement).toBeInTheDocument();
    });

    test("'A beautiful & handcrafted monitor stand to reduce neck and eye strain.' description", () => {
      const DescriptionElement = screen.getByText(
        'A beautiful & handcrafted monitor stand to reduce neck and eye strain.',
      );

      expect(DescriptionElement).toBeInTheDocument();
    });

    test("'Back this project' btn text", () => {
      const BtnElement = screen.getByText('Back this project');

      expect(BtnElement).toBeInTheDocument();
    });

    test("'Bookmark' text", () => {
      const BookmarkElement = screen.getByText('Bookmark');

      expect(BookmarkElement).toBeInTheDocument();
    });
  });
});
