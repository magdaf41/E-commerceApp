import React from 'react'
import { StyledButtonPreviousPage } from '../pages/HomePage.css'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'

const ReturnBtn = () => {
	const navigate = useNavigate()
	return (
		<StyledButtonPreviousPage onClick={() => navigate('/')}>
			<IoIosArrowBack />
			Return to previous page
		</StyledButtonPreviousPage>
	)
}

export default ReturnBtn
