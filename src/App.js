/** Components **/
import Header from './components/Header/Header';
import Description from './components/sections/Description/Description';
import Amounts from './components/sections/Amounts/Amounts';
import Container from './components/layout/Container/Container';

/** Styles **/
import './styles/styles.scss';

const App = () => (
  <div>
    <Header />
    <Container>
      <Description />
      <Amounts />
    </Container>
  </div>

);

export default App;
