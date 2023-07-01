import Header from './components/Header/index';
import Pesquisa from './components/pesquisa'
import Styled from 'styled-components';

const AppContainer = Styled.div`
  width: 100vw;
  height: 100vh;
  background-color: darkblue;
`

function App() {
  return (
    <AppContainer>
     <Header></Header>
     <Pesquisa/>
    </AppContainer>
  )
}

export default App;
