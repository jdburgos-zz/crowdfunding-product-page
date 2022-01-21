/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import MainMenu from './MainMenu';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainMenu />, div);
});
