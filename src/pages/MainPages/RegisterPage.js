import React from 'react'
import { StyledContainerFormPage, StyledPage, StyledProductsPage } from './HomePage.css'
import ReturnBtn from '../../components/_shared/ReturnBtn'
import { FormRegister } from '../../components/Forms/FormRegister'

const RegisterPage = ({ addNewUser }) => {
	return (
		<StyledPage>
			<ReturnBtn />
			<FormRegister addNewUser={addNewUser} />
		</StyledPage>
	)
}

export default RegisterPage
