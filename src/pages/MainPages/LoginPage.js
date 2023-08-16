import React from 'react'

import ReturnBtn from '../../components/_shared/ReturnBtn'
import { FormLogin } from '../../components/Forms/FormLogin'

import { StyledPage } from './HomePage.css'

const LoginPage = () => {
	return (
		<StyledPage>
			<ReturnBtn />
			<FormLogin />
		</StyledPage>
	)
}

export default LoginPage
