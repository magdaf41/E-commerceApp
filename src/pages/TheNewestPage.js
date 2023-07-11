import React, { useEffect } from 'react'
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
import { openModal } from '../store/modalSlice'
import Modal from '../components/Modals/Modal'
import { StyledButtons } from '../components/_shared/Buttons.css'

const TheNewesPage = () => {
	const dispatch = useDispatch()
	const products = useSelector(state => state.cart.products)
	const loggedUser = useSelector(state => state.auth.loggedUser)
	const isOpen = useSelector(store => store.modal.isOpen)

	const message = 'You need to be logged in'

	return (
		<StyledNextPage>
			<ReturnBtn />
			<SyledBackgroundImage>
				<img src='https://images.pexels.com/photos/4995996/pexels-photo-4995996.jpeg?cs=srgb&dl=pexels-ivan-samkov-4995996.jpg&fm=jpg'></img>
			</SyledBackgroundImage>
			<StyledProductsListContainer>
				{products
					.filter(p => p.category === 'newest')
					.map(newProduct => (
						<StyledProduct>
							<StyledProductImage>
								<img src={newProduct.image} />
							</StyledProductImage>
							<StyledProductContent>
								<StyledProductHeader>{newProduct.title}</StyledProductHeader>
								<StyledProductPrice>${newProduct.price}</StyledProductPrice>
								<StyledProductDesc>{newProduct.desc}</StyledProductDesc>
							</StyledProductContent>

							<StyledButtons
								onClick={() => {
									loggedUser ? dispatch(addProductToCart(newProduct)) : dispatch(openModal())
								}}>
								Add to cart
							</StyledButtons>
						</StyledProduct>
					))}
			</StyledProductsListContainer>
		</StyledNextPage>
	)
}

export default TheNewesPage
