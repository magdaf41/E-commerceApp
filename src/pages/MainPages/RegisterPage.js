import React from 'react'
import { StyledContainerFormPage, StyledProductsPage } from './HomePage.css'
import ReturnBtn from '../../components/_shared/ReturnBtn'
import { FormRegister } from '../../components/Forms/FormRegister'

const RegisterPage = () => {
	return (
		<StyledProductsPage>
			<ReturnBtn />
			<FormRegister />
		</StyledProductsPage>
	)
}

export default RegisterPage
