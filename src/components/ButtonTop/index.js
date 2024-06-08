import Styled from 'styled-components'
import { motion } from 'framer-motion'

const DivButton = Styled.div`
position: ${props => props.position || "fixed"};
right: 20px;
bottom: 20px;
display: flex;
align-items: center;
`
const Button =  Styled(motion.button)`
padding: 20px;
background-color: transparent;
border-radius: 100%;
border: 2px solid #000;
text-align: center;
font-size: 1.3rem;
font-weight: bold;
cursor: pointer;
`
const buttonVariants = {
    mouseOver: {
        scale: 1.2,
        backgroundColor: "#000",
        transition: {
            type: "spring"
        }
    }
}
const ButtonTop = () => {
    return(
        <DivButton>
            <Button
            onClick={() => window.scrollTo(0, 0) }
            variants={buttonVariants}
            whileHover="mouseOver"></Button>
        </DivButton>
    )
}

export default ButtonTop