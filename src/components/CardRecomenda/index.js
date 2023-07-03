import Styled from 'styled-components'
import { Titulo }from '../Titulo/index'

const Card = Styled.div`
align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%;  
`

const Botao = Styled.button`
background-color: #EB9B00;
color: #FFF;
padding: 10px 0px;
font-size: 16px;
border: none;
font-weight: 900;
display: block;
text-align: center;
width: 150px;
&:hover {
    cursor: pointer;
}
`

const Descricao = Styled.p`
max-width: 300px;
`

const Subtitulo = Styled.h4`
color: #002F52;
font-size: 18px;
font-weight: bold;
margin: 15px 0;
`

const ImgLivro = Styled.img`
width: 150px;
`

function cardRecomenda({titulo, subtitulo, descricao, img}){
    return( 
        <Card> 
            <div>
                <Titulo 
                fontSize='16px'
                alinhamento='left'>
                    {titulo}
                </Titulo>
                <Subtitulo>
                    {subtitulo}
                </Subtitulo>
                <Descricao>
                    {descricao}
                </Descricao>
            </div>
            <div>
                <ImgLivro src={img}/>
                <Botao>Saiba Maiss</Botao>
            </div>
        </Card>
    )
}

export default cardRecomenda 