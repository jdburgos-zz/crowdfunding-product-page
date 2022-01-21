/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import Amounts from './Amounts';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Amounts />, div);
});
