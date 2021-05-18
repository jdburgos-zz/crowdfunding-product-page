/** Components **/
import Header from './components/Header/Header';
import Description from './components/sections/Description/Description';
import Amounts from './components/sections/Amounts/Amounts';
import Container from './components/layout/Container/Container';
import About from './components/sections/About/About';

/** Styles **/
import './styles/styles.scss';

const App = () => (
  <div>
    <Header />
    <Container>
      <Description />
      <Amounts />
      <About />
    </Container>
  </div>

);

export default App;
