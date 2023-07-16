import React from 'react'
import { StyledButtonPreviousPage } from '../pages/MainPages/HomePage.css'
import { useNavigate } from 'react-router-dom'
import { BsArrowLeftSquare } from 'react-icons/bs'

const ReturnBtn = () => {
	const navigate = useNavigate()
	return (
		<StyledButtonPreviousPage onClick={() => navigate('/')} light>
			<BsArrowLeftSquare />
			Return to previous page
		</StyledButtonPreviousPage>
	)
}

export default ReturnBtn
