import React from 'react'
import { FormRegister } from '../components/FormRegister'
import { StyledContainerFormPage, StyledButtonPreviousPage } from './HomePage.css'
import ReturnBtn from '../components/ReturnBtn'
// import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
	// const navigate = useNavigate()
	return (
		<StyledContainerFormPage>
			<ReturnBtn />
			{/* <StyledButtonPreviousPage onClick={() => navigate('/')}> Return to previous page</StyledButtonPreviousPage> */}
			<FormRegister />
		</StyledContainerFormPage>
	)
}

export default RegisterPage
