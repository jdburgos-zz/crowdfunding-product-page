/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import Backdrop from './Backdrop';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Backdrop />, div);
});