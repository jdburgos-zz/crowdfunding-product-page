/** Components **/
import Header from './components/Header/Header';
import Description from './components/sections/Description/Description';
import Amounts from './components/sections/Amounts/Amounts';
import Container from './components/layout/Container/Container';
import About from './components/sections/About/About';
import Wrapper from './components/helpers/Wrapper/Wrapper';

/** Providers **/
import ProjectProvider from './store/ProjectProvider';

/** Styles **/
import './styles/styles.scss';

const App = () => (
  <Wrapper>
    <Header />
    <Container>
      <ProjectProvider>
        <Description />
        <Amounts />
        <About />
      </ProjectProvider>
    </Container>
  </Wrapper>

);

export default App;
