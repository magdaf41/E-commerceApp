import React, { useEffect } from 'react'
import ReturnBtn from '../components/ReturnBtn'
import {
	StyledContainerProductsList,
	StyledProduct,
	StyledProductsList,
	StyledProductsListHeader,
} from './ProductsList.css'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart } from '../store/cartSlice'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { removeProduct } from '../store/cartSlice'
import { editProduct } from '../store/cartSlice'
import { StyledBtn } from '../components/_shared/Form.css'
import Modal from '../components/Modals/ClearCartModal'
import { openModal } from '../store/modalSlice'

const ProductsList = () => {
	const dispatch = useDispatch()
	// const products = useSelector(state => state.cart.updateListOfProducts)
	const editProductValue = useSelector(state => state.cart.editProduct)
	const navigate = useNavigate()
	const products = useSelector(state => state.cart.products)
	const loggedUser = useSelector(state => state.auth.loggedUser)
	const isOpen = useSelector(store => store.modal.isOpen)

	console.log(isOpen)

	return (
		<StyledContainerProductsList>
			<ReturnBtn />
			<StyledProductsListHeader>
				<p>Lp.</p>
				<p>Id</p>
				<p>title</p>
				<p>description</p>
				<p>image</p>
				<p>price</p>
				<p>type</p>
				<p>category</p>
			</StyledProductsListHeader>
			{isOpen ? <Modal></Modal> : null}
			<StyledProductsList>
				{/* {products.map((p) => ( */}
				{products.map(p => (
					<StyledProduct>
						<p>{products.indexOf(p) + 1}</p>
						<p>{p.id}</p>
						<p>{p.title}</p>
						<p>{p.desc}</p>
						<img src={p.image}></img>
						<p>{p.price}</p>
						<p>{p.type}</p>
						<p>{p.category}</p>
						<div>
							{/* {loggedUser.role !== 'client' && ( */}
							<button
								onClick={() => {
									dispatch(editProduct(p.id))
									console.log(dispatch(editProduct(p.id)))
									navigate(`/editproduct/${p.id}`)
								}}>
								Edit
							</button>
							{/* )} */}
							<button
								onClick={e => {
									dispatch(openModal())
								}}>
								Remove
							</button>
						</div>
					</StyledProduct>
				))}

				<StyledBtn onClick={() => navigate('/addNewproduct')}>
					<span>Add new product</span>
				</StyledBtn>
			</StyledProductsList>
		</StyledContainerProductsList>
	)
}

export default ProductsList
