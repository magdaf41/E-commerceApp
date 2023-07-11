import React, { useState } from 'react'
import {
	StyledProductsListContainer,
	StyledProduct,
	StyledProductImage,
	StyledProductHeader,
	SyledBackgroundImage,
	StyledProductContent,
	StyledProductPrice,
	StyledProductDesc,
} from '../components/_shared/ProductsList.css'
import ReturnBtn from '../components/ReturnBtn'
import { StyledNextPage } from './HomePage.css'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart } from '../store/cartSlice'
import Modal from '../components/Modals/Modal'
import { openModal } from '../store/modalSlice'
import { StyledButtons } from '../components/_shared/Buttons.css'
import ProductsListOneType from '../components/ProductsListOneType'

const SalePage = () => {
	const dispatch = useDispatch()
	const products = useSelector(state => state.cart.products)
	const loggedUser = useSelector(state => state.auth.loggedUser)
	const isOpen = useSelector(store => store.modal.isOpen)

	const message = 'You need to be logged in'

	return (
		<StyledNextPage>
			<ReturnBtn />
			<SyledBackgroundImage>
				<img src='https://daisylinden.com/wp-content/uploads/apple-watch-girl-hand.jpg'></img>
			</SyledBackgroundImage>
			<StyledProductsListContainer>
				{products
					.filter(p => p.category === 'sale')
					.map(saleProduct => (
						<StyledProduct>
							<StyledProductImage>
								<img src={saleProduct.image} />
							</StyledProductImage>
							<StyledProductContent>
								<StyledProductHeader>{saleProduct.title}</StyledProductHeader>
								<StyledProductPrice>${saleProduct.price}</StyledProductPrice>
								<StyledProductDesc>{saleProduct.desc}</StyledProductDesc>
							</StyledProductContent>

							<StyledButtons
								onClick={() => {
									loggedUser ? dispatch(addProductToCart(saleProduct)) : dispatch(openModal())
								}}>
								Add to cart
							</StyledButtons>
						</StyledProduct>
					))}
				{isOpen ? <Modal message={message}></Modal> : null}
			</StyledProductsListContainer>
		</StyledNextPage>
	)
}

export default SalePage
