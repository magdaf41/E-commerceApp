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

const LaptopPages = () => {
	const dispatch = useDispatch()
	const products = useSelector(state => state.cart.products)
	const loggedUser = useSelector(state => state.auth.loggedUser)
	const isOpen = useSelector(store => store.modal.isOpen)

	const message = 'You need to be logged in'

	return (
		<StyledNextPage>
			<ReturnBtn />
			<SyledBackgroundImage>
				<img src='https://ocdn.eu/images/pulscms/MzA7MDA_/6cfd3406f180e99b4527f0908cf1dfe2.jpg'></img>
			</SyledBackgroundImage>
			<StyledProductsListContainer>
				{products
					.filter(l => l.type === 'laptop')
					.map(laptop => (
						<StyledProduct>
							<StyledProductImage>
								<img src={laptop.image} />
							</StyledProductImage>
							<StyledProductContent>
								<StyledProductHeader>{laptop.title}</StyledProductHeader>
								<StyledProductPrice>${laptop.price}</StyledProductPrice>
								<StyledProductDesc>{laptop.desc}</StyledProductDesc>
							</StyledProductContent>
							<StyledButtons
								onClick={() => {
									loggedUser ? dispatch(addProductToCart(laptop)) : dispatch(openModal())
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

export default LaptopPages
