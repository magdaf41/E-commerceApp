import React, { useState } from 'react'
import {
	StyledProductsListContainer,
	StyledProduct,
	StyledProductImage,
	StyledProductHeader,
} from '../components/ProductsListTemplate.css'
import ReturnBtn from '../components/ReturnBtn'
import { StyledNextPage } from './HomePage.css'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart } from '../store/cartSlice'
import Modal from '../components/Modals/Modal'
import { openModal } from '../store/modalSlice'

const HeadphonesPages = () => {
	const dispatch = useDispatch()
	const products = useSelector(state => state.cart.products)
	const loggedUser = useSelector(state => state.auth.loggedUser)
	const isOpen = useSelector(store => store.modal.isOpen)

	const message = 'You need to be logged in'

	return (
		<StyledNextPage>
			<ReturnBtn />
			<StyledProductsListContainer>
				{products
					.filter(p => p.type === 'headphones')
					.map(headphone => (
						<StyledProduct>
							<StyledProductImage>
								<img src={headphone.image} />
							</StyledProductImage>
							<StyledProductHeader>
								<h3>{headphone.title}</h3>
								<p>${headphone.price}</p>
							</StyledProductHeader>
							<p>{headphone.desc}</p>
							<button
								onClick={() => {
									loggedUser ? dispatch(addProductToCart(headphone)) : dispatch(openModal())
								}}>
								Add to cart
							</button>
						</StyledProduct>
					))}
				{isOpen ? <Modal message={message}></Modal> : null}
			</StyledProductsListContainer>
		</StyledNextPage>
	)
}

export default HeadphonesPages
