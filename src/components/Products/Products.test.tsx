/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import Products from './Products';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Products />, div);
});
