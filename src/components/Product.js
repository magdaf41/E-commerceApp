import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { openModal } from '../store/modalSlice'

import { StyledContentTableTbody } from './_shared/Table.css'
import { StyledSideButtons } from './_shared/Buttons.css'
import { StyledProductImage } from './_shared/ProductsList.css'

const Product = ({ data, orderNo, setProductToDelete }) => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	return (
		<>
			<StyledContentTableTbody key={data.id}>
				<td>{orderNo}</td>
				<td>{data.id}</td>
				<td>{data.title} </td>
				<td>{data.desc}</td>
				<td>
					<StyledProductImage>
						<img src={data.image} alt={data.title}></img>
					</StyledProductImage>
				</td>
				<td>${data.price}</td>
				<td>{data.type}</td>
				<td>{data.category}</td>
				<td>
					<StyledSideButtons
						onClick={() => {
							navigate(`/editproduct/${data.id}`)
						}}>
						Edit
					</StyledSideButtons>

					<StyledSideButtons
						onClick={() => {
							setProductToDelete(data.id)
							dispatch(openModal())
						}}>
						Remove
					</StyledSideButtons>
				</td>
			</StyledContentTableTbody>
		</>
	)
}

export default Product
