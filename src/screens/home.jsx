import Pesquisa from '../patterns/pesquisa/index.js'
import UltimosLancamentos from '../patterns/UltimosLançamentos/index.js'
import CardRecomenda from '../patterns/CardRecomenda/index.js'
import ImagemLivro from '../images/livro2.png'
import Styled from 'styled-components'

const AppContainer = Styled.div`
  width: 100vw;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

function Home() {
  return (
    <AppContainer>
     <Pesquisa/>
    <UltimosLancamentos/>
    <CardRecomenda
    titulo="Talvez você se interesse por isso:"
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



export default Home
