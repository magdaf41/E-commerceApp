import React from 'react'
import { StyledContainerFormPage, StyledPage, StyledProductsPage } from './HomePage.css'
import ReturnBtn from '../../components/_shared/ReturnBtn'
import { FormLogin } from '../../components/Forms/FormLogin'

const LoginPage = () => {
	return (
		<StyledPage>
			<ReturnBtn />
			<FormLogin />
		</StyledPage>
	)
}

export default LoginPage
