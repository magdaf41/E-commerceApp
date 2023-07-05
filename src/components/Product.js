import React from 'react'
import { StyledProduct, StyledProductsButtons } from '../pages/ProductsList.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { editProduct } from '../store/cartSlice'
import { openModal } from '../store/modalSlice'

const Product = ({ data, orderNo, setProductToDeleteId }) => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	console.log(setProductToDeleteId)
	return (
		<StyledProduct>
			<p>{orderNo}</p>
			<p>{data.id}</p>
			<p>{data.title} </p>
			<p>{data.desc}</p>
			<img src={data.image}></img>
			<p>{data.price}</p>
			<p>{data.type}</p>
			<p>{data.category}</p>
			<StyledProductsButtons>
				{/* {loggedUser.role !== 'client' && ( */}
				<button
					onClick={() => {
						dispatch(editProduct(data.id))
						navigate(`/editproduct/${data.id}`)
					}}>
					Edit
				</button>

				<button
					onClick={() => {
						setProductToDeleteId(data.id)
						dispatch(openModal())
					}}>
					Remove
				</button>
			</StyledProductsButtons>
		</StyledProduct>
	)
}

export default Product
