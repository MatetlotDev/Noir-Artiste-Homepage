import React from 'react'

import { StyledFooter, Flex } from './styles/Footer.styled'

import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { GoMail } from 'react-icons/go'

import { theme } from './App'

export default function Footer() {
  return (
    <StyledFooter>
        <Flex>
            <p>Follow us</p>
            <FaFacebookF color={theme.colors.black} size="1.2rem" />
            <FaInstagram color={theme.colors.black} size="1.2rem" />
            <GoMail color={theme.colors.black} size="1.2rem" />
        </Flex>
        <Flex>
            <p>Noir Artist   Martin@noir-artist.com</p>
            <span>Copyright from <a href="https://noir-artist.com/">Noir-artist.com</a></span>
        </Flex>
    </StyledFooter>
  )
}
