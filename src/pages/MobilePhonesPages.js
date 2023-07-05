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

const MobilePhonesPages = () => {
	const dispatch = useDispatch()
	const products = useSelector(state => state.cart.products)
	const loggedUser = useSelector(state => state.auth.loggedUser)
	//   const orderedProducts = useSelector((state) => state.order.orderedProducts);

	const addProductToCart = phone => {
		console.log(loggedUser)

		{
			loggedUser ? dispatch(addProductToCart(phone)) : console.log('Musisz być zalogowany')
		}
	}

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
									addProductToCart(phone)
									// dispatch(addProductToCart(headphone))
								}}>
								Add to cart
							</button>
						</StyledProduct>
					))}
			</StyledProductsListContainer>
		</StyledNextPage>
	)
}

export default MobilePhonesPages
