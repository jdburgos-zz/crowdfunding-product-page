/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import Product from './Product';

test('renders without crashing', () => {
  const div = document.createElement('div');
  const product = {
    title: 'Bamboo Stand',
    price: 25,
    description: 'You get an ergonomic stand made of natural bamboo. You\'ve helped us launch our promotional campaign, and you’ll be added to a special Backer member list.',
    quantity: 101
  };
  const onClickProductHandler = jest.fn();

  ReactDOM.render(<Product product={ product } onClick={ onClickProductHandler } />, div);
});
