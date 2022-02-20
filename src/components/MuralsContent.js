import React from 'react'
import { theme } from './App'
import { Button } from './styles/Button.styled'

import { StyledMuralsContent, Wrapper } from './styles/MuralsContent.styled'

import { useDispatch } from 'react-redux'

const images = [
    'https://images.squarespace-cdn.com/content/v1/5b37edcfaf20967da76a2a29/1633006523651-BIBCWVPSP0GN3OIETUBP/NOIR+artist+-+Fresque+-+Mons+1.jpg?format=300w',
    'https://images.squarespace-cdn.com/content/v1/5b37edcfaf20967da76a2a29/1633006522030-VGULLE93K7STW7VTETZA/1.+NOIR+artist+-+Mural+painting.jpg?format=300w',
    'https://images.squarespace-cdn.com/content/v1/5b37edcfaf20967da76a2a29/1633006522238-XFY5S9NQZLZB5HFVI2SQ/NOIR+-+Mural+Mons+2+-+4.jpg?format=300w',
    'https://images.squarespace-cdn.com/content/v1/5b37edcfaf20967da76a2a29/1633006524293-ZHVBB17TEW7RPGZIGY63/NOIR+artist+-+Mural+-+Parc+de+la+Boverie+-+Li%C3%A8ge+Copyright+photo+-++Yorick+Groeven+%283%29.jpg?format=300w',
    'https://images.squarespace-cdn.com/content/v1/5b37edcfaf20967da76a2a29/1633006522931-5VAGH6DPDBK7VINXCJEI/NOIR+artist+-+Fresque+-+Liege+hotel.jpg?format=300w',
    'https://images.squarespace-cdn.com/content/v1/5b37edcfaf20967da76a2a29/1633006594749-OAC2INL8F8VHPPYTTEXR/Peinture+murale+-+Microsoft+Surface+Pro+4+project+-+1+-+COPYRIGHT+PHOTO+Francois+Xavier+Cardon.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/5b37edcfaf20967da76a2a29/1633006594341-BJTEV7J6A20W75JOE385/NOIR+-+Projet+David+Bowie.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/5b37edcfaf20967da76a2a29/1633006524676-XF4IZM40Z2EIMOK0PIHA/NOIR+artist+-+Mural+in+Warsaw.jpg?format=300w',
]

export default function MuralsContent() {

  const dispatch = useDispatch()

  const handleDispatch = i => {
      dispatch({type: 'updateImages', images: images})
      dispatch({type: 'updateActual', actual: i})
      dispatch({type: 'openModal'})
  }

  return (
    <StyledMuralsContent>
        <Wrapper>
            {images.map((el, i) => <img key={el} onClick={() => handleDispatch(i)} src={el} alt='overview' />)}
        </Wrapper>
        <Button color={theme.colors.black} font='1rem'>View more</Button>
    </StyledMuralsContent>
  )
}
