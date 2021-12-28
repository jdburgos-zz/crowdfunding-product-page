/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import Container from './Container';

describe('Container component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Container />, div);
  });
})
