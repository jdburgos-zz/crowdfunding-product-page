/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import Pledge from './Pledge';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pledge />, div);
});
