import { React } from 'react'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addNewProduct } from '../../store/cartSlice'
import FormAdmin from './FormAdmin'
import { StyledPage, StyledProductsPage } from '../../pages/MainPages/HomePage.css'

const initialValues = {
	title: '',
	desc: '',
	image: '',
	price: '',
	type: '',
	category: '',
}

const validationSchema = Yup.object().shape({
	title: Yup.string().min(4).required(),
	desc: Yup.string().min(10).required(),
	image: Yup.string()
		.matches(/^(https?:\/\/)/, 'Podany link nie zaczyna się od "http" lub "https".')
		.url('Podany link nie jest poprawnym adresem URL.'),
	price: Yup.number(),
	type: Yup.string().min(4).max(30).required(),
	category: Yup.string().min(4).max(30).required(),
})

const FormAdminAddProduct = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const products = useSelector(state => state.cart.products)

	const submitForm = values => {
		dispatch(addNewProduct(values))
		navigate('/products')
	}

	return (
		<StyledPage>
			<FormAdmin initialValues={initialValues} validationSchema={validationSchema} submitForm={submitForm} type='add' />
		</StyledPage>
	)
}

export default FormAdminAddProduct
