import React, {useState} from 'react'

import { StyledHeader, MobileMenu, Icons, MenuContent, HeaderContent } from './styles/Header.styled'
import { Button } from './styles/Button.styled'

import { theme } from './App'

import { IoClose, IoMenu } from 'react-icons/io5'

export default function Header() {

  const [translate, setTranslate] = useState('0vw')
  const [iconOpen, setIconOpen] = useState('block')
  const [iconClose, setIconClose] = useState('none')

  const handleMenu = () => {
    console.log('détecté')
    if(iconOpen === 'block') {
      setTranslate('-20vw')
      setIconOpen('none')
      setIconClose('block')
    }
    else {
      setTranslate('0vw')
      setIconOpen('block')
      setIconClose('none')
    }
  }

  return (
    <StyledHeader transform={translate}>

      <HeaderContent>
        <h1>Noir</h1>
        <h4>Artist</h4>
        <a href="#">Contact</a>
        <Button font='1.2rem' color={theme.colors.lightGrey}>Available / Oeuvres Disponibles</Button>
      </HeaderContent>

      <MobileMenu>
        <Icons onClick={handleMenu}>
          <IoMenu color={theme.colors.white} size='2rem' display={iconOpen} />
          <IoClose color={theme.colors.white} size='2rem' display={iconClose} />
        </Icons>
        <MenuContent>
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
        </MenuContent>
      </MobileMenu>

    </StyledHeader>
  )
}
