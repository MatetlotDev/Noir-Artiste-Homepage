import React from 'react'

import { StyledModal } from './styles/Modal.styled'

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'

import { theme } from './App'

import { useSelector, useDispatch } from 'react-redux'


export default function Modal() {

    const images = useSelector(store => store.images)
    const actual = useSelector(store => store.actual)
    const state = useSelector(store => store.state)

    const dispatch = useDispatch()

    
    const prevImage = () => actual === 0 ? dispatch({ type: 'lastImage', actual: images.length - 1}) : dispatch({ type: 'prevImage', actual: actual - 1})
    
    const nextImage = () => actual === images.length - 1 ? dispatch({type: 'firstImage', actual: 0}) : dispatch({ type: 'nextImage', actual: actual + 1})

    const closeModal = () => dispatch({ type: 'closeModal'})

    return (
        <StyledModal state={state}>
            <BsChevronLeft onClick={prevImage} size='3rem' color={theme.colors.white} />
            <img src={images[actual]} alt="poster" />
            <BsChevronRight onClick={nextImage} size='3rem' color={theme.colors.white} />
            <MdClose onClick={closeModal} className='close' size='3rem' color={theme.colors.white} />
        </StyledModal>
    )
}
