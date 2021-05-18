/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import Description from './Description';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Description />, div);
});
