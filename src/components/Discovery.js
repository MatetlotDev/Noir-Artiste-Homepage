import React from 'react'

import { StyledDiscovery } from './styles/Discovery.styled'

const content = [
    {
        image: 'https://images.squarespace-cdn.com/content/v1/5b37edcfaf20967da76a2a29/1633002293763-LOKX6A5TO0T8LEE41WJU/NOIR+artist+-+Mural+painter.jpg?format=300w',
        title: 'NOIR - Biography',
    },
    {
        image: 'https://images.squarespace-cdn.com/content/v1/5b37edcfaf20967da76a2a29/1632812562698-4Y7S02NMGHQL6PC0F2BL/NOIR+artist+2021+-+fond+-+carr%C3%A9+-+NB.JPG?format=300w',
        title: 'Paintings',
    },
    {
        image: 'https://images.squarespace-cdn.com/content/v1/5b37edcfaf20967da76a2a29/1632812634056-R8U7W0V1255MYYSLQDKY/NOIR+artist+-+Global+Resilience+-+50x50cm+-+2020+-+low.jpg?format=300w',
        title: 'Drawings',
    },
    {
        image: 'https://images.squarespace-cdn.com/content/v1/5b37edcfaf20967da76a2a29/1632812812007-0J2PM15058Q5SGHNFUCH/NOIR+artist+-+Mural+painting+-+Acrylic+and+spray+can+-+low.jpg?format=300w',
        title: 'Murals',
    }
]

export default function Discovery() {
    return (
        <StyledDiscovery>
            {content.map(({ image, title }) => (
                <div key={title}>
                    <img src={image} alt="overview" />
                    <h6>{title}</h6>
                    <p>View more</p>
                </div>
            ))}
        </StyledDiscovery>
    )
}
