import React from 'react'
import { Login } from '../components/Login'
import { StyledContainerFormPage, StyledButtonPreviousPage } from './HomePage.css'
// import { useNavigate } from 'react-router-dom'
import ReturnBtn from '../components/ReturnBtn'

const LoginPage = () => {
	return (
		<StyledContainerFormPage>
			<ReturnBtn />
			<Login />
		</StyledContainerFormPage>
	)
}

export default LoginPage
