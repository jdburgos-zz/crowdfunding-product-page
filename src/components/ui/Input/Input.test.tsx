/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import Input from './Input';

/** Styles **/
import styles from '../../Pledge/Pledge.module.scss';

describe('Input component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Input
        ref={null}
        className={styles['pledge__footer-input-control']}
        input={{
          id: 'amount_' + 1,
          type: 'number',
          min: 100,
          defaultValue: 200,
        }}
        error={false}
        onChange={() => {}}
      />,
      div
    );
  });
});
