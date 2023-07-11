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

const MobilePhonesPages = () => {
	const dispatch = useDispatch()
	const products = useSelector(state => state.cart.products)
	const loggedUser = useSelector(state => state.auth.loggedUser)
	const isOpen = useSelector(store => store.modal.isOpen)

	const message = 'You need to be logged in'

	return (
		<StyledNextPage>
			<ReturnBtn />
			<SyledBackgroundImage>
				<img src='https://blog.yelp.com/wp-content/uploads/2019/07/Photo-by-Ozgu-Ozden-scaled-1200x630.jpg'></img>
			</SyledBackgroundImage>
			<StyledProductsListContainer>
				{products
					.filter(p => p.type === 'mobile phone')
					.map(phone => (
						<StyledProduct>
							<StyledProductImage>
								<img src={phone.image} />
							</StyledProductImage>
							<StyledProductContent>
								<StyledProductHeader>{phone.title}</StyledProductHeader>
								<StyledProductPrice>${phone.price}</StyledProductPrice>
								<StyledProductDesc>{phone.desc}</StyledProductDesc>
							</StyledProductContent>

							<StyledButtons
								onClick={() => {
									loggedUser ? dispatch(addProductToCart(phone)) : dispatch(openModal())
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

export default MobilePhonesPages
