import React from 'react'

import ReturnBtn from '../../components/_shared/ReturnBtn'
import { FormRegister } from '../../components/Forms/FormRegister'

import { StyledPage } from './HomePage.css'

const RegisterPage = ({ addNewUser }) => {
	return (
		<StyledPage>
			<ReturnBtn />
			<FormRegister addNewUser={addNewUser} />
		</StyledPage>
	)
}

export default RegisterPage
