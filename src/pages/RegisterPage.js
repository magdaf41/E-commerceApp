import React from 'react'
import { FormRegister } from '../components/FormRegister'
import { StyledContainerRegisterPage, StyledButtonPreviousPage } from './HomePage.css'
import ReturnBtn from '../components/ReturnBtn'
// import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
	// const navigate = useNavigate()
	return (
		<StyledContainerRegisterPage>
			<ReturnBtn />
			{/* <StyledButtonPreviousPage onClick={() => navigate('/')}> Return to previous page</StyledButtonPreviousPage> */}
			<FormRegister />
		</StyledContainerRegisterPage>
	)
}

export default RegisterPage
