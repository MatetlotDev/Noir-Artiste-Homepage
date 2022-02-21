import React from 'react'

import { StyledSectionHeader } from './styles/SectionHeader.styled'
import { StyledAboutContent } from './styles/AboutContent.styled'

const image = 'https://images.squarespace-cdn.com/content/v1/5b37edcfaf20967da76a2a29/1641376637080-C0ZXSB9B0YURSX6BQD4I/DSC04019-Mod_3000px.jpg+-+2.jpg?format=2500w'

export default function PaintingsHeader() {
  return (
    <>
      <StyledSectionHeader image={image}>
        <h2>Who we are</h2>
        <h4>Gilson Brothers</h4>
      </StyledSectionHeader>
      <StyledAboutContent>
        <div>
          <p>Noir Artist is a dual look at life, the world, people, and the events that they experience, that upset them, that control them. A conversation back and forth between two brothers, between two points of view sometimes, each sustaining the other.</p>
          <p>Inspirations reflect this story, as told by two pairs of eyes and featuring a variety of works that cannot be categorised, different from the usual fare. Fragments of stories, glimpses of news items, good or bad, which pull you, through an elegantly concealed door, into the world of Noir Artist.</p>
          <h6><strong>Lucien</strong> (artist) on the right</h6>
          <h6><strong>Martin</strong> (manager) on the left</h6>
        </div>
      </StyledAboutContent>
    </>
  )
}
