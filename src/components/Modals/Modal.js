import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { closeModal } from '../../store/modalSlice'

import { StyledButton, StyledButtonsArea, StyledSideButtons } from '../_shared/Buttons.css'
import { StyledModalContainer, StyledBackdrop, StyledModalContent } from './Modal.css'

const Modal = ({ children, openTime, confirmAction = null, confirmText = 'confirm', cancelText = 'Ok' }) => {
	const dispatch = useDispatch()

	useEffect(() => {
		let timeoutID

		document.body.style.overflowY = 'hidden'

		if (openTime) {
			timeoutID = setTimeout(() => {
				dispatch(closeModal())
			}, openTime)
		}

		return () => {
			clearInterval(timeoutID)
			document.body.style.overflowY = 'scroll'
		}
	}, [])

	return openTime ? (
		<StyledModalContainer>
			<StyledBackdrop />
			<StyledModalContent>{children}</StyledModalContent>
		</StyledModalContainer>
	) : confirmAction ? (
		<StyledModalContainer>
			<StyledBackdrop />
			<StyledModalContent>
				{children}
				<StyledButtonsArea>
					<StyledSideButtons
						onClick={() => {
							confirmAction()
							dispatch(closeModal())
						}}>
						{confirmText}
					</StyledSideButtons>
					<StyledSideButtons
						onClick={() => {
							dispatch(closeModal())
						}}>
						{cancelText}
					</StyledSideButtons>
				</StyledButtonsArea>
			</StyledModalContent>
		</StyledModalContainer>
	) : (
		<StyledModalContainer>
			{children}
			<StyledButton onClick={() => dispatch(closeModal())}>{cancelText}</StyledButton>
		</StyledModalContainer>
	)
}
export default Modal
