import React from 'react'

import { StyledSectionHeader } from './styles/SectionHeader.styled'

const image = 'https://images.squarespace-cdn.com/content/v1/5b37edcfaf20967da76a2a29/1632814311318-ROHLX5H0FNGUQQWTPRU3/NOIR+-+Fresque.jpg?format=2500w'

export default function MuralsHeader() {
  return (
    <StyledSectionHeader image={image}>
        <h2>Murals</h2>
    </StyledSectionHeader>
  )
}
