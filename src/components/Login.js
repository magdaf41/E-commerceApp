import React, { useEffect } from 'react'
import { Formik, Form, Field } from 'formik'
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
} from './_shared/Form.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearResponse, login } from '../store/authSlice'

const validationSchema = Yup.object().shape({
	email: Yup.string().required().min(4).max(30),
	password: Yup.string().min(4).max(30).required(),
})

const initialValues = {
	email: '',
	password: '',
}

export const Login = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const response = useSelector(state => state.auth.response)

	useEffect(() => {
		if (response.success) {
			navigate('/')
		}
		dispatch(clearResponse())
	}, [response.success])

	const submitForm = values => {
		dispatch(login(values))
		console.log(response.success)
	}
	return (
		<StyledFormContainer>
			<StyledFormTitle>Sing in</StyledFormTitle>

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

						<StyledBtn>Log In</StyledBtn>
						<StyledPLogin>
							Don't have an account?
							<Link to='/register'>
								<StyledSpanLink>Sign Up</StyledSpanLink>
							</Link>
						</StyledPLogin>
						{!response.success && response.message && <p>{response.message}</p>}
					</StyledBoxForm>
				)}
			</Formik>
		</StyledFormContainer>
	)
}
