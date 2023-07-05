import React from 'react'
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

const HeadphonesPages = () => {
	const dispatch = useDispatch()
	const products = useSelector(state => state.cart.products)
	const loggedUser = useSelector(state => state.auth.loggedUser)

	const addProductToCart = headphone => {
		console.log(loggedUser)

		{
			loggedUser ? dispatch(addProductToCart(headphone)) : console.log('Musisz być zalogowany')
		}
	}

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
									addProductToCart(headphone)
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

export default HeadphonesPages
