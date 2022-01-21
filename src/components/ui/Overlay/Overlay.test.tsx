/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import Overlay from './Overlay';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Overlay><div>Overlay</div></Overlay>, div);
});
