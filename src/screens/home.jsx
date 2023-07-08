import Pesquisa from '../components/pesquisa'
import UltimosLancamentos from '../components/UltimosLançamentos/index'
import CardRecomenda from '../components/CardRecomenda/index'
import ImagemLivro from '../images/livro2.png'
import CategoryWindow from '../components/ClothesWindow/clotheswindow'
import Styled from 'styled-components'

const AppContainer = Styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
`

function Home() {
  return (
    <AppContainer>
     <CategoryWindow/>
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



export default Home
