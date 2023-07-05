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

const SmartwatchPages = () => {
	const dispatch = useDispatch()
	const products = useSelector(state => state.cart.products)
	const loggedUser = useSelector(state => state.auth.loggedUser)

	const addProductToCart = smartwatch => {
		console.log(loggedUser)

		{
			loggedUser ? dispatch(addProductToCart(smartwatch)) : console.log('Musisz być zalogowany')
		}
	}

	return (
		<StyledNextPage>
			<ReturnBtn />
			<StyledProductsListContainer>
				{products
					.filter(p => p.type === 'smartwatch')
					.map(smartwatch => (
						<StyledProduct>
							<StyledProductImage>
								<img src={smartwatch.image} />
							</StyledProductImage>
							<StyledProductHeader>
								<h3>{smartwatch.title}</h3>
								<p>${smartwatch.price}</p>
							</StyledProductHeader>

							<p>{smartwatch.desc}</p>

							<button
								onClick={() => {
									addProductToCart(smartwatch)
								}}>
								Add to cart
							</button>
						</StyledProduct>
					))}
			</StyledProductsListContainer>
		</StyledNextPage>
	)
}

export default SmartwatchPages
