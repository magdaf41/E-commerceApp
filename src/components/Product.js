import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { editProduct } from '../store/cartSlice'
import { openModal } from '../store/modalSlice'
import { StyledContentTableTbody } from './_shared/Table.css'
import { StyledButtons } from './_shared/Buttons.css'

const Product = ({ data, orderNo, setProductToDeleteId }) => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	return (
		<StyledContentTableTbody key={data.id}>
			<td>{orderNo}</td>
			<td>{data.id}</td>
			<td>{data.title} </td>
			<td>{data.desc}</td>
			<td>
				<img src={data.image}></img>
			</td>
			<td>${data.price}</td>
			<td>{data.type}</td>
			<td>{data.category}</td>
			<td>
				<StyledButtons
					onClick={() => {
						dispatch(editProduct(data.id))
						navigate(`/editproduct/${data.id}`)
					}}>
					Edit
				</StyledButtons>

				<StyledButtons
					onClick={() => {
						setProductToDeleteId(data.id)
						dispatch(openModal())
					}}>
					Remove
				</StyledButtons>
			</td>
		</StyledContentTableTbody>
	)
}

export default Product
