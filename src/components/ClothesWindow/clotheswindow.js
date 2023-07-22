import categorys from './dataClothes'
import { Link } from 'react-router-dom'
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
width: 50%;
min-width: 250px;
max-height: 400px;
display: flex;
background-color: transparent;
border: 2px solid black;
border-radius: 10px;
`

const Title = Styled.h3`
margin-left: 2px;
`

const Category = Styled.ul`

`

const categoryVariants = {
    visible: {
    scale: 1.1, 
      transition: {
        type: "spring"
      }
    }
}

function CategoryWindow() {
   
    return(
        <FloatContainer>
        <CategoryContainer
        variants={categoryVariants}
        whileHover="visible"
        >
        <Title>Male</Title>
        
            <Category>
             { 
             categorys.map( (category) => (
              <Link to={`/${category.type}`}><li>{category.type}</li></Link>
             ))
             }
            </Category> 
        </CategoryContainer>
        </FloatContainer>
    )
}

export default CategoryWindow