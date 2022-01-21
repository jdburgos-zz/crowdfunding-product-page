/** React core **/
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';

/** Components **/
import Button from './Button';

describe('Button component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button  onClick={() => {}}/>, div);
  });

  test('contains test text', () => {
    render(<Button onClick={() => {}}>test text</Button>);
    const Btn = screen.getByText('test text');

    expect(Btn).toBeInTheDocument();
  });
});
