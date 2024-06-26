import Logo from '../../components/logo'
import Options from '../../components/optionsHeader'
import Icons from '../../components/iconsHeader'
import Input from '../../components/input/index'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Styled from 'styled-components'


const HeaderContainer = Styled(motion.header)`
width: 100vw;
height: ${props => props.height || '12vh'};
display: flex;
justify-content: space-around;
align-items: center;
background-color: white;
border-bottom: solid 1px black;
position: fixed;
top: 0;
`

const containerVariants = {
    hidden: {
        opacity: 0,
        y: -100
    },
    visible: {
        opacity: 1,
        y: 0,
            transition: { 
            delay: 0.2, 
            type: 'spring', 
            stiffness: 100
        }
    }
}

function Header () {
    return (
    <HeaderContainer
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    >
        <Link to="/">
           <Logo/> 
        </Link>
        <Options/>
        <Input 
        padding='5px 20px'
        placeholder='O que você procura ?'/>
        <Icons></Icons>
    </HeaderContainer>
    )
}

export default Header