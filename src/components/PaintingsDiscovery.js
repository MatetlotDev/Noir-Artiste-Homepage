import React from 'react'

import { StyledPaintingsDiscovery } from './styles/PaintingsDiscovery.styled'

const content = [
    {
        image: 'https://images.squarespace-cdn.com/content/v1/5b37edcfaf20967da76a2a29/1632764074016-27JKIJYP0VWAFSFBBBRC/NOIR+artist+-+Green+Fragment+-+162x114cm.jpg?format=300w',
        title: 'Fragments'
    },
    {
        image: 'https://images.squarespace-cdn.com/content/v1/5b37edcfaf20967da76a2a29/1632813133078-94Y7HOB55DG8PVCU2FTE/NOIR+artist+-+Contemplation+-+Red+Tiger.jpg?format=300w',
        title: 'Comtemplation'
    },
    {
        image: 'https://images.squarespace-cdn.com/content/v1/5b37edcfaf20967da76a2a29/f72c6c06-cf58-4515-bf5a-320914889db5/Magnify+Century+-+170x120cm+-+low.jpg?format=300w',
        title: 'Dystopia'
    },
]

export default function PaintingsDiscovery() {
  return (
    <StyledPaintingsDiscovery>
        {content.map(({image, title}) => (
            <figure>
                <img src={image} alt="overview" />
                <div>
                    <h6>{title}</h6>
                    <p>View all</p>
                </div>
            </figure>
        ))}
    </StyledPaintingsDiscovery>
  )
}
