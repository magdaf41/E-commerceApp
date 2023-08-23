import { React } from 'react'
import * as Yup from 'yup'
import { v4 as uuid } from 'uuid'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editProduct } from '../../store/cartSlice'
import FormAdmin from './FormAdmin'
import { StyledPage, StyledProductsPage } from '../../pages/MainPages/HomePage.css'

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

const FormAdminEditProduct = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const products = useSelector(state => state.cart.updateListOfProducts)
	const params = useParams()
	const id = params.id

	const editedProduct = useSelector(state => state.cart.products.find(product => product.id === id))

	const initialValues = {
		id: editedProduct.id,
		title: editedProduct.title,
		desc: editedProduct.desc,
		image: editedProduct.image,
		price: editedProduct.price,
		type: editedProduct.type,
		category: editedProduct.category,
	}

	const submitForm = values => {
		dispatch(editProduct(values))
		navigate('/products')
	}

	return (
		<StyledPage>
			<FormAdmin
				type='edit'
				initialValues={initialValues}
				validationSchema={validationSchema}
				submitForm={submitForm}
			/>
		</StyledPage>
	)
}

export default FormAdminEditProduct
