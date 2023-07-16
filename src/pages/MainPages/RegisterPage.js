import React from 'react'
import { FormRegister } from '../../components/Forms/FormRegister'
import { StyledContainerFormPage, StyledProductsPage } from './HomePage.css'
import ReturnBtn from '../../components/ReturnBtn'

const RegisterPage = () => {
	return (
		<StyledProductsPage>
			<ReturnBtn />
			<FormRegister />
		</StyledProductsPage>
	)
}

export default RegisterPage
