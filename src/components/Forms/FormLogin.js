import React, { useEffect } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import {
	StyledFormContainer,
	StyledFormTitle,
	StyledBoxForm,
	StyledBoxInput,
	StyledInput,
	StyledLabel,
	StyledPError,
	StyledPLogin,
	StyledSpanLink,
	StyledBtn,
	StyledContainerFormPage,
} from '../_shared/Form.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearResponse, login } from '../../store/authSlice'
import { StyledButton } from '../_shared/Buttons.css'
import { openModal } from '../../store/modalSlice'
import Modal from '../Modals/Modal'

const validationSchema = Yup.object().shape({
	email: Yup.string().required().min(4).max(30),
	password: Yup.string().min(4).max(30).required(),
})

const initialValues = {
	email: '',
	password: '',
}

export const FormLogin = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const response = useSelector(state => state.auth.response)
	const isOpen = useSelector(store => store.modal.isOpen)

	useEffect(() => {
		if (response.success) {
			dispatch(openModal())
		}
	}, [response.success])

	useEffect(() => {
		if (!isOpen && response.success) {
			navigate('/')
			dispatch(clearResponse())
		}
	}, [isOpen])

	const submitForm = values => {
		dispatch(login(values))
	}

	return (
		<StyledContainerFormPage>
			<StyledFormContainer>
				<StyledFormTitle>Sign in</StyledFormTitle>
				<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={submitForm}>
					{({ errors, touched, handleBlur, handleChange, handleSubmit, values }) => (
						<StyledBoxForm onSubmit={handleSubmit} noValidate>
							<StyledLabel>Email</StyledLabel>
							<StyledBoxInput>
								<StyledInput name='email' value={values.email} onBlur={handleBlur} onChange={handleChange} />
								{errors.email && touched.email && <StyledPError>{errors.email}</StyledPError>}
							</StyledBoxInput>

							<StyledLabel>Password</StyledLabel>
							<StyledBoxInput>
								<StyledInput name='password' value={values.password} onBlur={handleBlur} onChange={handleChange} />
								{errors.password && touched.password && <StyledPError>{errors.password}</StyledPError>}
							</StyledBoxInput>
							<StyledButton>Log In</StyledButton>
							<StyledPLogin>
								Don't have an account?
								<Link to='/register'>Sign Up</Link>
							</StyledPLogin>
							<div>{!response.success && response.message && <p>{response.message}</p>}</div>
						</StyledBoxForm>
					)}
				</Formik>
				{isOpen ? (
					<Modal openTime={1000}>
						<h4>You have successfully logged in</h4>
					</Modal>
				) : null}
			</StyledFormContainer>
		</StyledContainerFormPage>
	)
}
