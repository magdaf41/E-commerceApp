import { React } from 'react'
import * as Yup from 'yup'
import { v4 as uuid } from 'uuid'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editProduct } from '../../store/cartSlice'
import FormAdmin from './FormAdmin'
import { StyledProductsPage } from '../../pages/MainPages/HomePage.css'

const validationSchema = Yup.object().shape({
	//   id: Yup.string().required().min(4).max(30),
	title: Yup.string().min(4).required(),
	desc: Yup.string().min(10).required(),
	// image: Yup.string().matches(
	// 	/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
	// 	'Enter correct url!'
	// ),
	price: Yup.string().min(4).max(30).required(),
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
		console.log(products)
	}

	return (
		<StyledProductsPage>
			<FormAdmin initialValues={initialValues} validationSchema={validationSchema} submitForm={submitForm} />
		</StyledProductsPage>
	)
}

export default FormAdminEditProduct
