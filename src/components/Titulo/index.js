import Styled from 'styled-components'

export const Titulo = Styled.h2`
width: 100%;
padding: 30px 0;
background-color: #FFF;
color: ${props => props.cor || 'black'};
font-size: ${props => props.fontSize || '36px'};
text-align: ${props => props.alinhamento || 'center'};
margin: 0;
`