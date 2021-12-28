/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import Pledge from './Pledge';

test('renders without crashing', () => {
  const div = document.createElement('div');
  const pledge = {
    title: "Pledge with no reward",
    price: null,
    description: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
    quantity: null,
  };

  ReactDOM.render(<Pledge product={pledge} />, div);
});
