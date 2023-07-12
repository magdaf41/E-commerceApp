import React from 'react'
import { StyledButtonPreviousPage } from '../pages/HomePage.css'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'

const ReturnBtn = ({ light }) => {
	const navigate = useNavigate()
	return (
		<StyledButtonPreviousPage onClick={() => navigate('/')} light>
			<IoIosArrowBack />
			Return to previous page
		</StyledButtonPreviousPage>
	)
}

export default ReturnBtn
