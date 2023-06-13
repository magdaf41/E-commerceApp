import React from 'react'
import { Login } from '../components/Login'
import { StyledContainerRegisterPage, StyledButtonPreviousPage } from './HomePage.css'
// import { useNavigate } from 'react-router-dom'
import ReturnBtn from '../components/ReturnBtn'

const LoginPage = () => {
	
	return (
		<StyledContainerRegisterPage>
			<ReturnBtn />
			<Login />
		</StyledContainerRegisterPage>
	)
}

export default LoginPage
