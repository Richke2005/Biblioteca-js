import Header from './components/Header/index';
import Pesquisa from './components/pesquisa'
import UltimosLancamentos from './components/UltimosLançamentos/index'
import CardRecomenda from './components/CardRecomenda/index'
import ImagemLivro from './images/livro2.png'
import Styled from 'styled-components';

const AppContainer = Styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
`

function App() {
  return (
    <AppContainer>
     <Header></Header>
     <Pesquisa/>
    <UltimosLancamentos/>
    <CardRecomenda
    titulo="Talvez você se interesse por:"
    subtitulo="Agular 11"
    descricao="construindo uma aplicação com a plataforma google"
    img={ImagemLivro}/>
    <CardRecomenda
    titulo="Talvez você se interesse por:"
    subtitulo="Agular 11"
    descricao="construindo uma aplicação com a plataforma google"
    img={ImagemLivro}/>
    </AppContainer>
  )
}

export default App;
