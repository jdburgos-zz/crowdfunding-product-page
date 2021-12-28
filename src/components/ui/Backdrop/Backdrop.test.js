/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import Backdrop from './Backdrop';

describe('Backdrop component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Backdrop />, div);
  });
})
