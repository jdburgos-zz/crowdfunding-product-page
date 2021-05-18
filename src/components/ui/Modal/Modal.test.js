/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import Modal from './Modal';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Modal />, div);
});