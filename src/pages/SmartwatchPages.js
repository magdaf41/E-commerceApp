import React from 'react'
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

const SmartwatchPages = () => {
	const dispatch = useDispatch()
	const products = useSelector(state => state.cart.products)
	const loggedUser = useSelector(state => state.auth.loggedUser)
	const isOpen = useSelector(store => store.modal.isOpen)

	const message = 'You need to be logged in'

	return (
		<StyledNextPage>
			<ReturnBtn />
			<SyledBackgroundImage>
				<img src='https://ecsmedia.pl/c/jak-skonfigurowac-smartwatch-instrukcja-krok-po-kroku-artilce.horizontal.large-img67217054.jpg'></img>
			</SyledBackgroundImage>
			<StyledProductsListContainer>
				{products
					.filter(p => p.type === 'smartwatch')
					.map(smartwatch => (
						<StyledProduct>
							<StyledProductImage>
								<img src={smartwatch.image} />
							</StyledProductImage>
							<StyledProductContent>
								<StyledProductHeader>{smartwatch.title}</StyledProductHeader>
								<StyledProductPrice>${smartwatch.price}</StyledProductPrice>
								<StyledProductDesc>{smartwatch.desc}</StyledProductDesc>
							</StyledProductContent>
							<StyledButtons
								onClick={() => {
									loggedUser ? dispatch(addProductToCart(smartwatch)) : dispatch(openModal())
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

export default SmartwatchPages
