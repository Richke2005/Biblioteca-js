import Styled from 'styled-components'

const Input = Styled.input`
    order: 2px solid black;
        background: transparent;
        border: 2px solid black;
        padding: ${ props => props.padding || '20px 140px' };
        border-radius: 50px;
        width: 200px;
        color: black;
        font-size: 16px;
        margin-bottom: 10px;

        &::placeholder {
                color: ;
                font-size: 16px;
        }
`

export default Input;