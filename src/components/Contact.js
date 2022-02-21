import React from 'react'

import { StyledSectionHeader } from './styles/SectionHeader.styled'
import { StyledContactContent, Flex } from './styles/ContactContent.styled'
import { Button } from './styles/Button.styled'
import { theme } from './App'

const image = 'https://images.squarespace-cdn.com/content/v1/5b37edcfaf20967da76a2a29/1632814496668-3ZPENNCKS4A1H3FV68UE/ok6+-+NOIR+artist+-+en+action+%284%29.jpg?format=2500w'

export default function Contact() {
    return (
        <>
            <StyledSectionHeader image={image}>
                <h2>Contact</h2>
            </StyledSectionHeader>
            <StyledContactContent>
                <form>
                    <Flex>
                        <div>
                            <label htmlFor="Name">Nom / Name *</label>
                            <input type="text" id="Name" />
                            <p>Prénom</p>
                        </div>
                        <div>
                            <br />
                            <input type="text" id="family" />
                            <p>Nom de famille</p>
                        </div>
                    </Flex>
                    <label htmlFor="email">E-mail *</label>
                    <input type="text" id="email" />
                    <label htmlFor="phone">Téléphone / Phone</label>
                    <p>Pour une demande de prix / For a price request</p>
                    <input type="text" id="phone" />
                    <label htmlFor="message">Message *</label>
                    <textarea id="message" cols="30" rows="5"></textarea>
                    <Button type="submit" color={theme.colors.black} font='1rem'>Confirm</Button>
                </form>
            </StyledContactContent>
        </>
    )
}
