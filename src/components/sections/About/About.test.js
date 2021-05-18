/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import About from './About';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<About />, div);
});
