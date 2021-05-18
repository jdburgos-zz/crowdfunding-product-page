/** Components **/
import Header from './components/Header/Header';
import Description from './components/sections/Description/Description';
import Amounts from './components/sections/Amounts/Amounts';
import Container from './components/layout/Container/Container';
import About from './components/sections/About/About';
import Wrapper from './components/helpers/Wrapper/Wrapper';

/** Styles **/
import './styles/styles.scss';

const App = () => (
  <Wrapper>
    <Header />
    <Container>
      <Description />
      <Amounts />
      <About />
    </Container>
  </Wrapper>

);

export default App;
