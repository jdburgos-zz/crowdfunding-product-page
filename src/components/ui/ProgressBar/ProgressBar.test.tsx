/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import ProgressBar from './ProgressBar';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProgressBar  className='test-class' value={0}/>, div);
});
