/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import Button from './Button';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button />, div);
});
