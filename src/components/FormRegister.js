import { React, useEffect } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearResponse, register } from '../store/authSlice'
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
} from './_shared/Form.css'
import { StyledButtons } from './_shared/Buttons.css'

const validationSchema = Yup.object().shape({
	name: Yup.string().required().min(4).max(30),
	email: Yup.string().email().required(),
	password: Yup.string().min(4).max(30).required(),
})

const initialValues = {
	name: '',
	email: '',
	password: '',
}

export const FormRegister = () => {
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
		dispatch(register(values))
		if (response.success) {
			navigate('/')
		}
	}
	return (
		<StyledFormContainer>
			<StyledFormTitle>Sing up</StyledFormTitle>
			<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={submitForm}>
				{({ errors, touched, handleBlur, handleChange, handleSubmit, values }) => (
					<StyledBoxForm onSubmit={handleSubmit} noValidate>
						<StyledLabel>Name</StyledLabel>
						<StyledBoxInput>
							<StyledInput name='name' value={values.name} onBlur={handleBlur} onChange={handleChange} />
							{errors.name && touched.name && <StyledPError>{errors.name}</StyledPError>}
						</StyledBoxInput>

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

						<StyledButtons>Register</StyledButtons>
						<StyledPLogin>
							Already have an account?
							<Link to='/login'>
								<StyledSpanLink>Sign In</StyledSpanLink>
							</Link>
						</StyledPLogin>
						{response.message && !response.success && <p>{response.message}</p>}
					</StyledBoxForm>
				)}
			</Formik>
		</StyledFormContainer>
	)
}
