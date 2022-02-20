import React from 'react'

import { StyledSectionHeader } from './styles/SectionHeader.styled'

const image = 'https://images.squarespace-cdn.com/content/v1/5b37edcfaf20967da76a2a29/1632763849105-AVQAZV6SBCXM0RT7E2YL/NOIR+artist+-+Broken+Dreams+-+200x160cm.jpg?format=2500w'

export default function PaintingsHeader() {
  return (
    <StyledSectionHeader image={image}>
        <h2>Paintings</h2>
    </StyledSectionHeader>
  )
}
