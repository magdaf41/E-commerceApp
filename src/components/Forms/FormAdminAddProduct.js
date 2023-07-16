import { React, useEffect } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import {
	// StyledFormContainer,
	StyledFormTitle,
	StyledBoxForm,
	// StyledBoxInput,
	StyledInput,
	StyledLabel,
	StyledPError,
	StyledBtn,
} from '../_shared/Form.css'

import {
	StyledAdminProduct,
	StyledBoxInput,
	StyledAdminForm,
	StyledFormContainer,
	StyledInputsWrapper,
} from './FormAdminAddProduct.css'
import { useDispatch, useSelector } from 'react-redux'
import { addNewProduct } from '../../store/cartSlice'

const initialValues = {
	id: '',
	title: '',
	desc: '',
	image: '',
	price: '',
	type: '',
	category: '',
}

const validationSchema = Yup.object().shape({
	id: Yup.string().required().min(4).max(30),
	title: Yup.string().min(4).required(),
	desc: Yup.string().min(10).required(),
	image: Yup.string().min(4).max(30).required(),
	price: Yup.string().min(4).max(30).required(),
	type: Yup.string().min(4).max(30).required(),
	category: Yup.string().min(4).max(30).required(),
})

const FormAdminEditProduct = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	// const products = useSelector(state => state.cart.updateListOfProducts)
	const products = useSelector(state => state.cart.products)

	const submitForm = values => {
		dispatch(addNewProduct(values))
		navigate('/products')
	}

	return (
		<>
			<StyledAdminProduct>
				<StyledFormTitle>Add new product</StyledFormTitle>
				<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={submitForm}>
					{({ errors, touched, handleBlur, handleChange, handleSubmit, values }) => (
						<StyledAdminForm onSubmit={handleSubmit} noValidate>
							<StyledFormContainer>
								<StyledBoxInput>
									<StyledInput
										name='id'
										value={values.id}
										onBlur={handleBlur}
										onChange={handleChange}
										placeholder='id'
									/>
									{errors.id && touched.id && <StyledPError>{errors.id}</StyledPError>}
								</StyledBoxInput>

								<StyledBoxInput>
									<StyledInput
										name='title'
										value={values.title}
										onBlur={handleBlur}
										onChange={handleChange}
										placeholder='title'
									/>
									{errors.title && touched.title && <StyledPError>{errors.title}</StyledPError>}
								</StyledBoxInput>

								<StyledBoxInput>
									<StyledInput
										name='desc'
										value={values.desc}
										onBlur={handleBlur}
										onChange={handleChange}
										placeholder='description'
									/>
									{errors.desc && touched.desc && <StyledPError>{errors.desc}</StyledPError>}
								</StyledBoxInput>
								<StyledBoxInput>
									<StyledInput
										name='image'
										value={values.image}
										onBlur={handleBlur}
										onChange={handleChange}
										placeholder='image src'
									/>
									{errors.image && touched.image && <StyledPError>{errors.image}</StyledPError>}
								</StyledBoxInput>

								<StyledBoxInput>
									<StyledInput
										name='price'
										value={values.price}
										onBlur={handleBlur}
										onChange={handleChange}
										placeholder='price'
									/>
									{errors.price && touched.price && <StyledPError>{errors.price}</StyledPError>}
								</StyledBoxInput>

								<StyledBoxInput>
									<StyledInput
										name='type'
										as='select'
										value={values.type}
										onBlur={handleBlur}
										onChange={handleChange}
										placeholder='type'>
										<option value=''>type</option>
										<option value='mobilephone'>mobile phone</option>
										<option value='smartwatch'>smartwatch</option>
										<option value='headphones'>headphones</option>
										<option value='laptop'>laptop</option>
									</StyledInput>

									{errors.type && touched.type && <StyledPError>{errors.type}</StyledPError>}
								</StyledBoxInput>

								<StyledBoxInput>
									<StyledInput
										name='category'
										as='select'
										value={values.category}
										onBlur={handleBlur}
										onChange={handleChange}
										placeholder='category'>
										<option value=''>category</option>
										<option value='newest'>newest</option>
										<option value='sale'>sale</option>
										<option value='regular'>regular</option>
									</StyledInput>
									{errors.category && touched.category && <StyledPError>{errors.category}</StyledPError>}
								</StyledBoxInput>
								<StyledBtn>Add</StyledBtn>
							</StyledFormContainer>
						</StyledAdminForm>
					)}
				</Formik>
			</StyledAdminProduct>
		</>
	)
}

export default FormAdminEditProduct
