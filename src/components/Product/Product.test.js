/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import Product from './Product';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Product />, div);
});
