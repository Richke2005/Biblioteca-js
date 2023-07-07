import categorys from './dataClothes'
import Styled from 'styled-components'
import { motion } from 'framer-motion'

const FloatContainer = Styled.div`
position:fixed;
width: 100%;
top: 12vh;
display: flex;
justify-content: center;
`
const CategoryContainer = Styled(motion.div)`
display: flex;
width: 50%;
`

function CategoryWindow() {
   
    return(
        <FloatContainer>
        <CategoryContainer
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: .5}}>
        <h3>Masculino</h3>
        
            <ul>
             { 
             categorys.map( (category) => (
                <li>{category.type}</li>
             ))
             }
            </ul> 
        </CategoryContainer>
        </FloatContainer>
    )
}

export default CategoryWindow