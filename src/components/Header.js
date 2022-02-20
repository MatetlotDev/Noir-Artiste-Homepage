import React from 'react'

import { StyledHeader } from './styles/header.styled'
import { Button } from './styles/Button.styled'

import { theme } from './App'

export default function Header() {
  return (
    <StyledHeader>
        <h1>Noir</h1>
        <h4>Artist</h4>
        <a href="#">Contact</a>
        <Button font='1.2rem' color={theme.colors.lightGrey}>Available / Oeuvres Disponibles</Button>
    </StyledHeader>
  )
}
