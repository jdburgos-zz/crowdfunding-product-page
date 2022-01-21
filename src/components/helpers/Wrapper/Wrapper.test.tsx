/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import Wrapper from './Wrapper';
import { render, screen } from '@testing-library/react';

describe('Wrapper component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Wrapper>
        <h1>test wrapper</h1>
      </Wrapper>,
      div,
    );
  });

  test('contains test text', () => {
    render(
      <Wrapper>
        <h1>test wrapper</h1>
      </Wrapper>,
    );
    const wrapperElement = screen.getByText('test wrapper');

    expect(wrapperElement).toBeInTheDocument();
  });
});
