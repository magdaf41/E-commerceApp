import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { editProduct } from '../store/cartSlice'
// import { removeProduct } from '../../store/cartSlice'
import { openModal } from '../store/modalSlice'
import { StyledContentTableTbody } from './_shared/Table.css'
import { StyledSideButtons } from './_shared/Buttons.css'
import Modal from './Modals/Modal'
import { removeProduct } from './../store/cartSlice'

const Product = ({ data, orderNo, setProductToDelete }) => {
	// const [productToDeleteId, setProductToDeleteId] = useState('')
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const isOpen = useSelector(store => store.modal.isOpen)
	const location = useLocation()
	const params = new URLSearchParams(location.search)

	return (
		<>
			<StyledContentTableTbody key={data.id}>
				<td>{orderNo}</td>
				<td>{data.id}</td>
				<td>{data.title} </td>
				<td>{data.desc}</td>
				<td>
					<img src={data.image} alt={data.title}></img>
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
							// setProductToDeleteId(data.id)
							dispatch(openModal())
							// dispatch(openModal())
							// setIsSingleRemove(true)
						}}>
						Remove
					</StyledSideButtons>
				</td>
			</StyledContentTableTbody>
		</>
	)
}

export default Product
