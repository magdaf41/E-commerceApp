import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { StyledButtonReturnHomePage, StyledPositionButton } from './Buttons.css'

const ReturnBtn = ({ whiteColor }) => {
	const navigate = useNavigate()
	return (
		<StyledPositionButton>
			<StyledButtonReturnHomePage onClick={() => navigate('/')}>
				<AiOutlineArrowLeft />
				Return to Home page
			</StyledButtonReturnHomePage>
		</StyledPositionButton>
	)
}

export default ReturnBtn
