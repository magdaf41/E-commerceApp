import React from 'react'
import { Login } from '../../components/Login'
import { StyledContainerFormPage } from './HomePage.css'
import ReturnBtn from '../../components/ReturnBtn'

const LoginPage = () => {
	return (
		<StyledContainerFormPage>
			<ReturnBtn />
			<Login />
		</StyledContainerFormPage>
	)
}

export default LoginPage
