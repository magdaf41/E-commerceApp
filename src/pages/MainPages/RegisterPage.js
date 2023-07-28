import React from 'react'
import { StyledContainerFormPage, StyledPage, StyledProductsPage } from './HomePage.css'
import ReturnBtn from '../../components/_shared/ReturnBtn'
import { FormRegister } from '../../components/Forms/FormRegister'

const RegisterPage = () => {
	return (
		<StyledPage>
			<ReturnBtn />
			<FormRegister />
		</StyledPage>
	)
}

export default RegisterPage
