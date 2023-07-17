import { React } from 'react'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addNewProduct } from '../../store/cartSlice'
import FormAdmin from './FormAdmin'
import { StyledProductsPage } from '../../pages/MainPages/HomePage.css'

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

const FormAdminAddProduct = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const products = useSelector(state => state.cart.products)

	const submitForm = values => {
		dispatch(addNewProduct(values))
		navigate('/products')
	}

	return (
		<StyledProductsPage>
			<FormAdmin initialValues={initialValues} validationSchema={validationSchema} submitForm={submitForm} />
		</StyledProductsPage>
	)
}

export default FormAdminAddProduct
