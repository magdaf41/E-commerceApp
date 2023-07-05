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

const LaptopPages = () => {
	const dispatch = useDispatch()
	const products = useSelector(state => state.cart.products)
	const loggedUser = useSelector(state => state.auth.loggedUser)

	const addProductToCart = laptop => {
		{
			loggedUser ? dispatch(addProductToCart(laptop)) : console.log('Musisz być zalogowany')
		}
	}

	return (
		<StyledNextPage>
			<ReturnBtn />
			<StyledProductsListContainer>
				{products
					.filter(l => l.type === 'laptop')
					.map(laptop => (
						<StyledProduct>
							<StyledProductImage>
								<img src={laptop.image} />
							</StyledProductImage>
							<StyledProductHeader>
								<h3>{laptop.title}</h3>
								<p>${laptop.price}</p>
							</StyledProductHeader>

							<p>{laptop.desc}</p>

							<button
								onClick={() => {
									addProductToCart(laptop)
								}}>
								Add to cart
							</button>
						</StyledProduct>
					))}
			</StyledProductsListContainer>
		</StyledNextPage>
	)
}

export default LaptopPages
