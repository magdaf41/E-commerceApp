import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { openModal } from '../../store/modalSlice'
import { addProductToCart } from '../../store/cartSlice'

import ReturnBtn from '../../components/ReturnBtn'
import { StyledButtons } from '../../components/_shared/Buttons.css'
import Modal from '../../components/Modals/Modal'

import {
	StyledProductsListContainer,
	StyledProduct,
	StyledProductImage,
	StyledProductHeader,
	SyledBackgroundImage,
	StyledProductContent,
	StyledProductPrice,
	StyledProductDesc,
} from '../../components/_shared/ProductsList.css'
import { StyledProductsPage } from './HomePage.css'

const ProductPage = ({ name, img, autoCloseModalTime }) => {
	const dispatch = useDispatch()
	const products = useSelector(state => state.cart.products)
	const loggedUser = useSelector(state => state.auth.loggedUser)
	const isOpen = useSelector(store => store.modal.isOpen)

	return (
		<StyledProductsPage>
			<ReturnBtn />
			<SyledBackgroundImage>
				<img src={img} alt={name}></img>
			</SyledBackgroundImage>
			<StyledProductsListContainer>
				{(name === 'sale' || name === 'newest'
					? products.filter(p => p.category === name)
					: products.filter(p => p.type === name)
				).map(product => (
					<StyledProduct>
						<StyledProductImage>
							<img src={product.image} />
						</StyledProductImage>
						<StyledProductContent>
							<StyledProductHeader>{product.title}</StyledProductHeader>
							<StyledProductPrice>${product.price}</StyledProductPrice>
							<StyledProductDesc>{product.desc}</StyledProductDesc>
						</StyledProductContent>

						<StyledButtons
							onClick={() => {
								loggedUser ? dispatch(addProductToCart(product)) : dispatch(openModal())
							}}>
							Add to cart
						</StyledButtons>
					</StyledProduct>
				))}
				{isOpen ? (
					<Modal openTime={autoCloseModalTime}>
						<h4>You need to be logged in</h4>
					</Modal>
				) : null}
			</StyledProductsListContainer>
		</StyledProductsPage>
	)
}

export default ProductPage
