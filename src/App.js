/** Components **/
import Header from './components/Header/Header';
import Description from './components/sections/Description/Description';

/** Styles **/
import './styles/styles.scss';

const App = () => (
  <div>
    <Header />
    <div className="container">
      <Description />
    </div>
  </div>

);

export default App;
