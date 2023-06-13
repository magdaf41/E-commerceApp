import React from 'react'
import { StyledButtonPreviousPage } from '../pages/HomePage.css'
import { useNavigate } from 'react-router-dom'

const ReturnBtn = () => {
	const navigate = useNavigate()
	return <StyledButtonPreviousPage onClick={() => navigate('/')}> Return to previous page</StyledButtonPreviousPage>
}

export default ReturnBtn
