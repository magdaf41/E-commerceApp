import React, { useEffect } from 'react'
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
import { openModal } from '../store/modalSlice'
import Modal from '../components/Modals/Modal'

const MobilePhonesPages = () => {
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
					.filter(p => p.type === 'mobile phone')
					.map(phone => (
						<StyledProduct>
							<StyledProductImage>
								<img src={phone.image} />
							</StyledProductImage>
							<StyledProductHeader>
								<h3>{phone.title}</h3>
								<p>${phone.price}</p>
							</StyledProductHeader>

							<p>{phone.desc}</p>

							<button
								onClick={() => {
									loggedUser ? dispatch(addProductToCart(phone)) : dispatch(openModal())
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

export default MobilePhonesPages
