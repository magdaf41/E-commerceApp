import { Formik} from 'formik'
import { v4 as uuid } from 'uuid'
import {
	StyledFormContainer,
	StyledFormTitle,
	StyledBoxForm,
	StyledBoxInput,
	StyledInput,
	StyledLabel,
	StyledPError,
	StyledContainerFormPage,
} from '../_shared/Form.css'
import { StyledButton } from '../_shared/Buttons.css'

const FormAdmin = ({ initialValues, validationSchema, submitForm }) => {
	return (
		<StyledContainerFormPage>
			<StyledFormContainer>
				<StyledFormTitle>Edit new product</StyledFormTitle>
				<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={submitForm}>
					{({ errors, touched, handleBlur, handleChange, handleSubmit, values }) => (
						<StyledBoxForm onSubmit={handleSubmit} noValidate>
							<StyledLabel>Id</StyledLabel>
							<StyledBoxInput>
								<StyledInput name='id' value={values.id} onBlur={handleBlur} onChange={handleChange} placeholder='id' />
								{errors.id && touched.id && <StyledPError>{errors.id}</StyledPError>}
							</StyledBoxInput>

							<StyledLabel>Title</StyledLabel>
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

							<StyledLabel>Description</StyledLabel>
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

							<StyledLabel>Image</StyledLabel>
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

							<StyledLabel>Price</StyledLabel>
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

							<StyledLabel>Type</StyledLabel>
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

							<StyledLabel>Category</StyledLabel>
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

							<StyledButton>Add</StyledButton>
						</StyledBoxForm>
					)}
				</Formik>
			</StyledFormContainer>
		</StyledContainerFormPage>
	)
}

export default FormAdmin
