import React from 'react'
import { FormRegister } from '../../components/FormRegister'
import { StyledContainerFormPage } from './HomePage.css'
import ReturnBtn from '../../components/ReturnBtn'

const RegisterPage = () => {
	return (
		<StyledContainerFormPage>
			<ReturnBtn />
			{/* <StyledButtonPreviousPage onClick={() => navigate('/')}> Return to previous page</StyledButtonPreviousPage> */}
			<FormRegister />
		</StyledContainerFormPage>
	)
}

export default RegisterPage
