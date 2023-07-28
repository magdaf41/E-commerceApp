import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { openModal } from '../../store/modalSlice'
import { addProductToCart } from '../../store/cartSlice'

import ReturnBtn from '../../components/_shared/ReturnBtn'
import { StyledButton } from '../../components/_shared/Buttons.css'
import Modal from '../../components/Modals/Modal'

import {
	StyledProductsListContainer,
	StyledProduct,
	StyledProductImage,
	StyledProductHeader,
	StyledBackgroundImage,
	StyledProductContent,
	StyledProductPrice,
	StyledProductDesc,
	StyledProductPageTitle,
	StyledProductsPageTitle,
} from '../../components/_shared/ProductsList.css'
import { StyledPage, StyledProductsPage } from './HomePage.css'

const ProductPage = ({ name, img, autoCloseModalTime }) => {
	const dispatch = useDispatch()
	const products = useSelector(state => state.cart.products)
	const loggedUser = useSelector(state => state.auth.loggedUser)
	const isOpen = useSelector(store => store.modal.isOpen)

	const [message, setMessage] = useState('You need to be logged in')

	return (
		<StyledPage>
			<ReturnBtn />
			<StyledBackgroundImage img={img}>
				<StyledProductsPageTitle>{name}</StyledProductsPageTitle>
			</StyledBackgroundImage>

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

						<StyledButton
							onClick={() => {
								if (loggedUser) {
									setMessage('Product has been added')
									dispatch(openModal())
									dispatch(addProductToCart(product))
								} else {
									dispatch(openModal())
									setMessage('You need to be logged in')
								}
							}}>
							Add to cart
						</StyledButton>
					</StyledProduct>
				))}
				{isOpen ? <Modal openTime={autoCloseModalTime}>{message}</Modal> : null}
			</StyledProductsListContainer>
		</StyledPage>
	)
}

export default ProductPage
