import React from 'react'

import { StyledNav } from './styles/Nav.styled'
import { Button } from './styles/Button.styled'

import { theme } from './App'

export default function Nav() {
  return (
    <StyledNav>
        <img src="https://images.squarespace-cdn.com/content/v1/5b37edcfaf20967da76a2a29/7a1ed519-eeb4-4240-a7ab-93555164d42b/logo+png+blanc+petit.png?format=1500w" alt="logo" />
        <ul>
            <li>Se connecter</li>
            <li>Home</li>
            <li>Biography</li>
            <li>Paintings</li>
            <li>Drawings</li>
            <li>Murals</li>
            <li>Contacts</li>
            <li>
                <Button color={theme.colors.white}>Shop</Button>
            </li>
        </ul>
    </StyledNav>
  )
}
