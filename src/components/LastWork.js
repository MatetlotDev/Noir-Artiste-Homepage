import React from 'react'

import { StyledLastWork, Wrapper, Flex } from './styles/LastWork.styled'
import { Button } from './styles/Button.styled'

import { useDispatch } from 'react-redux'

import { theme } from './App'

const images = [
    'https://images.squarespace-cdn.com/content/v1/5b37edcfaf20967da76a2a29/1643554507555-HA2AXRCDIZLEW0RSOU66/Dystopia+-+This+is+fine+-+150x100cm.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/5b37edcfaf20967da76a2a29/1632813609631-HVF61ASKB1RORZ805VPS/NOIR+artist+-+Contemplation+-+Faith+%281%29.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/5b37edcfaf20967da76a2a29/1632813612086-N2QL7HXL09OQREAZ1ENK/Contemplation+-+Conquer+-+200x150cm.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/5b37edcfaf20967da76a2a29/1632814039886-XAYL9FMTHPTJZ16NPMCP/NOIR+artist+-+Yellow+fragment+-+160x110cm+-+2020.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/5b37edcfaf20967da76a2a29/1632814041368-WZFDXFFCTWF1B8M2CTIH/NOIR+-+Free+Minded+Fragment+-+170x120cm+-+Acrilic+on+canvas+-+2021.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/5b37edcfaf20967da76a2a29/1632814041945-B3BBDTAC0UJGZY0DOI72/NOIR+-+Themis+Fragment+-+170x120cm+-+Acrilic+on+canvas+-+2021.jpg?format=500w'
]

export default function LastWork() {    

    const dispatch = useDispatch()

    const handleDispatch = i => {
        dispatch({type: 'updateImages', images: images})
        dispatch({type: 'updateActual', actual: i})
        dispatch({type: 'openModal'})
    }

    return (
        <StyledLastWork>
            <h3>Last works</h3>
            <Wrapper>
                {images.map((el, i) => <img key={el} onClick={() => handleDispatch(i)} src={el} alt='poster' />)}
            </Wrapper>
            <Flex>
                <Button color={theme.colors.black} font='1rem'>View More / Autres Oeuvres</Button>
                <Button color={theme.colors.black} font='1rem'>Work available / Oeuvres Disponibles</Button>
            </Flex>                
        </StyledLastWork>
    )
}
